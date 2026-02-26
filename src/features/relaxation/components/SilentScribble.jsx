import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Eraser } from 'lucide-react';

const SilentScribble = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineWidth = 20;
  }, []);

  const draw = (e) => {
    if (!isDrawing || isFinished) return;
    const ctx = canvasRef.current.getContext('2d');
    const rect = canvasRef.current.getBoundingClientRect();
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];
    ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const handleFinish = () => {
    setIsDrawing(false);
    setTimeout(() => setIsFinished(true), 1000);
  };

  const clear = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsFinished(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4 flex items-center justify-between">
        <span className="instruction-tag">Instruction: Scribble your stress, then let it fade</span>
        <button onClick={clear} className="p-2 bg-slate-100 rounded-lg text-slate-400 hover:text-indigo-500 transition-colors">
          <RefreshCcw size={14} />
        </button>
      </div>

      <div className="relative flex-1 bg-white rounded-[3rem] overflow-hidden border-4 border-slate-50 shadow-sm group">
        <canvas
          ref={canvasRef}
          onMouseDown={(e) => { setIsDrawing(true); const ctx = canvasRef.current.getContext('2d'); ctx.beginPath(); }}
          onMouseMove={draw}
          onMouseUp={handleFinish}
          className={`w-full h-full cursor-crosshair transition-all duration-[4000ms] ${isFinished ? 'blur-[80px] opacity-40 scale-125' : ''}`}
        />
        
        {!isFinished && !isDrawing && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
             <Eraser size={60} className="text-slate-300" />
          </div>
        )}

        {isFinished && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-10"
          >
            <h4 className="text-indigo-400 font-black italic text-xl">The chaos is gone.</h4>
            <p className="text-slate-400 text-[10px] font-bold uppercase mt-2">Take a deep breath and start fresh.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SilentScribble;