import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ResultSection from './components/ResultSection';
import axios from 'axios';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App({ isAdmin }) {
  const [result, setResult] = useState(null);
  // const [isAdmin, setIsAdmin] = useState(false); // Change to false to test regular user view

  const handleSearch = async (origin, destination) => {
    try {
      const res = await axios.get(`http://travelcompanion-backend-lb-1994745567.eu-west-1.elb.amazonaws.com/api/transport/routes/`, {
        params: {
          from: origin,
          to: destination,
        },
      });
      setResult(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult(null);
    }
  };
  // 👉 If current route is /admin, show only AdminPanel
  if (isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="px-4">
          <AdminPanel />
        </main>
        <Footer />
      </div>
    );
  }
  else
  {

  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow scroll-smooth">
            <section id="home">
              <HeroSection onSearch={handleSearch} />
            </section>

            <section id="destinations" className="mt-16 animate-fade-up duration-700">
              <ResultSection result={result} />
            </section>
          <section className="bg-blue-50 py-16">
            <section
            id="about"
            className="mt-32 px-4 max-w-4xl mx-auto text-center opacity-0 animate-fade-in-up duration-700 delay-200"
          >
            <h2 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-tight animate-pulse">
              About Travel Companion
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At <span className="font-semibold text-blue-600">Travel Companion</span>, we believe that discovering new places should be exciting — not overwhelming.
              Our platform brings together <strong>live weather updates</strong>, <strong>transport routes</strong>, <strong>hotel suggestions</strong>, and <strong>inspiring images</strong> so that you can plan the perfect trip in just a few clicks.
            </p>
            <p className="text-gray-600 text-base">
              Whether you’re chasing the charm of cobbled Irish towns or just want to escape the city hustle, we’ve got your back. All data is fetched in real-time and beautifully packaged for a seamless planning experience.
            </p>
          </section>

          <section
            id="contact"
            className="mt-32 px-4 max-w-3xl mx-auto text-center opacity-0 animate-fade-in-up duration-700 delay-500"
          >
            <h2 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-tight animate-bounce">
              Get in Touch ✉️
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Got suggestions? Found a bug? Want to partner with us?  
              We’d love to hear from you!
            </p>
            <p className="text-gray-600 text-base">
              Drop us a line at <a href="mailto:info@travelcompanion.ie" className="text-blue-600 underline">info@travelcompanion.ie</a>  
              or reach out on our socials. We're friendly, we promise. 😊
            </p>

            <div className="mt-6 flex justify-center gap-6 text-blue-600 text-2xl">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-800">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-800">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-800">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </section>
          </section>
      </main>


  
      <Footer />
    </div>
  );
}
}

export default App;
