import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { assessmentDetails } from "../assessmentService"; // CORRECT

const AssessmentIntro = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = assessmentDetails[id];

  if (!data) return <div className="pt-32 text-center">Assessment not found</div>;

  return (
    <div className="min-h-screen bg-[#fdfcf0] pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white flex flex-col md:flex-row">
        
        {/* Left Side: Visual */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-20`} />
          <Link to="/assessments" className="absolute top-6 left-6 bg-white/90 p-3 rounded-full shadow-md hover:scale-110 transition-transform">
             <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          </Link>
        </div>

        {/* Right Side: Info */}
        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2">{data.subtitle}</span>
          <h1 className="text-4xl font-black text-slate-800 mb-6">{data.title}</h1>
          <p className="text-slate-500 leading-relaxed mb-8">{data.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-xs text-slate-400 font-bold uppercase">Duration</p>
              <p className="text-slate-800 font-black">{data.duration}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-xs text-slate-400 font-bold uppercase">Questions</p>
              <p className="text-slate-800 font-black">{data.questions} Items</p>
            </div>
          </div>

          <div className="space-y-3 mb-10">
            {data.expectations.map((item, index) => (
              <div key={index} className="flex items-center text-slate-600 text-sm font-medium">
                <span className="mr-3 text-green-400">✔</span> {item}
              </div>
            ))}
          </div>

          <button 
            onClick={() => navigate(`/assessments/test/${id}`)}
            className={`w-full py-5 rounded-2xl bg-gradient-to-r ${data.color} text-slate-800 font-black text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95`}
          >
            Start Assessment
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-tighter">
            Your data is 100% private and stays on your device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;