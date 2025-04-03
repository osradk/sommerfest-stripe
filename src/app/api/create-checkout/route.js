import Stripe from "stripe";
import supabase from "../../../lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

console.log(
  "Stripe Key:",
  process.env.STRIPE_SECRET_KEY
    ? "Key found (not showing for security)"
    : "Key missing"
);

export async function POST(request) {
  try {
    // Hent userId fra request body
    const { userId } = await request.json();

    // Find bruger i Supabase
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (userError) throw new Error("Bruger ikke fundet");

    // Opret Stripe checkout session
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
      success_url: `https://sommerfest-stripe.vercel.app/tak?user=${userId}`,
      cancel_url: `https://sommerfest-stripe.vercel.app`,
      metadata: {
        userId: userId, // Gem bruger ID som metadata i betalingen
        userName: user.name,
        userEmail: user.email,
      },
    });

    // Gem betalingsintention i Supabase
    const { error: paymentError } = await supabase.from("payments").insert({
      user_id: userId,
      stripe_session_id: session.id,
      amount: 10000,
      status: "awaiting",
      created_at: new Date(),
    });

    if (paymentError) {
      console.error("Fejl ved gem af betaling:", paymentError);
    }

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
