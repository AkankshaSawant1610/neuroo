import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCards from '../components/FeatureCards';
import QuickActions from '../components/QuickActions';
import { Bell, ChevronDown, User, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import '../styles/home.css';

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  
  // Mock User Data - In a real app, this would come from AuthContext
  const user = { 
    name: "Alex Johnson", 
    email: "alex@neurobloom.com", 
    gender: "Non-binary",
    memberStatus: "Free Member"
  };

  // Daily Zen Quote Component for extra attractiveness
  const DailyZen = () => (
    <div className="w-full p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-[2rem] border border-emerald-100/50 mb-10 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200">
          <Sparkles size={20} />
        </div>
        <p className="text-emerald-800 italic font-medium md:text-lg">
          "The soul usually knows what to do to heal itself. The challenge is to silence the mind."
        </p>
      </div>
      <div className="hidden lg:block">
        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] bg-white px-3 py-1 rounded-full border border-emerald-100">
          Daily Zen
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="p-8 max-w-7xl mx-auto pt-10">
        
        {/* 1. Personalized Header */}
        <header className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Welcome back, {user.name.split(' ')[0]}! 👋
            </h1>
            <p className="text-gray-500 mt-1 font-medium text-lg">
              Your mind is in its blooming season.
            </p>
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notification Bell */}
            <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-purple-600 hover:border-purple-100 transition-all shadow-sm">
              <Bell size={22} />
            </button>
            
            {/* Profile Trigger */}
            <div 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 bg-white p-2 pr-5 rounded-2xl border border-gray-100 cursor-pointer hover:shadow-md hover:border-purple-100 transition-all shadow-sm"
            >
              <div className="w-11 h-11 profile-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-inner">
                {user.name[0]}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-black text-gray-800 leading-none">{user.name}</p>
                <p className="text-[11px] text-gray-400 font-bold mt-1 uppercase tracking-wider">{user.memberStatus}</p>
              </div>
              <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${showProfile ? 'rotate-180' : ''}`} />
            </div>

            {/* Profile Popup (Dropdown) */}
            {showProfile && (
              <div className="absolute top-16 right-0 w-80 bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 p-7 z-50 animate-in fade-in zoom-in duration-200">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 profile-gradient rounded-[2rem] mb-4 flex items-center justify-center text-4xl text-white font-black shadow-xl shadow-purple-100">
                    {user.name[0]}
                  </div>
                  <h3 className="text-2xl font-black text-gray-800">{user.name}</h3>
                  <p className="text-gray-400 font-medium">{user.email}</p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                    <div className="p-2 bg-white rounded-lg text-purple-500 shadow-sm"><Mail size={18} /></div>
                    <span className="text-sm font-bold text-gray-600">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                    <div className="p-2 bg-white rounded-lg text-emerald-500 shadow-sm"><User size={18} /></div>
                    <span className="text-sm font-bold text-gray-600">{user.gender}</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-purple-600 transition-all shadow-lg shadow-gray-200 flex items-center justify-center gap-2 group">
                  <ShieldCheck size={20} className="group-hover:animate-pulse" />
                  Update Profile
                </button>
              </div>
            )}
          </div>
        </header>

        {/* 2. Daily Inspiration Section */}
        <DailyZen />

        {/* 3. Mood Logging Section (QuickActions) */}
        <div className="mb-16">
          <QuickActions />
        </div>

        {/* 4. Hero Section (Image + Main CTA) */}
        <div className="mb-20">
          <HeroSection />
        </div>

        {/* 5. Features Grid (Assessments, Games, Relaxation) */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-8 px-2">
             <h3 className="text-2xl font-black text-gray-800">Explore Your Sanctuary</h3>
             <div className="h-1 flex-1 bg-gray-100 mx-6 rounded-full opacity-50"></div>
          </div>
          <FeatureCards />
        </div>

      </div>
    </div>
  );
};

export default Home;