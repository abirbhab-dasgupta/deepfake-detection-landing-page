import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Intro",
      price: 29,
      description: "For individuals and small content creators",
      features: [
        "100 Scans/month",
        "Image Detection",
        "Basic API Access",
        "Email Support",
        "Community Forum Access",
        "Weekly Reports",
        "1 User Account",
      ],
      color: "bg-blue-100",
      buttonColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "Base",
      price: 59,
      description: "Ideal for growing businesses and teams",
      features: [
        "1,000 Scans/month",
        "Image & Video Detection",
        "Advanced API Access",
        "Priority Email Support",
        "Slack Integration",
        "Daily Reports",
        "5 User Accounts",
        "Custom Branding",
      ],
      color: "bg-green-100",
      buttonColor: "bg-green-500 hover:bg-green-600"
    },
    {
      name: "Popular",
      price: 99,
      description: "Best value for medium to large organizations",
      features: [
        "10,000 Scans/month",
        "Image, Video & Audio Detection",
        "Full API Access",
        "24/7 Priority Support",
        "Advanced Integrations",
        "Real-time Alerts",
        "20 User Accounts",
        "Custom AI Model Training",
        "Compliance Reports",
      ],
      color: "bg-purple-100",
      buttonColor: "bg-purple-500 hover:bg-purple-600"
    },
    {
      name: "Premium",
      price: 199,
      description: "Advanced features for large enterprises",
      features: [
        "Unlimited Scans",
        "Full-spectrum Detection",
        "Custom API Solutions",
        "Dedicated Account Manager",
        "On-premise Deployment Option",
        "Advanced Security Features",
        "Unlimited User Accounts",
        "Custom AI Solutions",
        "Forensic Analysis Tools",
        "Regulatory Compliance Suite",
      ],
      color: "bg-red-100",
      buttonColor: "bg-red-500 hover:bg-red-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-900 to-black text-white min-h-screen pt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-200 sm:text-4xl">
            Get an attractive price here
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
            Our flexible options ensure you get the best value for your investment.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${plan.color} rounded-lg shadow-lg overflow-hidden lg:flex lg:flex-col`}
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-900"
                  >
                    {plan.name}
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-800">
                ${plan.price}
                  <span className="ml-1 text-2xl font-medium text-gray-600">/mo</span>
                </div>
                <p className="mt-5 text-lg text-gray-800">{plan.description}</p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheck className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className={`flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white ${plan.buttonColor} transition duration-150 ease-in-out`}
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;