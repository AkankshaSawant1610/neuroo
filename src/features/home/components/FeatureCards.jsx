import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Assessments', path: '/assessments', icon: '📊', desc: 'Understand your mental patterns.' },
  { title: 'Mind Games', path: '/games', icon: '🧠', desc: 'Sharpen your cognitive focus.' },
  { title: 'Sanctuary', path: '/relaxation', icon: '🌿', desc: 'Instant tools for relaxation.' }
];

const FeatureCards = () => {
  return (
    <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      {features.map((item) => (
        <Link key={item.title} to={item.path} className="feature-card p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
          <div className="text-4xl mb-4 animate-float">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-500">{item.desc}</p>
        </Link>
      ))}
    </section>
  );
};

export default FeatureCards;