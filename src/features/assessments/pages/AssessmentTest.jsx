

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { anxietyQuestions } from '../data/anxietyQuestions';
import { depressionQuestions } from '../data/depressionQuestions';
import { stressQuestions } from '../data/stressQuestions';
import { ocdQuestions } from '../data/ocdQuestions';
import { bipolarQuestions } from '../data/bipolarQuestions';

const TEST_CONFIG = {
  anxiety: { 
    title: "Generalized Anxiety Disorder", code: "GAD-7", questions: anxietyQuestions, 
    accent: "bg-blue-600", textAccent: "text-blue-600", light: "bg-blue-50/50", border: "border-blue-100"
  },
  depression: { 
    title: "Patient Health Questionnaire", code: "PHQ-9", questions: depressionQuestions, 
    accent: "bg-indigo-600", textAccent: "text-indigo-600", light: "bg-indigo-50/50", border: "border-indigo-100"
  },
  bipolar: { 
    title: "Mood Disorder Questionnaire", code: "MDQ", questions: bipolarQuestions, 
    accent: "bg-rose-600", textAccent: "text-rose-600", light: "bg-rose-50/50", border: "border-rose-100"
  },
  ocd: { 
    title: "Obsessive-Compulsive Inventory", code: "OCI-R", questions: ocdQuestions, 
    accent: "bg-teal-600", textAccent: "text-teal-600", light: "bg-teal-50/50", border: "border-teal-100"
  },
  stress: { 
    title: "Perceived Stress Scale", code: "PSS-10", questions: stressQuestions, 
    accent: "bg-orange-600", textAccent: "text-orange-600", light: "bg-orange-50/50", border: "border-orange-100"
  }
};

export default function AssessmentTest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const config = TEST_CONFIG[id?.toLowerCase()];
  
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(false);

  if (!config) return null;

  const handleSelect = (qIdx, oIdx) => {
    setAnswers({ ...answers, [qIdx]: oIdx });
    setError(false);
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < config.questions.length) {
      setError(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const answerArray = config.questions.map((_, i) => answers[i]);
    localStorage.setItem('neuro_last_test_id', id);
    localStorage.setItem('neuro_last_scores', JSON.stringify(answerArray));
    navigate('/assessments/result');
  };

  const optionLabels = config.questions[0].options;
  const colCount = optionLabels.length;

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-16 pb-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP NAVIGATION */}
        <div className="flex justify-between items-center mb-10 px-2">
          <Link to={`/assessments/intro/${id}`} className="group inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:rotate-[-45deg] transition-transform">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" /></svg>
            </div>
            <span className="font-black text-slate-700 text-[9px] uppercase tracking-widest">Back to Assessments</span>
          </Link>

          <div className="bg-white px-4 py-1.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Secure Session</p>
          </div>
        </div>

        {/* 🖤 BLACK QUOTE BLOCK */}
        <div className="bg-slate-950 rounded-[3rem] p-10 md:p-14 mb-16 relative overflow-hidden shadow-2xl">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-none mb-3 uppercase">
                   Feel free to share.<br/> 
                   <span className="text-slate-500 italic font-serif lowercase text-xl md:text-2xl tracking-tight">This is your safe haven for growth.</span>
                </h2>
                <div className="flex gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-[8px] font-black uppercase tracking-widest">Scientific Protocol</span>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[8px] font-black uppercase tracking-widest">End-to-End Private</span>
                </div>
              </div>
              <div className="hidden md:block">
                 <div className="w-20 h-20 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-4xl animate-float">🧸</div>
              </div>
           </div>
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        {/* TEST HEADER */}
        <div className="mb-12 text-center md:text-left px-6">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase mb-2">
            {config.title}
          </h1>
          <p className={`${config.textAccent} font-bold italic text-xl md:text-2xl opacity-60 tracking-tight`}>
            ({config.code} Assessment Suite)
          </p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="sticky top-4 z-50 mb-8 p-4 bg-rose-500 text-white rounded-2xl font-black text-center shadow-lg animate-bounce text-[10px] uppercase tracking-widest">
             ⚠️ Action Required: Every row must be evaluated to proceed.
          </div>
        )}

        {/* 📋 THE ALIGNED TABULAR GRID */}
        <div className="bg-white rounded-[3.5rem] shadow-2xl border-2 border-white overflow-hidden">
          
          {/* HEADER ROW - PERFECTLY CENTERED ALIGNMENT */}
          <div className={`hidden md:grid grid-cols-12 ${config.accent} p-10 items-center rounded-t-[3.5rem]`}>
            <div className="col-span-5 text-[11px] font-black text-white uppercase tracking-[0.3em] pl-6 border-r border-white/20">
              Symptom Criteria
            </div>
            {/* Using inline-grid to ensure labels stay horizontal and centered */}
            <div className="col-span-7 grid h-full items-center" style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
              {optionLabels.map((label, i) => (
                <div key={i} className="text-center text-[9px] font-black text-white uppercase leading-tight px-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* TABLE BODY */}
          <div className="divide-y divide-slate-100">
            {config.questions.map((q, qIdx) => (
              <div 
                key={qIdx} 
                className={`grid grid-cols-1 md:grid-cols-12 p-8 md:p-12 items-center transition-all duration-300
                ${answers[qIdx] !== undefined ? `${config.light}` : 'hover:bg-slate-50/50'}`}
              >
                
                {/* Question Cell */}
                <div className="col-span-1 md:col-span-5 mb-8 md:mb-0 md:pr-12">
                  <div className="flex items-start gap-6">
                    <span className={`text-xs font-black transition-colors ${answers[qIdx] !== undefined ? config.textAccent : 'text-slate-300'} mt-1`}>
                      {String(qIdx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-slate-800 leading-snug tracking-tight">
                      {q.text}
                    </h3>
                  </div>
                </div>

                {/* Option Buttons Area - MATCHES HEADER EXACTLY */}
                <div className="col-span-1 md:col-span-7 grid" style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)`, gap: '1rem' }}>
                  {q.options.map((opt, oIdx) => (
                    <div key={oIdx} className="flex flex-col items-center justify-center">
                       <button
                         onClick={() => handleSelect(qIdx, oIdx)}
                         className={`group relative w-full aspect-square md:w-16 md:h-16 rounded-[1.5rem] flex flex-col items-center justify-center transition-all duration-200 border-2
                           ${answers[qIdx] === oIdx 
                             ? 'bg-slate-900 border-slate-900 text-white shadow-xl -translate-y-1' 
                             : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200 hover:bg-white shadow-sm'}`}
                       >
                         <span className="text-xl md:text-2xl font-black">{oIdx === 0 ? '0' : `+${oIdx}`}</span>
                         
                         {/* Mobile Label Only (Hidden on Desktop) */}
                         <span className="md:hidden text-[7px] font-black uppercase tracking-widest text-center mt-1 opacity-60">
                           {opt}
                         </span>

                         {answers[qIdx] === oIdx && (
                            <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${config.accent} animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
                         )}
                       </button>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* SUBMIT FOOTER */}
        <div className="mt-20 flex flex-col items-center">
          <div className="mb-10 text-center">
             <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.8em] block mb-4">Protocol Validation</span>
             <div className="flex gap-1.5 justify-center">
                {config.questions.map((_, i) => (
                  <div key={i} className={`h-1 w-6 rounded-full transition-all duration-500 ${answers[i] !== undefined ? config.accent : 'bg-slate-200'}`} />
                ))}
             </div>
          </div>

          <button 
            onClick={handleSubmit}
            className={`w-full max-w-xl py-10 rounded-[3.5rem] font-black text-3xl uppercase tracking-tighter shadow-2xl transition-all relative overflow-hidden group
              ${Object.keys(answers).length === config.questions.length 
                ? `${config.accent} text-white hover:brightness-110 hover:-translate-y-2` 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
          >
            <span className="relative z-10 uppercase">Finalize Assessment</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          
          <p className="mt-10 text-slate-400 font-bold italic text-base">
             "Courage is found in looking clearly at our own patterns."
          </p>
        </div>

      </div>
    </div>
  );
}