import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCards from '../components/FeatureCards';
import QuickActions from '../components/QuickActions';
import { ChevronDown, User, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import '../styles/home.css';

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const user = { 
    name: "Alex Johnson", 
    email: "alex@neurobloom.com", 
    gender: "Non-binary" 
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Animation Blobs */}
      <div className="home-bg-wrapper">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="p-8 max-w-7xl mx-auto pt-6">
        
        {/* Header - Bell Removed */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              Welcome back, {user.name.split(' ')[0]}! 👋
            </h1>
            <p className="text-slate-500 font-medium">Your mind is in its blooming season.</p>
          </div>

          <div className="relative">
            <div 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 bg-white/70 backdrop-blur-md p-1.5 pr-4 rounded-2xl border border-white shadow-sm cursor-pointer hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-emerald-400 rounded-xl flex items-center justify-center text-white font-bold shadow-sm">
                {user.name[0]}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-slate-700 leading-none">{user.name}</p>
                <p className="text-[10px] text-purple-500 font-bold mt-1 uppercase tracking-wider">Free Member</p>
              </div>
              <ChevronDown size={16} className={`text-slate-400 transition-transform ${showProfile ? 'rotate-180' : ''}`} />
            </div>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute top-16 right-0 w-72 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white p-6 z-50 animate-in fade-in zoom-in duration-200">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-emerald-400 rounded-3xl mb-3 flex items-center justify-center text-3xl text-white font-bold shadow-lg">
                    {user.name[0]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{user.name}</h3>
                  <p className="text-slate-400 text-sm">{user.email}</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white">
                    <Mail size={16} className="text-purple-500" />
                    <span className="text-xs font-bold text-slate-600 truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white">
                    <User size={16} className="text-emerald-500" />
                    <span className="text-xs font-bold text-slate-600">{user.gender}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-purple-600 transition-all shadow-lg">
                  Update Profile
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Re-designed Small Attractive Daily Zen */}
        <div className="flex justify-center mb-12">
          <div className="zen-chip px-6 py-3 rounded-full flex items-center gap-3 max-w-2xl">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <Sparkles size={16} />
            </div>
            <p className="text-sm md:text-base text-slate-700 italic font-medium leading-tight">
              "The soul usually knows what to do to heal itself. The challenge is to silence the mind."
            </p>
            <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest pl-4 border-l border-slate-200 ml-auto hidden sm:block">
              Zen
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          <QuickActions />
          <HeroSection />
          
          <div className="pb-10">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black text-slate-800">Explore Your Sanctuary</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-100 to-transparent"></div>
            </div>
            <FeatureCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;