import React from 'react';
import { motion } from 'framer-motion';
import PeaceGarden from '../components/PeaceGarden';
import SilentScribble from '../components/SilentScribble';
import SkyRelease from '../components/SkyRelease';
import BurnNote from '../components/BurnNote';
import MirrorOfKindness from '../components/MirrorOfKindness';
import '../styles/relaxation.css';

const RelaxationHome = () => {
  return (
    <div className="min-h-screen bg-[#fcfdf2] p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-black text-[#ffb703] tracking-tighter"
          >
            ZEN ZONE
          </motion.h1>
          <p className="text-[#ffb703] font-black uppercase tracking-[0.4em] text-[10px] mt-4 opacity-60">Your private space to let go</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10">
            <div className="custom-card p-10 h-[500px]">
              <h3 className="text-sm font-black text-green-500 uppercase mb-6 tracking-widest">Kind Garden</h3>
              <PeaceGarden />
            </div>

            <div className="custom-card p-10 h-[500px]">
              <h3 className="text-sm font-black text-indigo-400 uppercase mb-6 tracking-widest">Rainbow Mess Therapy</h3>
              <SilentScribble />
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-10">
            <div className="custom-card p-8">
               <h3 className="text-[10px] font-black text-blue-400 uppercase mb-4">Cloud Birds</h3>
               <SkyRelease />
            </div>
            
            <div className="custom-card p-8">
               <h3 className="text-[10px] font-black text-purple-400 uppercase mb-4">Kind Mirror</h3>
               <MirrorOfKindness />
            </div>

            <div className="custom-card p-8">
               <h3 className="text-[10px] font-black text-rose-400 uppercase mb-4">Magic Dust</h3>
               <BurnNote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaxationHome;