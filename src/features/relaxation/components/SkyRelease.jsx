import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bird, Cloud } from 'lucide-react';

const SkyRelease = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle"); // idle, puffing, flying

  const handleRelease = () => {
    if (!text.trim()) return;
    setStatus("puffing");
    setTimeout(() => setStatus("flying"), 1000);
    setTimeout(() => { setStatus("idle"); setText(""); }, 5000);
  };

  return (
    <div className="h-80 w-full bg-gradient-to-b from-[#a2d2ff] to-[#f0f8ff] rounded-[2.5rem] p-6 relative overflow-hidden flex flex-col items-center justify-center border-4 border-white cartoon-shadow">
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div key="input" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 1.2, opacity: 0 }} className="z-10 w-full flex flex-col items-center">
             <div className="relative mb-4 group">
                <Cloud size={140} className="text-white fill-white animate-float" />
                <textarea 
                  value={text} onChange={(e) => setText(e.target.value)}
                  placeholder="Type a heavy thought..."
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 bg-transparent border-none text-center text-[10px] text-blue-400 font-black outline-none resize-none placeholder-blue-200"
                />
             </div>
             <button onClick={handleRelease} className="bg-white text-blue-400 px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-blue-50 transition-all active:scale-95">Release</button>
          </motion.div>
        )}

        {status === "puffing" && (
          <div key="puff" className="animate-puff">
             <Cloud size={200} className="text-white fill-white" />
          </div>
        )}

        {status === "flying" && (
          <div key="birds" className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "50%", y: "50%", opacity: 0 }}
                animate={{ x: i % 2 === 0 ? 600 : -600, y: -400, opacity: 1 }}
                transition={{ duration: 4, delay: i * 0.2, ease: "easeOut" }}
                className="absolute text-white"
              >
                <Bird size={32} fill="currentColor" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default SkyRelease;