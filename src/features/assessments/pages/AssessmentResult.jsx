import React, { useEffect, useState } from 'react';
import { calculateScore } from '../utils/scoringUtils';
import { Link } from 'react-router-dom';

export default function AssessmentResult() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('neuro_result')) || [];
    setResult(calculateScore(data));
  }, []);

  if (!result) return null;

  return (
    <div className="min-h-screen bg-[#fdfcf0] flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center bg-white rounded-[4rem] p-12 shadow-2xl border-4 border-white">
        <div className={`w-32 h-32 ${result.bg} rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner`}>
          <span className="text-5xl">✨</span>
        </div>
        <h2 className={`text-4xl font-black mb-4 ${result.color}`}>{result.level}</h2>
        <p className="text-slate-500 text-xl mb-10 leading-relaxed">{result.message}</p>
        <div className="space-y-4">
          <Link to="/relaxation" className="block w-full py-5 rounded-[2rem] bg-blue-500 text-white font-black text-lg shadow-lg hover:bg-blue-600 transition-all">Try Relaxation Tools</Link>
          <Link to="/assessments" className="block w-full py-5 rounded-[2rem] bg-slate-100 text-slate-600 font-bold">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}