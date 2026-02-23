import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProgressBar } from '../components/ProgressBar';
import { anxietyQuestions } from '../data/anxietyQuestions'; 
// Note: In a full app, you'd dynamic import based on ID

export default function AssessmentTest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  const questions = anxietyQuestions; // Fallback for demo

  const handleChoice = (val) => {
    const newAnswers = [...answers, val];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      localStorage.setItem('neuro_result', JSON.stringify(newAnswers));
      navigate('/assessments/result');
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfcf0] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-[3.5rem] p-12 shadow-2xl border-4 border-white relative overflow-hidden">
        <ProgressBar current={step + 1} total={questions.length} color="from-blue-300 to-cyan-300" />
        <h2 className="text-3xl font-black text-slate-800 text-center mb-10 leading-tight">
          {questions[step].text}
        </h2>
        <div className="grid gap-4">
          {questions[step].options.map((opt, i) => (
            <button 
              key={i} 
              onClick={() => handleChoice(i)}
              className="py-5 px-8 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-blue-300 hover:bg-blue-50 text-slate-700 font-bold transition-all active:scale-95 text-left text-lg"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}