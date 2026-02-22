import React from 'react';
import { Star, Heart, Cloud, Sparkles, Wand2, Coffee, Ghost } from 'lucide-react';
import '../styles/home.css';

const AboutUs = () => {
  const values = [
    {
      icon: <Heart size={30} className="text-pink-500" />,
      title: "Soft on the Mind",
      desc: "Wellness shouldn't feel like work. We design everything to be as gentle as a cloud.",
      color: "border-pink-200"
    },
    {
      icon: <Star size={30} className="text-blue-500" />,
      title: "Bright Future",
      desc: "Our goal is to help you see the sparkle in your own progress, every single day.",
      color: "border-blue-200"
    },
    {
      icon: <Wand2 size={30} className="text-purple-500" />,
      title: "Magic Tech",
      desc: "We use science-backed algorithms to turn complex data into simple, healing insights.",
      color: "border-purple-200"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* 1. Moving Dots Background Animation */}
      <div className="dots-container">
        <div className="dot dot-pink"></div>
        <div className="dot dot-blue"></div>
        <div className="dot dot-purple"></div>
        <div className="dot dot-yellow"></div>
        <div className="dot dot-pink" style={{bottom: '5%', right: '40%', width: '100px'}}></div>
      </div>

      <div className="p-8 max-w-7xl mx-auto pt-16 relative z-10">
        
        {/* Hero Section */}
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm mb-6 animate-bounce">
            <Sparkles size={18} className="text-pink-400" />
            <span className="text-xs font-black text-pink-500 uppercase tracking-widest">A Little Bit About Us</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 mb-8 tracking-tighter">
            We’re here to <br />
            <span className="gradient-text-pink">Make You Smile.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-semibold">
            NeuroBloom is more than an app—it's a candy shop for your soul. 
            We replace anxiety with curiosity and stress with playfulness.
          </p>
        </section>

        {/* The Grid Section (Griding) */}
        <section className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((v, i) => (
            <div key={i} className={`about-grid-card p-10 rounded-[3.5rem] border-b-8 ${v.color} text-center`}>
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mb-8 mx-auto shadow-sm">
                {v.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </section>

        {/* Second Visual Grid (Cheerful Content) */}
        <section className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
          <div className="space-y-8 text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight">
              A Safe Space <br /> Wrapped in <span className="text-pink-400 italic underline">Softness.</span>
            </h2>
            <div className="flex gap-4">
               <div className="p-4 bg-white rounded-3xl shadow-sm border border-slate-100 flex-1">
                  <Coffee className="text-brown-400 mb-2" />
                  <p className="text-sm font-bold">Daily Rituals</p>
                  <p className="text-xs text-slate-400">Log moods with a cup of peace.</p>
               </div>
               <div className="p-4 bg-white rounded-3xl shadow-sm border border-slate-100 flex-1">
                  <Ghost className="text-blue-400 mb-2" />
                  <p className="text-sm font-bold">No Pressure</p>
                  <p className="text-xs text-slate-400">Go at your own pace, ghost the stress.</p>
               </div>
            </div>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              We focus on the human side of mental health. No clinical jargon, 
              no scary medical terms. Just you, your thoughts, and our 
              colorful tools to help you bloom.
            </p>
          </div>

          <div className="relative">
             {/* Decorative Image/Box */}
             <div className="bg-gradient-to-tr from-pink-200 to-blue-200 h-[450px] rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                   <Cloud size={150} className="text-white opacity-50 group-hover:scale-125 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/40 backdrop-blur-lg rounded-3xl border border-white/50">
                   <p className="text-white font-black text-xl italic">"Mental health is a journey, but it doesn't have to be a lonely one."</p>
                </div>
             </div>
          </div>
        </section>

        {/* Final High-Energy CTA */}
        <section className="bg-white rounded-[5rem] p-16 md:p-24 text-center border-4 border-dashed border-pink-100 relative overflow-hidden mb-12 shadow-sm">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
              Ready to feel <br /> 
              <span className="text-pink-500">Light as a Feather?</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-lg mx-auto font-medium">
              Join 10k+ people who are cultivating their mental garden with us every single morning.
            </p>
            <button className="bg-pink-500 text-white px-12 py-5 rounded-[2rem] font-black text-xl shadow-xl shadow-pink-200 hover:bg-pink-600 hover:scale-110 active:scale-95 transition-all">
              Start My Bloom 🌸
            </button>
          </div>
        </section>

        <footer className="text-pink-300 font-black text-[10px] uppercase tracking-[0.4em] pb-10">
          NeuroBloom • Designed with Love • 2024
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;