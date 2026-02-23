
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { assessmentDetails } from "../assessmentService";

/**
 * CLINICAL MASTER DATA 
 * Full scientific documentation for all 5 assessment modules.
 */
const CLINICAL_CONTENT = {
  anxiety: {
    tool: "Generalized Anxiety Disorder 7-item (GAD-7)",
    definition: "Generalized Anxiety Disorder (GAD) is characterized by persistent and excessive worry about a number of different things. Individuals may anticipate disaster and may be overly concerned about money, health, family, work, or other issues.",
    accent: "blue",
    bg: "bg-[#F8FAFF]",
    theory: "The GAD-7 is a brief, validated screening tool used to assess the presence and severity of GAD. Evaluation is based on 7 items scored 0-3 (Not at all to Nearly every day). Total score ranges from 0–21, reflecting the frequency of anxiety symptoms in the past 14 days.",
    matrix: { range: "0–21", low: "0–4", mod: "5–14", high: "15–21" },
    cutoff: "Score ≥ 8 is considered a reasonable cut-off for identifying probable cases of GAD. Further diagnostic assessment is recommended.",
    performance: [
      { label: "Generalized Anxiety Disorder", sens: "89%", spec: "82%" },
      { label: "Panic Disorder", sens: "74%", spec: "81%" },
      { label: "Social Anxiety Disorder", sens: "72%", spec: "80%" },
      { label: "Post-Traumatic Stress (PTSD)", sens: "66%", spec: "81%" }
    ],
    sources: [
      "Spitzer RL, et al. A brief measure for assessing GAD: the GAD-7. Arch Intern Med. 2006;166:1092–7.",
      "Plummer F, et al. Screening for anxiety disorders with the GAD-7. Gen Hosp Psychiatry. 2016;39:24–31.",
      "Kroenke K, et al. Anxiety disorders in primary care: prevalence and detection. Ann Intern Med. 2007;146:317–25."
    ],
    ack: "Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues. Educational grant from Pfizer Inc."
  },
  depression: {
    tool: "Patient Health Questionnaire-9 (PHQ-9)",
    definition: "Depression is a medical illness that negatively affects how you feel, think, and act. The PHQ-9 is a simple, validated screening tool used to assess the presence and severity of depression over the last 2 weeks.",
    accent: "indigo",
    bg: "bg-[#F9F8FF]",
    theory: "Evaluation is based on 9 items scored 0-3. It tracks interest levels, mood, sleep, energy, appetite, self-worth, concentration, and psychomotor changes. Total possible score: 0–27.",
    matrix: { range: "0–27", low: "0–4", mod: "5–14", high: "15–27" },
    cutoff: "Score ≥ 10 is commonly used as a cut-off for identifying probable major depressive disorder.",
    performance: [{ label: "Major Depression Screening", sens: "~88%", spec: "~88%" }],
    clinicalNote: "CRITICAL ALERT: Item 9 (thoughts of self-harm) requires immediate clinical follow-up if scored above 0.",
    sources: [
      "Kroenke K, et al. The PHQ-9: Validity of a Brief Depression Severity Measure. J Gen Intern Med. 2001;16:606-13.",
      "Manea L, et al. Optimal cut-off score for diagnosing depression with the PHQ-9. CMAJ. 2012;184:E191-6."
    ],
    ack: "Developed by Drs. Kurt Kroenke, Robert L. Spitzer, and Janet B.W. Williams. Publicly available for clinical use."
  },
  bipolar: {
    tool: "Mood Disorder Questionnaire (MDQ)",
    definition: "Bipolar Disorder involves extreme mood swings. The MDQ is a widely used screening tool for identifying lifetime history of manic or hypomanic episodes.",
    accent: "rose",
    bg: "bg-[#FFF8F9]",
    theory: "A 3-part evaluation. Part 1 checks for 13 manic behaviors (Scored Yes/No). Part 2 verifies if symptoms happened during the same period. Part 3 measures social, work, or relationship impairment.",
    matrix: { range: "Yes Count", low: "< 7", mod: "—", high: "≥ 7 + Impairment" },
    cutoff: "Positive screen requires: 7+ 'Yes' in Part 1 AND Symptoms co-occurring AND Moderate/Serious impairment.",
    performance: [
      { label: "Bipolar I Detection", sens: "73%", spec: "90%" },
      { label: "Bipolar II Detection", sens: "Moderate", spec: "90%" }
    ],
    clinicalNote: "The MDQ screens for manic symptoms, not depression. It is highly specific (90%), excellent at ruling out Bipolar when results are negative.",
    sources: [
      "Hirschfeld RMA et al. Development and validation of the MDQ. Am J Psychiatry. 2000;157:1873-5.",
      "Hirschfeld RMA et al. Screening for bipolar disorder in the community. J Clin Psychiatry. 2003;64:53-9."
    ],
    ack: "Developed by Dr. Robert M.A. Hirschfeld and colleagues. Publicly available for clinical screening use."
  },
  ocd: {
    tool: "Obsessive-Compulsive Inventory–Revised (OCI-R)",
    definition: "OCD is characterized by Obsessions (intrusive thoughts) and Compulsions (repetitive behaviors performed to reduce anxiety). OCI-R assesses distress across multiple clinical dimensions.",
    accent: "teal",
    bg: "bg-[#F3FDFB]",
    theory: "Evaluation covers 10 items scored 0-4 based on distress over the past month. Symptom dimensions include Contamination, Checking, Ordering, Hoarding, and Intrusive thoughts. Total score: 0-40.",
    matrix: { range: "0–40", low: "0–10", mod: "11–20", high: "21–40" },
    cutoff: "Score ≥ 21 may indicate clinically significant OCD symptoms and warrants professional evaluation.",
    performance: [{ label: "OCD Screening", sens: "82-84%", spec: "83-87%" }],
    clinicalNote: "OCD is treatable through Cognitive Behavioral Therapy (ERP) and Medication (SSRIs).",
    sources: [
      "Foa EB et al. The Obsessive-Compulsive Inventory: Development and validation. Psychol Assess. 2002.",
      "Abramowitz JS & Deacon BJ. Psychometric properties of the OCI-R. Behav Res Ther. 2006."
    ],
    ack: "Developed by Dr. Edna B. Foa and colleagues. Available for research and screening purposes."
  },
  stress: {
    tool: "Perceived Stress Scale (PSS-10)",
    definition: "Stress is the body's reaction to unpredictable demands. The PSS-10 measures the degree to which life situations are appraised as stressful and uncontrollable.",
    accent: "orange",
    bg: "bg-[#FFFAF2]",
    theory: "Uses 10 items scored 0-4. Items 4, 5, 7, and 8 are reverse-scored (0↔4, 1↔3) to measure coping confidence vs perceived overload. Range: 0-40.",
    matrix: { range: "0–40", low: "0–13", mod: "14–26", high: "27–40" },
    cutoff: "Higher scores correlate with greater perceived stress. Chronic stress contributes to hypertension and immune vulnerability.",
    performance: [{ label: "Internal Consistency", sens: "Alpha", spec: "0.78-0.91" }],
    clinicalNote: "The PSS measures perceived stress, not a medical psychiatric diagnosis. It focuses on life-load appraisal.",
    sources: [
      "Cohen S, Kamarck T, Mermelstein R. A Global Measure of Perceived Stress. J Health Soc Behav. 1983.",
      "Cohen S & Williamson G. Perceived Stress in a Probability Sample of the US. 1988."
    ],
    ack: "Developed by Dr. Sheldon Cohen and colleagues. Available for research and educational use."
  }
};

/**
 * 🌿 CLINICAL VERIFICATION BANNER
 */
const ClinicalBanner = () => (
  <div className="relative mb-12 group">
    <div className="absolute inset-0 bg-green-500 rounded-[2rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-lg" />
    <div className="relative bg-white border-2 border-green-500 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 -rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.946-2.597 9.181-6.5 11.5a11.954 11.954 0 01-11.5-11.5c0-.68.056-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        </div>
        <div>
          <h4 className="text-green-800 font-black text-lg uppercase tracking-tighter leading-none mb-1">Verified Clinical Protocol</h4>
          <p className="text-green-600 text-[10px] font-black uppercase tracking-[0.2em]">Scientific Data Snatched From Authorized Clinical Portals</p>
        </div>
      </div>
      <div className="px-6 py-3 bg-green-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Evidence-Based</div>
    </div>
  </div>
);

/**
 * 📊 COMPARISON MATRIX TABLE
 */
const ComparisonMatrix = ({ info }) => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm mb-12">
    <div className="grid grid-cols-5 bg-slate-900 text-[9px] font-black text-slate-400 uppercase tracking-widest p-4 text-center">
      <div>Assessment</div><div>Range</div><div>Low</div><div>Moderate</div><div>High / Severe</div>
    </div>
    <div className="grid grid-cols-5 p-6 text-center items-center">
      <div className="font-black text-slate-800 text-xs uppercase">{info.tool.split(' ')[0]}</div>
      <div className="font-bold text-slate-500 text-xs">{info.matrix.range}</div>
      <div className="bg-green-50 text-green-700 font-black py-2 rounded-xl text-xs mx-1">{info.matrix.low}</div>
      <div className="bg-amber-50 text-amber-700 font-black py-2 rounded-xl text-xs mx-1">{info.matrix.mod}</div>
      <div className="bg-rose-50 text-rose-700 font-black py-2 rounded-xl text-xs mx-1">{info.matrix.high}</div>
    </div>
  </div>
);

/**
 * 🛠️ VERTICAL GRID COMPONENT
 */
export default function AssessmentIntro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const testId = id?.toLowerCase();
  const info = CLINICAL_CONTENT[testId];
  const data = assessmentDetails[testId];

  if (!info || !data) return null;

  const colorStyles = {
    blue: 'text-blue-600 bg-blue-50 border-blue-100',
    indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    rose: 'text-rose-600 bg-rose-50 border-rose-100',
    teal: 'text-teal-600 bg-teal-50 border-teal-100',
    orange: 'text-orange-600 bg-orange-50 border-orange-100',
  };

  return (
    <div className={`min-h-screen ${info.bg} pt-24 pb-32 px-6 overflow-x-hidden`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation - Small Pill Button */}
        <div className="mb-12">
          <Link to="/assessments" className="group inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:rotate-[-45deg] transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </div>
            <span className="font-black text-slate-700 text-[10px] uppercase tracking-widest">Back to Assessments</span>
          </Link>
        </div>

        {/* Estimated Time Indicator (Blinking) */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border-2 border-slate-100 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <p className="text-xs font-black text-slate-700 uppercase tracking-widest">
              Est. Time: <span className="text-rose-500 animate-pulse">{data.duration}</span>
            </p>
          </div>
        </div>

        <ClinicalBanner />

        {/* Title & Definition Section */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85] uppercase">
            {info.tool.split('(')[0]}<br/>
            <span className="italic font-serif font-light text-slate-300 capitalize text-4xl md:text-6xl tracking-tight leading-none">
              ({info.tool.split('(')[1]}
            </span>
          </h1>
          <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 relative">
             <div className="absolute top-0 right-10 -translate-y-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase">Clinical Definition</div>
             <p className="text-2xl md:text-4xl text-slate-700 font-medium leading-[1.1] tracking-tight italic">
               "{info.definition}"
             </p>
          </div>
        </header>

        {/* Comparison Matrix Table */}
        <ComparisonMatrix info={info} />

        {/* Theory & Cut-off Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
           <div className="md:col-span-8 bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
              <span className="text-amber-400 font-black text-[10px] uppercase tracking-[0.4em] block mb-6">Scientific Theory of Evaluation</span>
              <p className="text-xl md:text-2xl font-bold leading-snug relative z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                {info.theory}
              </p>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
           </div>

           <div className={`md:col-span-4 p-10 rounded-[4rem] ${colorStyles[info.accent]} border-4 border-white shadow-2xl flex flex-col items-center justify-center text-center`}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner mb-6">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="font-black text-[10px] uppercase tracking-widest block mb-4 opacity-60 text-slate-900">Recommended Cut-off</span>
              <p className="text-[10px] font-black leading-relaxed px-2 uppercase text-slate-900">
                {info.cutoff}
              </p>
           </div>
        </section>

        {/* Performance & Clinical Alert Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-10 bg-white rounded-[3.5rem] border-2 border-slate-50 shadow-xl shadow-slate-200/50">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10">Data Performance & Validity</h3>
              <div className="space-y-8">
                {info.performance.map((p, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                       <span className="font-black text-slate-800 text-[11px] uppercase tracking-tight">{p.label}</span>
                       <span className="text-[9px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase">Verified</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner">
                       <div className="h-full bg-green-500 rounded-full" style={{width: p.sens?.includes('%') ? p.sens : '90%'}} />
                    </div>
                    <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter italic">
                       <span>Sensitivity: {p.sens}</span>
                       <span>{p.spec ? `Specificity: ${p.spec}` : ''}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {info.clinicalNote && (
              <div className={`p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden group flex flex-col justify-center ${testId === 'depression' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-white'}`}>
                <div className="relative z-10">
                  <span className={`${testId === 'depression' ? 'text-white/60' : 'text-amber-400'} font-black text-[10px] uppercase tracking-[0.3em] block mb-6`}>
                    {testId === 'depression' ? 'Critical Alert: SOS' : 'Clinical Clinical Note'}
                  </span>
                  <p className="font-black text-2xl md:text-3xl leading-tight italic tracking-tight italic">
                    "{info.clinicalNote}"
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-10 -mt-10 rounded-full group-hover:scale-[3] transition-transform duration-1000" />
              </div>
            )}
        </div>

        {/* Initialize Test Button */}
        <div className="text-center mb-40">
           <button 
             onClick={() => navigate(`/assessments/test/${testId}`)}
             className="w-full py-12 rounded-[4rem] bg-slate-900 text-white text-4xl md:text-5xl font-black uppercase tracking-tighter shadow-2xl hover:scale-[1.02] transition-all overflow-hidden relative group"
           >
             <span className="relative z-10">Initialize {id} Test</span>
             <div className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
           </button>
           <p className="mt-8 text-[11px] font-black text-slate-400 uppercase tracking-[0.6em]">Science-Backed • Anonymous Screening • Data Stays Private</p>
        </div>

        {/* Bibliography & Credits Footer */}
        <footer className="pt-20 border-t-4 border-slate-900 grid md:grid-cols-2 gap-20">
          <div className="text-[11px] font-black text-slate-400 uppercase leading-loose tracking-tighter">
             <p className="text-slate-900 mb-8 tracking-[0.2em] text-xs">Scientific Bibliography:</p>
             {info.sources.map((s, i) => <p key={i} className="mb-6 pb-6 border-b border-slate-100">[{i+1}] {s}</p>)}
          </div>
          <div className="text-[11px] font-black text-slate-400 uppercase leading-loose tracking-tighter">
             <p className="text-slate-900 mb-8 tracking-[0.2em] text-xs">Clinical Attribution:</p>
             <p className="mb-8 leading-relaxed text-slate-500">{info.ack}</p>
             <p className="text-green-600 border-2 border-green-600 inline-block px-6 py-2 rounded-full text-center">Validated for Digital Screening</p>
          </div>
        </footer>

      </div>
    </div>
  );
}