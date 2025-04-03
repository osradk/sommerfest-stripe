# Sommerfest Tilmelding

Et simpelt Next.js projekt til tilmelding til sommerfest med Stripe integration.

## Lokal udvikling

1. Installer afhængigheder:

```bash
npm install
```

2. Start udviklingsserveren:

```bash
npm run dev
```

3. Åbn [http://localhost:3000](http://localhost:3000) i din browser

## Ændre Stripe Checkout link

For at ændre Stripe Checkout linket:

1. Åbn `app/page.js`
2. Find linjen med `href="https://buy.stripe.com/test_abc123"`
3. Erstat linket med dit eget Stripe Checkout link

## Deployment til Vercel

1. Push dit projekt til GitHub
2. Log ind på [Vercel](https://vercel.com)
3. Klik på "New Project"
4. Vælg dit GitHub repository
5. Vercel vil automatisk detektere at det er et Next.js projekt
6. Klik på "Deploy"

Vercel vil automatisk:

- Bygge dit projekt
- Konfigurere nødvendige miljøvariabler
- Deploye dit projekt til en unik URL

## Teknologier

- Next.js
- Tailwind CSS
- Stripe Checkout
