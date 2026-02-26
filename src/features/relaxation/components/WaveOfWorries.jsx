import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WaveOfWorries = () => {
  const [worries, setWorries] = useState([]);
  const [input, setInput] = useState("");
  const [ripples, setRipples] = useState([]);

  const addWorry = () => {
    if (!input.trim()) return;
    setWorries([...worries, { id: Date.now(), text: input, color: ['#94a3b8', '#64748b', '#cbd5e1'][Math.floor(Math.random()*3)] }]);
    setInput("");
  };

  const handleSplash = (id) => {
    setWorries(prev => prev.filter(w => w.id !== id));
    const newRipple = { id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 2000);
  };

  return (
    <div className="h-80 w-full bg-cyan-100 rounded-[2.5rem] p-6 relative overflow-hidden flex flex-col border-4 border-white shadow-xl">
      <div className="flex gap-2 z-10 mb-4">
        <input 
          value={input} onChange={e => setInput(e.target.value)}
          className="bg-white/80 flex-1 rounded-2xl px-4 text-xs font-bold text-cyan-700 outline-none border-2 border-cyan-200" 
          placeholder="What's bothering you?" 
        />
        <button onClick={addWorry} className="bg-cyan-400 text-white p-2 rounded-2xl font-black text-[10px]">DROP</button>
      </div>

      <div className="flex-1 flex flex-wrap gap-3 overflow-y-auto custom-scrollbar">
        <AnimatePresence>
          {worries.map(w => (
            <motion.div
              key={w.id}
              drag dragSnapToOrigin
              onDragEnd={(_, info) => { if (info.point.y > 450) handleSplash(w.id); }}
              whileTap={{ scale: 1.2 }}
              className="w-12 h-10 rounded-[40%] cursor-grab active:cursor-grabbing flex items-center justify-center text-[8px] font-black text-white p-1 shadow-md"
              style={{ backgroundColor: w.color }}
            >
              {w.text.substring(0, 8)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="h-20 bg-blue-300/50 backdrop-blur-sm mt-4 rounded-t-[3rem] flex items-center justify-center border-t-4 border-white">
        <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest animate-pulse">Pool of Peace</span>
        {ripples.map(r => (
          <div key={r.id} className="absolute w-10 h-10 rounded-full border-4 border-white animate-ripple-light" />
        ))}
      </div>
    </div>
  );
};

export default WaveOfWorries;