export default function EventFeatures() {
  const features = [
    {
      icon: "🍽️",
      text: "Lækker buffet med både kolde og varme retter",
      description:
        "Nyd en varieret menu med både traditionelle og moderne retter",
    },
    {
      icon: "🍷",
      text: "Fri bar med øl, vin og sodavand",
      description: "Kvalitetsdrikkevarer hele aftenen",
    },
    {
      icon: "🎵",
      text: "Live musik og underholdning",
      description: "Professionelle musikere og overraskende indslag",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 border border-indigo-50 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-4"></div>
        <h2 className="text-2xl font-semibold text-indigo-900">
          Det får du med
        </h2>
      </div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.text}
                </p>
                <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
