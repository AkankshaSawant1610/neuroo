import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Sprout } from 'lucide-react';

const PeaceGarden = () => {
  const [plants, setPlants] = useState(() => JSON.parse(localStorage.getItem('zen_garden_v2')) || []);
  const [input, setInput] = useState("");

  useEffect(() => { localStorage.setItem('zen_garden_v2', JSON.stringify(plants)); }, [plants]);

  const plantSeed = () => {
    if (!input.trim()) return;
    const colors = ['#ffc300', '#ff8fa3', '#72efdd', '#9d4edd', '#4ade80'];
    const newPlant = {
      id: Date.now(),
      msg: input,
      color: colors[Math.floor(Math.random() * colors.length)],
      x: Math.random() * 80 + 10,
      size: Math.random() * 15 + 35
    };
    setPlants([...plants, newPlant]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4 flex items-center justify-between">
        <span className="instruction-tag">Instruction: Type a wish & plant it</span>
        <button onClick={() => setPlants([])} className="text-[9px] font-black text-slate-300 uppercase hover:text-red-400">Reset Garden</button>
      </div>

      <div className="relative flex-1 bg-[#e0f9ed] rounded-[3rem] overflow-hidden border-4 border-white shadow-sm flex flex-col">
        {/* Sky Area */}
        <div className="flex-1 relative">
          <AnimatePresence>
            {plants.map((p) => (
              <div 
                key={p.id} 
                className="absolute bottom-4 plant-wrapper" 
                style={{ left: `${p.x}%` }}
              >
                <div className="pill-tooltip">{p.msg}</div>
                <motion.div 
                  initial={{ scale: 0, y: 20 }} 
                  animate={{ scale: 1, y: 0 }} 
                  transition={{ type: 'spring', bounce: 0.5 }}
                  className="animate-float cursor-help"
                >
                   <Flower2 size={p.size} style={{ color: p.color }} fill="currentColor" />
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dashed Ground from your image */}
        <div className="h-10 w-full garden-ground opacity-30"></div>
      </div>

      <div className="mt-6 flex gap-3">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What are you grateful for today?"
          className="flex-1 bg-white border-2 border-slate-100 rounded-2xl px-5 py-3 text-sm font-medium outline-none focus:border-green-200 transition-all"
        />
        <button 
          onClick={plantSeed}
          className="bg-[#4ade80] text-white px-8 rounded-2xl font-black text-xs shadow-lg shadow-green-100 hover:scale-105 active:scale-95 transition-all"
        >
          PLANT SEED
        </button>
      </div>
    </div>
  );
};

export default PeaceGarden;