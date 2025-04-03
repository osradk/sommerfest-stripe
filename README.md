# Sommerfest Tilmelding 🎉

Et Next.js projekt til håndtering af tilmeldinger og betalinger for en sommerfest, bygget med moderne teknologier og et brugervenligt design.

## Features ✨

- 💳 Stripe integration til sikker betaling
- 🎨 Moderne UI med Tailwind CSS
- 📱 Responsivt design
- ⚡ Server-side rendering med Next.js
- 🔒 Sikker håndtering af betalinger

## Tech Stack 🛠

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Kom i Gang 🚀

### Forudsætninger

- Node.js 18+ installeret
- En Stripe konto (kan oprettes gratis)
- Git installeret

### Installation

1. Klon repository'et:

```bash
git clone https://github.com/osradk/sommerfest-stripe.git
cd sommerfest-stripe
```

2. Installer dependencies:

```bash
npm install
```

3. Opret en `.env.local` fil i rod-mappen med følgende indhold:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
STRIPE_SECRET_KEY=dit_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=dit_stripe_publishable_key
```

4. Start udviklerserveren:

```bash
npm run dev
```

5. Åbn [http://localhost:3000](http://localhost:3000) i din browser

### Stripe Opsætning 💳

1. Gå til [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Find dine API nøgler (både Secret og Publishable)
3. Indsæt nøglerne i `.env.local` filen

## Projektstruktur 📁

```
src/
├── app/
│   ├── page.js (Forsiden)
│   ├── tak/
│   │   └── page.js (Tak-siden)
│   ├── api/
│   │   └── create-checkout/
│   │       └── route.js (Stripe API)
│   ├── components/
│   │   └── ... (UI komponenter)
│   └── globals.css
```

## Deployment 🌐

Projektet kan nemt deployes til Vercel:

1. Push dit projekt til GitHub
2. Gå til [Vercel](https://vercel.com)
3. Importér projektet
4. Tilføj miljøvariable fra `.env.local`
5. Deploy!

## Udvikling 💻

- `npm run dev`: Start udviklerserver
- `npm run build`: Byg til produktion
- `npm start`: Kør produktionsversion
- `npm run lint`: Kør linter

## Sikkerhed 🔒

- Alle betalinger håndteres sikkert gennem Stripe
- Følsomme data gemmes aldrig på vores servere
- Environment variabler bruges til API nøgler
- HTTPS påkrævet i produktion

## Support 🤝

Hvis du støder på problemer eller har spørgsmål:

1. Tjek [Issues](https://github.com/osradk/sommerfest-stripe/issues)
2. Opret et nyt issue hvis dit problem ikke er rapporteret

## Licens 📄

Dette projekt er open source og tilgængeligt under MIT licensen.
