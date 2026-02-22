import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 playful-btn">
      <div className="flex-1 text-left">
        <div className="inline-block px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">
          Personal Growth
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
          Nurture your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-500">Mental Garden.</span>
        </h1>
        <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-lg">
          NeuroBloom provides science-backed tools to help you understand your emotions and cultivate lasting peace.
        </p>
        <div className="flex gap-4">
          <Link to="/assessments" className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-purple-100 hover:bg-purple-700 transition-all">
            Take Test
          </Link>
          <Link to="/games" className="bg-white border-2 border-slate-100 text-slate-700 px-10 py-4 rounded-2xl font-bold hover:border-purple-200 transition-all">
            Play Games
          </Link>
        </div>
      </div>
      
      <div className="flex-1 w-full relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-emerald-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <img 
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1964&auto=format&fit=crop" 
          alt="Peaceful Nature" 
          className="relative z-10 rounded-[3rem] shadow-2xl w-full h-[450px] object-cover transform transition-transform group-hover:scale-[1.02]"
        />
        <div className="absolute -bottom-6 -right-6 z-20 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl">🌿</div>
          <div>
            <p className="text-sm font-black text-slate-800">Relaxation Tip</p>
            <p className="text-xs text-slate-500 font-medium">Take 3 deep breaths now.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;