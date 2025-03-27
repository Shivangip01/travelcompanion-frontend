import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(origin, destination);
  };

  return (
    <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Plan Your Perfect Journey 🌍
      </h1>

      <h2 className="text-xl md:text-2xl text-blue-600 mb-10 h-10">
        <Typewriter
          words={[
            'Explore hidden gems ✨',
            'Discover new adventures 🏞️',
            'Travel smart with us 🧳',
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="From"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 border rounded-xl shadow focus:outline-none"
        />
        <input
          type="text"
          placeholder="To"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 border rounded-xl shadow focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full md:w-auto"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default HeroSection;
