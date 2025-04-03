import Stripe from "stripe";
   console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY ? "Key found (not showing for security)" : "Key missing");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });
export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "dkk",
            product_data: {
              name: "Sommerfest 2025",
              description: "Tilmelding til sommerfesten den 15. juni 2025",
            },
            unit_amount: 10000, // 100 DKK i øre
          },
          quantity: 1,
        },
      ],
      mode: "payment",
       success_url: `https://sommerfest-stripe.vercel.app/tak`,
   cancel_url: `https://sommerfest-stripe.vercel.app`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
