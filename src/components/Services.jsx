import React from "react";
import { FaCheckCircle, FaRocket, FaLock, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const features = [
    { icon: <FaRocket />, title: "Real-time Detection", description: "Detect deepfakes in video, audio, and images instantly." },
    { icon: <FaCheckCircle />, title: "High Accuracy", description: "AI-based algorithms ensure precise detection results." },
    { icon: <FaCode />, title: "Simple API", description: "Easy integration for developers through our API." },
    { icon: <FaLock />, title: "Regular Updates", description: "Stay ahead with updates on the latest deepfake techniques." }
  ];

//   const tiers = [
//     { name: "Basic", price: "$99", features: ["1000 API calls/month", "Email support", "Basic analytics"] },
//     { name: "Pro", price: "$299", features: ["10,000 API calls/month", "Priority support", "Advanced analytics", "Custom integration"] },
//     { name: "Enterprise", price: "Custom", features: ["Unlimited API calls", "24/7 support", "Full suite analytics", "Dedicated account manager", "On-premise deployment"] }
//   ];

//   const testimonials = [
//     { name: "John Doe", company: "TechCorp", text: "This deepfake detection service has been a game-changer for our content moderation." },
//     { name: "Jane Smith", company: "MediaGroup", text: "Incredibly accurate and easy to integrate. It's now an essential part of our workflow." }
//   ];

  return (
    <div className=" min-h-screen pt-20 bg-gradient-to-br from-blue-900 to-black text-white">
      <header className="bg-transparent shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-200">Our Services</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Accurate, Secure, and Easy-to-Use Deepfake Detection</h2>
          <p className="text-gray-100">Our cutting-edge deepfake detection platform offers unparalleled accuracy, robust security, and seamless integration, empowering you to combat misinformation effectively.</p>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-500 text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">How it Works</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ol className="list-decimal list-inside space-y-4 text-gray-600">
              <li>Upload your file (video, audio, or image) to our secure platform.</li>
              <li>Our AI-powered algorithms analyze the content for signs of manipulation.</li>
              <li>Receive a detailed report with confidence scores and highlighted areas of concern.</li>
              <li>Take informed action based on the detection results.</li>
            </ol>
          </div>
        </section>

        {/* Service Tiers Section
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Service Tiers</h2>
          {tiers.map((tier, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-2xl font-bold text-blue-500 mb-4">{tier.price}</p>
              <ul className="space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section> */}

        {/* Customer Success Section
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Customer Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-500 hover:underline">Read more success stories</a>
          </div>
        </section> */}

        {/* Call-to-Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h2>
          <Link to='/contact' className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Contact Us for Custom Solutions
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Services;