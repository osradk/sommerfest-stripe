export default function EventDetails() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 border border-indigo-50 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-4"></div>
        <h2 className="text-2xl font-semibold text-indigo-900">Tid og sted</h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-start group/item hover:transform hover:translate-x-2 transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
            <span className="text-2xl">📅</span>
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-900 text-lg group-hover/item:text-indigo-600 transition-colors duration-300">
              15. juni 2025
            </p>
            <p className="text-gray-600">kl. 14:00</p>
          </div>
        </div>

        <div className="flex items-start group/item hover:transform hover:translate-x-2 transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
            <span className="text-2xl">📍</span>
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-900 text-lg group-hover/item:text-indigo-600 transition-colors duration-300">
              Vesterbro Kulturhus
            </p>
            <p className="text-gray-600">København, Danmark</p>
          </div>
        </div>
      </div>

      {/* Dekorativt element */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </div>
  );
}
