import "./globals.css";

export const metadata = {
  title: "Sommerfest Tilmelding",
  description: "Tilmeld dig sommerfesten 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="min-h-screen flex flex-col">
        <nav className="glass-effect fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
                >
                  Sommerfest 2025
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:text-purple-200 transition-colors"
                >
                  Hjem
                </a>
                <a
                  href="/tak"
                  className="text-white hover:text-purple-200 transition-colors"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow pt-16">{children}</main>

        <footer className="glass-effect mt-auto">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Kontakt
                </h3>
                <p className="text-purple-200">info@sommerfest.dk</p>
                <p className="text-purple-200">+45 12 34 56 78</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Adresse
                </h3>
                <p className="text-purple-200">Vesterbro Kulturhus</p>
                <p className="text-purple-200">København, Danmark</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Følg os
                </h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
