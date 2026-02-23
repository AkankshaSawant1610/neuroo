import React, { useState } from 'react';
import { 
  Compass, Search, Sparkles, Sun, Moon, 
  Coffee, Wind, Heart, Zap, BookOpen, 
  MessageSquare, Flower2, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'; // Reusing your home styles for consistency

const ExploreMore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const collections = [
    {
      title: "The Panic Room",
      subtitle: "Instant calm for high-stress moments",
      icon: <Wind className="text-blue-500" />,
      color: "from-blue-50 to-cyan-50",
      count: "12 Tools",
      tag: "SOS"
    },
    {
      title: "Morning Spark",
      subtitle: "Set the tone with gentle energy",
      icon: <Sun className="text-orange-500" />,
      color: "from-orange-50 to-yellow-50",
      count: "8 Rituals",
      tag: "Energy"
    },
    {
      title: "Deep Sleep Sanctuary",
      subtitle: "Drift away into cloud-like rest",
      icon: <Moon className="text-purple-500" />,
      color: "from-purple-50 to-indigo-50",
      count: "15 Sounds",
      tag: "Rest"
    },
    {
      title: "The Focus Lab",
      subtitle: "Sharpen your mind for deep work",
      icon: <Zap className="text-yellow-500" />,
      color: "from-yellow-50 to-amber-50",
      count: "5 Games",
      tag: "Focus"
    }
  ];

  const communityVibes = [
    { user: "Sarah", message: "Today I chose myself. 🌸", color: "bg-pink-100" },
    { user: "Alex", message: "Breathing through the storm.", color: "bg-blue-100" },
    { user: "Maya", message: "Finally finished my focus game!", color: "bg-purple-100" },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto p-8 pt-16 relative z-10">
        
        {/* --- Header Section --- */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-pink-500 rounded-lg text-white">
                  <Compass size={24} />
                </div>
                <span className="font-black text-pink-500 uppercase tracking-widest text-sm">Discovery Hub</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tighter">
                Explore the <span className="gradient-text-pink">Bloom.</span>
              </h1>
            </div>

            {/* Playful Search Bar */}
            <div className="relative group w-full md:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Find your calm..."
                className="w-full pl-14 pr-6 py-5 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm focus:outline-none focus:border-pink-200 focus:shadow-xl focus:shadow-pink-100 transition-all font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* --- Daily Bloom Section (Featured) --- */}
        <section className="mb-16">
          <div className="bg-slate-900 rounded-[4rem] p-8 md:p-12 text-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-pink-500/20 to-transparent pointer-events-none" />
            <Sparkles className="absolute right-10 top-10 text-pink-400 animate-pulse" size={60} />
            
            <div className="relative z-10 max-w-xl">
              <span className="bg-pink-500 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 inline-block">
                Daily Ritual
              </span>
              <h2 className="text-4xl font-black mb-4">"I am resilient, I am growing, I am enough."</h2>
              <p className="text-slate-400 text-lg mb-8 font-medium">
                Spend 2 minutes in the Breathing Room today to center your thoughts.
              </p>
              <button 
                onClick={() => navigate('/relaxation')}
                className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105"
              >
                Go to Meditation <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* --- Grid Layout: Collections & Vibes --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left 2 Columns: Collections */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-slate-800">Curated Collections</h3>
              <button className="text-pink-500 font-bold hover:underline">View All</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {collections.map((item, i) => (
                <div key={i} className={`p-8 rounded-[3rem] bg-gradient-to-br ${item.color} border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/50 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-500 font-medium text-sm mb-6">{item.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">{item.count}</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Community & Quick Bites */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-800">The Bloom Wall</h3>
            <div className="bg-white rounded-[3.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
              {communityVibes.map((vibe, i) => (
                <div key={i} className={`${vibe.color} p-6 rounded-3xl border-b-4 border-black/5`}>
                  <p className="font-bold text-slate-800 italic">"{vibe.message}"</p>
                  <p className="text-xs font-black text-slate-500 mt-2 uppercase">— {vibe.user}</p>
                </div>
              ))}
              <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:border-pink-300 hover:text-pink-500 transition-colors">
                + Plant a Thought
              </button>
            </div>

            {/* Brain Bite Card */}
            <div className="bg-pink-500 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-xl shadow-pink-100">
               <Flower2 className="absolute -right-4 -bottom-4 text-pink-400 opacity-30 rotate-12" size={120} />
               <h4 className="font-black text-lg mb-2 flex items-center gap-2">
                 <BookOpen size={20} /> Brain Bite
               </h4>
               <p className="text-sm font-medium leading-relaxed opacity-90">
                 Did you know? Playing memory games for just 15 minutes can improve your neural plasticity.
               </p>
            </div>
          </div>
        </div>

        {/* --- Footer Links --- */}
        <section className="bg-white rounded-[4rem] p-12 border border-slate-100 mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
               <h5 className="font-black text-slate-800">Learn</h5>
               <ul className="text-slate-500 text-sm font-bold space-y-2">
                 <li className="hover:text-pink-500 cursor-pointer">Understanding ADHD</li>
                 <li className="hover:text-pink-500 cursor-pointer">The Science of Sleep</li>
                 <li className="hover:text-pink-500 cursor-pointer">Mood Tracking 101</li>
               </ul>
            </div>
            <div className="space-y-4">
               <h5 className="font-black text-slate-800">Support</h5>
               <ul className="text-slate-500 text-sm font-bold space-y-2">
                 <li className="hover:text-pink-500 cursor-pointer">Crisis Hotlines</li>
                 <li className="hover:text-pink-500 cursor-pointer">Find a Therapist</li>
                 <li className="hover:text-pink-500 cursor-pointer">Community Rules</li>
               </ul>
            </div>
            <div className="md:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 flex flex-col items-center text-center">
               <Heart className="text-pink-400 mb-4" fill="currentColor" />
               <h5 className="font-black text-slate-800 mb-2">Spread the Bloom</h5>
               <p className="text-slate-500 text-xs font-medium mb-4">Share NeuroBloom with someone who needs a smile today.</p>
               <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black hover:bg-pink-600 transition-colors">
                 INVITE A FRIEND
               </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ExploreMore;