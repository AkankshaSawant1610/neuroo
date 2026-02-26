import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle } from 'lucide-react';

const MirrorOfKindness = () => {
  const [input, setInput] = useState("");
  const [reflection, setReflection] = useState("");

  const transformCritique = () => {
    const responses = [
      "You're learning and growing. Progress takes time.",
      "It's okay to be human. You are doing your best.",
      "One bad day doesn't define your amazing journey.",
      "Be as kind to yourself as you are to your friends.",
      "You are worthy of love, especially from yourself."
    ];
    
    // Simple logic mapping
    const text = input.toLowerCase();
    let reply = responses[Math.floor(Math.random() * responses.length)];
    
    if (text.includes("fail")) reply = "Failure is just a stepping stone to success.";
    if (text.includes("ugly") || text.includes("fat")) reply = "Your soul is beautiful and that is what shines.";
    if (text.includes("hate")) reply = "You deserve the same compassion you give others.";

    setReflection(reply);
  };

  return (
    <div className="h-80 w-full bg-[#f3e8ff] rounded-[3rem] p-6 border-4 border-white flex flex-col items-center cartoon-shadow relative overflow-hidden">
      <div className="w-24 h-24 rounded-full bg-white/50 border-4 border-purple-200 flex items-center justify-center mb-4">
        <Sparkle className="text-purple-400 animate-pulse" size={40} />
      </div>
      
      <AnimatePresence mode="wait">
        {!reflection ? (
          <motion.div key="input" exit={{ opacity: 0, scale: 0.8 }} className="w-full space-y-3">
            <input 
              value={input} onChange={e => setInput(e.target.value)}
              className="w-full bg-white rounded-2xl px-4 py-2 text-xs font-bold text-purple-600 outline-none border-2 border-purple-100"
              placeholder="What is your inner critic saying?"
            />
            <button onClick={transformCritique} className="w-full bg-purple-400 text-white py-2 rounded-2xl font-black text-xs">LOOK IN THE MIRROR</button>
          </motion.div>
        ) : (
          <motion.div 
            key="output" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center p-4 bg-white rounded-2xl border-4 border-purple-100 shadow-xl"
          >
            <p className="text-purple-600 font-black italic text-sm">"{reflection}"</p>
            <button onClick={() => {setReflection(""); setInput("");}} className="mt-4 text-[8px] font-black text-purple-300 uppercase underline">Try Another</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MirrorOfKindness;