'use client';

import { useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { FaCheckCircle } from 'react-icons/fa';

const plans = {
  monthly: [
    {
      name: 'Starter',
      price: '$19',
      period: '/mo',
      features: ['1 Event Site', 'Basic Support', 'Limited Analytics'],
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/mo',
      features: ['5 Event Sites', 'Priority Support', 'Advanced Analytics'],
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/mo',
      features: ['Unlimited Sites', '24/7 Support', 'Custom Integrations'],
    },
  ],
  yearly: [
    {
      name: 'Starter',
      price: '$180',
      period: '/yr',
      features: ['1 Event Site', 'Basic Support', 'Limited Analytics'],
    },
    {
      name: 'Professional',
      price: '$490',
      period: '/yr',
      features: ['5 Event Sites', 'Priority Support', 'Advanced Analytics'],
    },
    {
      name: 'Enterprise',
      price: '$990',
      period: '/yr',
      features: ['Unlimited Sites', '24/7 Support', 'Custom Integrations'],
    },
  ],
};

export default function CreativePricingPage() {
  const [billing, setBilling] = useState('monthly');

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center px-6 py-16 text-white">
      <h1 className="text-5xl font-extrabold mb-12 tracking-wide drop-shadow-lg">
        Choose Your Plan
      </h1>

      {/* Interactive Toggle Switch */}
      <div className="relative inline-flex bg-gray-800 rounded-full p-1 mb-14 select-none cursor-pointer">
        <div
          className={`absolute top-1 left-1 w-20 h-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 rounded-full transition-transform duration-500 ease-in-out ${
            billing === 'monthly' ? 'translate-x-0' : 'translate-x-24'
          } shadow-lg`}
          aria-hidden="true"
        ></div>
        <button
          onClick={() => setBilling('monthly')}
          className={`relative w-24 h-12 rounded-full text-lg font-semibold z-10 transition-colors duration-300 ${
            billing === 'monthly' ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling('yearly')}
          className={`relative w-24 h-12 rounded-full text-lg font-semibold z-10 transition-colors duration-300 ${
            billing === 'yearly' ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {plans[billing].map(({ name, price, period, features }, idx) => (
          <Card
            key={name}
            className={`relative rounded-3xl border-2 border-transparent bg-gradient-to-br ${
              idx === 1
                ? 'from-pink-600 via-red-600 to-yellow-500 shadow-[0_15px_30px_-5px_rgba(255,105,180,0.7)]'
                : 'from-gray-800 to-gray-900'
            } text-white transform transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(255,105,180,0.8)] cursor-pointer`}
          >
            {/* Highlight Pro Plan */}
            {idx === 1 && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 rounded-full px-6 py-1 text-sm font-semibold uppercase tracking-wide shadow-lg">
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-extrabold">{price}</span>
              <span className="text-xl text-gray-300">{period}</span>
            </div>

            <ul className="space-y-4 mb-8 text-left">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-lg text-gray-200 hover:text-pink-400 transition-colors duration-300"
                >
                  <FaCheckCircle className="text-pink-400 animate-pulse" size={20} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              gradientDuoTone="pinkToOrange"
              className="w-full text-lg font-semibold tracking-wide shadow-lg hover:shadow-pink-500/70"
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
