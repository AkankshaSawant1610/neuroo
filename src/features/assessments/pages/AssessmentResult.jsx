import React, { useEffect, useState } from 'react';
import { calculateScore } from '../utils/scoringUtils'; // Import name fixed
import { Link, useNavigate } from 'react-router-dom';

export default function AssessmentResult() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get data from localStorage saved by AssessmentTest.jsx
    const testId = localStorage.getItem('neuro_last_test_id');
    const answers = JSON.parse(localStorage.getItem('neuro_last_scores'));

    if (!testId || !answers) {
      navigate('/assessments');
      return;
    }

    // Call function with two arguments
    setResult(calculateScore(testId, answers));
  }, [navigate]);

  if (!result) return null;

  return (
    <div className="min-h-screen bg-[#fdfcf0] flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center bg-white rounded-[4rem] p-12 shadow-2xl border-4 border-white">
        <div className={`w-32 h-32 ${result.bg} rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner`}>
          <span className="text-5xl">✨</span>
        </div>
        
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Result: {result.testId}</h3>
        <h2 className={`text-4xl font-black mb-4 ${result.color} leading-tight`}>{result.level}</h2>
        <p className="text-slate-500 font-bold mb-8 italic">{result.message}</p>
        <p className="text-slate-700 font-black text-6xl mb-10">{result.score}</p>
        
        <div className="space-y-4">
          <Link to="/relaxation" className="block w-full py-5 rounded-[2rem] bg-slate-900 text-white font-black text-lg shadow-lg hover:bg-black transition-all">Try Relaxation Tools</Link>
          <Link to="/assessments" className="block w-full py-5 rounded-[2rem] bg-slate-100 text-slate-600 font-bold">Done</Link>
        </div>
      </div>
    </div>
  );
}