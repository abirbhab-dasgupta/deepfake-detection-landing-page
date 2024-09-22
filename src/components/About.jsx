import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineSecurityScan, AiOutlineSafety, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-900 to-black text-white p-8">
      <header className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-xl text-gray-200">A team dedicated to combating digital misinformation</p>
      </header>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Team" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">AI Developers & Security Experts</div>
            <p className="mt-2 text-gray-600">
              As a team of AI developers with a passion for digital security, we've dedicated our careers to leveraging cutting-edge technology in the fight against misinformation. With expertise in machine learning and a deep understanding of the evolving landscape of digital threats, we created this deepfake detector to empower users with the tools they need to navigate our increasingly complex digital world.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          Our core mission is to build <span className="text-indigo-500 font-semibold">trust</span> in the digital space by providing innovative solutions that enhance <span className="text-indigo-500 font-semibold">security</span> and promote <span className="text-indigo-500 font-semibold">transparency</span>. We're committed to addressing the impact of deepfakes on digital integrity and empowering individuals to make informed decisions about the content they encounter online.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<AiOutlineSecurityScan className="text-4xl text-indigo-500" />} title="Advanced Detection" description="Utilizes state-of-the-art AI to identify manipulated media" />
          <FeatureCard icon={<AiOutlineSafety className="text-4xl text-indigo-500" />} title="User Privacy" description="Ensures user data protection and anonymity" />
          <FeatureCard icon={<AiOutlineEye className="text-4xl text-indigo-500" />} title="Real-time Analysis" description="Provides instant results for quick decision making" />
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to='/join-waitlist' className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Try the Detector
        </Link>
      </div>

      
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
    {icon}
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-800">{description}</p>
  </div>
);

const SocialIcon = ({ Icon, href }) => (
  <a href={href} className="text-gray-300 hover:text-indigo-500 transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">
    <Icon className="text-2xl" />
  </a>
);

export default About;