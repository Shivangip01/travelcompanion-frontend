import React from 'react';

const ResultSection = ({ result }) => {
  if (!result) return null;

  return (
    <section className="max-w-6xl mx-auto mt-10 p-6 md:p-10 bg-white rounded-2xl shadow-xl transition-all duration-300">
      
      {/* Destination Title */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-2 tracking-tight">
          ✈️ {result.destination.name}
        </h2>
        <p className="text-gray-600 text-lg">{result.destination.description}</p>
        <p className="text-sm text-blue-500 mt-1">
          Best time to visit: <span className="font-medium">{result.destination.best_time_to_visit}</span>
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Weather + Transport */}
        <div className="space-y-6">
          {/* Weather */}
          {typeof result.weather === 'object' && (
            <div className="bg-blue-50 rounded-xl p-4 shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-1">🌤️ Current Weather</h3>
              <p className="text-gray-700">
                {result.weather.temperature}, {result.weather.condition}
              </p>
            </div>
          )}

          {/* Transport */}
          <div className="bg-blue-50 rounded-xl p-4 shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🚍 Transport Options</h3>
            {Array.isArray(result.transport_options) ? (
              <ul className="space-y-2 text-gray-800">
                {result.transport_options.map((option, index) => (
                  <li key={index} className="bg-white rounded-lg border p-3 hover:shadow-md transition">
                    <div className="font-semibold">
                      {option.from_city} → {option.to_city}
                    </div>
                    <div className="text-sm text-gray-600">
                      Mode: {option.mode} | Duration: {option.duration} | Price: {option.price}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="italic text-red-500">{result.transport_options}</p>
            )}
          </div>
        </div>

        {/* Hotels */}
        <div className="bg-yellow-50 rounded-xl p-4 shadow">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">🏨 Recommended Hotels</h3>
          <ul className="divide-y divide-yellow-200">
            {result.destination.recommended_hotels?.map((hotel, i) => (
              <li key={i} className="py-2">
                <span className="font-medium">{hotel.name}</span> — <span className="text-gray-600">{hotel.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Images */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">📸 Destination Views</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {result.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Destination"
              className="rounded-xl shadow hover:scale-105 transition-transform object-cover h-48 w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
