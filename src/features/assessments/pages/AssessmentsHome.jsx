

import React from 'react';
import { AssessmentCard } from '../components/AssessmentCard';
import '../styles/assessments.css';

const assessments = [
  { 
    id: 'anxiety', 
    title: 'Anxiety Scale', 
    description: 'Breathe through the butterflies. We’re here with you.', 
    
    // 🌊 Calm ocean horizon – breathing & space
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',

    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Willow&backgroundColor=ffd5dc&top=bun&mouth=smile&eyes=happy',
    color: 'from-cyan-200 to-blue-300', 
    shadow: 'shadow-blue-200', 
    tag: 'Stay Calm 🌊' 
  },

  { 
    id: 'depression', 
    title: 'Depression Test', 
    description: 'Finding your sparkle again, one small step at a time.', 
    
    // 🌅 Sunrise through mountains – hope & light
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=80',

    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sadie&backgroundColor=ffdfbf&top=bob&mouth=smile&eyes=wink',
    color: 'from-indigo-200 to-purple-300', 
    shadow: 'shadow-purple-200', 
    tag: 'Find Light ☁️' 
  },

  { 
    id: 'bipolar', 
    title: 'Bipolar Disorder', 
    description: 'Embracing every color of your beautiful mind.', 
    
    // 🌈 Soft colorful sunset sky – emotional range but calm
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=80',

    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Stella&backgroundColor=fbd1a2&top=turban&mouth=smile&eyes=happy',
    color: 'from-pink-200 to-rose-300', 
    shadow: 'shadow-rose-200', 
    tag: 'Inner Balance 🌈' 
  },

  { 
    id: 'ocd', 
    title: 'OCD Patterns', 
    description: 'Letting go of the "musts" and finding quiet peace.', 
    
    // 🪴 Minimal, clean, organized aesthetic interior
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&auto=format&fit=crop&q=80',

    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sadie&backgroundColor=ffdfbf&top=bob&mouth=smile&eyes=wink',
    color: 'from-green-200 to-teal-300', 
    shadow: 'shadow-teal-200', 
    tag: 'Pure Peace 🧩' 
  },

  { 
    id: 'stress', 
    title: 'Stress Level', 
    description: 'Unpacking the heavy things to make room for joy.', 
    
    // 🌲 Quiet forest pathway – grounding & calm
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop&q=80',

    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zuri&backgroundColor=d1f4e0&top=fro&mouth=smile&eyes=happy',
    color: 'from-orange-200 to-yellow-300', 
    shadow: 'shadow-yellow-200', 
    tag: 'Soft Rest 🔥' 
  },
];

export default function AssessmentsHome() {
  return (
    <div className="min-h-screen bg-[#fdfcf0] pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Floating Affirmations */}
      <div className="absolute top-40 left-[5%] text-pink-300/30 font-bold italic animate-float-slow select-none text-xl">You are enough ✨</div>
      <div className="absolute top-60 right-[10%] text-blue-300/30 font-bold italic animate-float-delayed select-none text-xl">Take a deep breath 🌬️</div>
      <div className="absolute bottom-40 left-[15%] text-purple-300/30 font-bold italic animate-float-slow select-none text-xl">Small steps count 🐾</div>
      <div className="absolute bottom-20 right-[5%] text-yellow-300/40 font-bold italic animate-float-delayed select-none text-xl">Be kind to your mind 🧠💖</div>

      {/* Background Blobs */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest">Safe Space Enabled</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 mb-6 tracking-tighter">
            NEUROBLOOM<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              Assessments
            </span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-medium">
            Welcome home. Let's find some clarity together in this 
            <span className="text-purple-500 font-bold underline decoration-wavy decoration-purple-200"> safe little corner of the world.</span> 🌸
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-left">
          {assessments.map(item => <AssessmentCard key={item.id} {...item} />)}
        </div>

        <footer className="mt-28">
          <div className="inline-block px-10 py-6 rounded-[3rem] bg-white/80 backdrop-blur-md border-2 border-white shadow-xl">
            <p className="text-slate-600 font-bold flex items-center gap-4 text-lg text-center">
              <span className="text-3xl animate-bounce">🧸</span>
              "You’re doing a great job just by being here."
              <span className="text-3xl animate-pulse text-pink-400">♥</span>
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}