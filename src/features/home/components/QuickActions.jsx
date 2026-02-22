import React from 'react';
import '../styles/home.css';

const QuickActions = () => {
  const moods = [
    { emoji: "😔", label: "Low", color: "text-blue-400" },
    { emoji: "😐", label: "Okay", color: "text-gray-400" },
    { emoji: "😊", label: "Good", color: "text-yellow-400" },
    { emoji: "🤩", label: "Great", color: "text-emerald-400" },
    { emoji: "🔥", label: "Strong", color: "text-orange-400" }
  ];

  return (
    <section className="mood-card p-8 mb-12 shadow-sm text-center relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">How's your mind blooming today?</h3>
        <p className="text-gray-400 text-sm mb-8">Click an emoji to log your daily bloom</p>
        
        <div className="flex justify-center gap-6 md:gap-12">
          {moods.map((m) => (
            <button key={m.label} className="group flex flex-col items-center gap-3">
              <span className="text-4xl emoji-btn cursor-pointer">{m.emoji}</span>
              <span className={`text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity ${m.color}`}>
                {m.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
    </section>
  );
};

export default QuickActions;