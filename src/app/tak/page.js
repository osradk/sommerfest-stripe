export default function Tak() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="glass-effect p-8 rounded-2xl shadow-2xl max-w-md w-full text-center transform hover:scale-105 transition-all duration-300">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold gradient-text mb-4">
            Tak for din tilmelding!
          </h1>

          <p className="text-white text-lg opacity-80 mb-8">
            Vi glæder os til at se dig til sommerfesten
          </p>
        </div>

        <div className="glass-effect p-6 rounded-xl mb-8">
          <h2 className="text-white font-semibold mb-2">Detaljer</h2>
          <p className="text-white opacity-80">
            15. juni 2025 kl. 14:00
            <br />
            Vesterbro Kulturhus, København
          </p>
        </div>

        <a
          href="/"
          className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          ← Tilbage til forsiden
        </a>
      </div>
    </div>
  );
}
