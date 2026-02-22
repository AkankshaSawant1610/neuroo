import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 py-10">
      <div className="flex-1 space-y-6">
        <h2 className="text-5xl font-black text-gray-900 leading-tight">
          Nurture your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-500">Mental Garden.</span>
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
          NeuroBloom provides science-backed tools to help you understand your emotions and cultivate lasting peace.
        </p>
        <div className="flex gap-4">
          <Link to="/assessments" className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all">
            Take Test
          </Link>
          <Link to="/games" className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
            Play Games
          </Link>
        </div>
      </div>
      
      <div className="flex-1 w-full relative">
        <img 
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1964&auto=format&fit=crop" 
          alt="Peaceful Nature" 
          className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-purple-50">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl">🌿</div>
          <div>
            <p className="text-sm font-bold text-gray-800">Relaxation Tip</p>
            <p className="text-xs text-gray-500">Take 3 deep breaths now.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;