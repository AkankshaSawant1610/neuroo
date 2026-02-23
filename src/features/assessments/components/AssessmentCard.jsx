import React from 'react';
import { Link } from 'react-router-dom';

export const AssessmentCard = ({ title, description, id, image, avatar, color, shadow, tag }) => (
  <div className={`group relative overflow-hidden rounded-[3.5rem] bg-white border-4 border-white transition-all duration-500 hover:-translate-y-4 shadow-2xl ${shadow}/30 flex flex-col`}>
    
    {/* Image Header */}
    <div className="relative h-56 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
      
      {/* 🏷️ Cute Floating Tag */}
      <div className={`absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-slate-700 shadow-sm border border-white`}>
        {tag}
      </div>
    </div>

    {/* Content Area */}
    <div className="p-8 pt-16 relative bg-white">
      {/* 🧑‍🎨 THE GIRL AVATAR BOX (Fixed Z-index and Positioning) */}
      <div className={`absolute -top-14 right-8 w-28 h-28 rounded-full bg-gradient-to-br ${color} shadow-2xl border-[6px] border-white overflow-hidden ring-4 ring-white/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 z-20`}>
        <img 
          src={avatar} 
          alt="Friendly avatar" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Text Info (Pushed down with pt-16 above to avoid overlap) */}
      <h3 className="text-3xl font-black text-slate-800 mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-10 h-10 overflow-hidden font-medium">
        {description}
      </p>
      
      <Link 
        to={`/assessments/intro/${id}`}
        className={`flex items-center justify-between w-full p-2 pl-8 pr-3 rounded-[3rem] bg-slate-50 border-2 border-slate-100 group-hover:border-transparent group-hover:bg-gradient-to-r ${color} transition-all duration-500 shadow-sm group-hover:shadow-lg`}
      >
        <span className="text-slate-700 group-hover:text-slate-900 font-black text-xs uppercase tracking-[0.25em] transition-colors">Check In With Yourself </span>
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-90 transition-transform">
          <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </Link>
    </div>
  </div>
);