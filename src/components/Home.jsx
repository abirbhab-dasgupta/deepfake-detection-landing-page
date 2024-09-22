import { LineChart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-black text-white overflow-hidden">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div> */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg"></div>
        <h1 className="relative z-20 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-center animate-fade-in-down">
          Deepfake Detector
        </h1>
        <p className="relative z-20 text-xl sm:text-2xl text-gray-300 mb-8 text-center max-w-3xl animate-fade-in-up">
          Protect yourself from digital deception with our cutting-edge deepfake detection technology
        </p>
        <div className="relative z-20 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <Link to='/join-waitlist' className="bg-transparent border-2 border-white text-gray-300 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Try it Now
          </Link>
          <Link to='/about' className="bg-transparent border-2 border-white text-gray-300 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Learn More
          </Link>
        </div>
        <div className="relative z-20 w-full max-w-4xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl">
          <div className="relative aspect-w-16 aspect-h-9">
            <img
              src="https://images.unsplash.com/photo-1654009603731-20b6d7536002?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Deepfake detection process"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={toggleVideo}
                className="bg-gray-500 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
              </button>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-2">How It Works</h2>
            <p className="text-gray-300">
              Our advanced AI algorithms analyze facial features, voice patterns, and video artifacts to detect even the most sophisticated deepfakes with high accuracy.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white text-sm">
        © 2023 Deepfake Detector. All rights reserved.
      </div>
    </div>
  );
};

export default Home;
