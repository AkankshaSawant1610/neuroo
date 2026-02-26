import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const BurnNote = () => {
  const [text, setText] = useState("");
  const [isSparkling, setIsSparkling] = useState(false);

  const handleLetGo = () => {
    if (!text) return;
    setIsSparkling(true);
    setTimeout(() => { setIsSparkling(false); setText(""); }, 3000);
  };

  return (
    <div className="h-80 w-full bg-rose-100 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden border-4 border-white">
      <AnimatePresence>
        {!isSparkling ? (
          <motion.div exit={{ scale: 0, rotate: 20, opacity: 0 }} transition={{ type: 'spring', damping: 10 }} className="w-full px-10">
            <div className="bg-white p-4 h-48 rounded-xl shadow-lg border-b-8 border-rose-200 -rotate-2 relative">
               <textarea 
                  value={text} onChange={e => setText(e.target.value)}
                  className="w-full h-full bg-transparent border-none outline-none font-handwritten text-rose-400 placeholder-rose-200 font-bold"
                  placeholder="Write a secret hurt..."
               />
            </div>
            <button onClick={handleLetGo} className="mt-4 w-full bg-rose-400 text-white py-2 rounded-full font-black text-xs uppercase shadow-lg shadow-rose-200">Release Magic</button>
          </motion.div>
        ) : (
          <div className="relative">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: -200, x: (Math.random() - 0.5) * 200 }}
                transition={{ duration: 2, delay: i * 0.1 }}
                className="absolute text-yellow-400"
              >
                <Sparkles fill="currentColor" size={24} />
              </motion.div>
            ))}
            <motion.p animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity }} className="text-rose-400 font-black italic">It's beautiful now...</motion.p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurnNote;