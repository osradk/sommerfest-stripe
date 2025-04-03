export default function EventHeader() {
  return (
    <div className="text-center mb-16 relative">
      {/* Dekorativ baggrund */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 opacity-50 rounded-3xl"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="py-12 px-6 backdrop-blur-sm rounded-3xl">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Sommerfest 2025
        </h1>
        <p className="text-xl text-indigo-900 max-w-2xl mx-auto leading-relaxed">
          Kom og vær med til årets festligste begivenhed med god mad, drikke og
          underholdning
        </p>

        {/* Dekorative elementer */}
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-200 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      </div>
    </div>
  );
}
