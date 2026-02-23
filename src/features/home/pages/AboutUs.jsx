
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, Heart, Cloud, Sparkles, Wand2, Coffee, Ghost, 
  Brain, Gamepad2, MessageCircle, ShieldCheck, Zap, 
  Leaf, Microscope, Lock 
} from 'lucide-react';
import '../styles/home.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const offerings = [
    {
      icon: <Microscope size={32} className="text-blue-500" />,
      title: "Mental Assessments",
      desc: "Scientifically inspired self-evaluation tools that provide instant insights into your emotional patterns without the scary jargon.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <Gamepad2 size={32} className="text-purple-500" />,
      title: "Cognitive Games",
      desc: "Brain-training activities designed to enhance focus, memory, and decision-making through the power of play.",
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <MessageCircle size={32} className="text-pink-500" />,
      title: "Let's Session",
      desc: "A dedicated safe space for reflection, guided journaling, and open emotional expression in a non-judgmental environment.",
      color: "bg-pink-50 border-pink-100"
    },
    {
      icon: <Leaf size={32} className="text-green-500" />,
      title: "Relaxation Tools",
      desc: "From breathing animations to nature soundscapes, we provide immediate relief for moments of high stress.",
      color: "bg-green-50 border-green-100"
    }
  ];

  const values = [
    {
      icon: <Heart size={30} className="text-pink-500" />,
      title: "Soft on the Mind",
      desc: "Wellness shouldn't feel like work. We design everything to be as gentle as a cloud.",
      borderColor: "border-pink-200"
    },
    {
      icon: <Star size={30} className="text-blue-500" />,
      title: "Bright Future",
      desc: "Our goal is to help you see the sparkle in your own progress, every single day.",
      borderColor: "border-blue-200"
    },
    {
      icon: <Wand2 size={30} className="text-purple-500" />,
      title: "Magic Tech",
      desc: "We use science-backed algorithms to turn complex data into simple, healing insights.",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* 1. Moving Dots Background Animation */}
      <div className="dots-container">
        <div className="dot dot-pink"></div>
        <div className="dot dot-blue"></div>
        <div className="dot dot-purple"></div>
        <div className="dot dot-yellow"></div>
        <div className="dot dot-pink" style={{bottom: '5%', right: '40%', width: '100px'}}></div>
      </div>

      <div className="p-8 max-w-7xl mx-auto pt-16 relative z-10">
        
        {/* --- Hero Section --- */}
        <section className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm mb-6 animate-bounce border border-pink-100">
            <Sparkles size={18} className="text-pink-400" />
            <span className="text-xs font-black text-pink-500 uppercase tracking-[0.3em] font-outfit">Our Story & Mission</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 mb-8 tracking-tighter font-playfair">
            Your Mind is a Garden. <br />
            <span className="gradient-text-pink italic">Let's Help it Bloom.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium font-outfit">
            NeuroBloom is more than an app—it's a candy shop for your soul. 
            We replace anxiety with curiosity and clinical coldness with colorful care.
          </p>
        </section>

        {/* --- Mission & Vision (Two Column) --- */}
        <section className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-slate-50 relative overflow-hidden">
                   <h2 className="text-4xl font-black text-slate-800 mb-6 font-playfair">Our Mission</h2>
                   <p className="text-slate-500 text-lg leading-relaxed mb-6 font-medium font-jakarta">
                      In a world that's constantly "on," we created NeuroBloom to be your "off" switch—or rather, your "glow" switch. 
                   </p>
                   <p className="text-slate-500 text-lg leading-relaxed font-medium font-jakarta">
                      We believe mental clarity begins with understanding yourself. Our goal is to provide tools that empower individuals to track, improve, and reflect on their mental wellbeing without the stigma.
                   </p>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border-l-8 border-pink-400">
                <Brain className="text-pink-400 mt-1" size={40} />
                <div className="font-jakarta">
                    <h4 className="font-bold text-xl text-slate-800">Approachability First</h4>
                    <p className="text-slate-500 font-medium">Making mental health support as easy as checking your favorite social app.</p>
                </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border-l-8 border-blue-400">
                <Lock className="text-blue-400 mt-1" size={40} />
                <div className="font-jakarta">
                    <h4 className="font-bold text-xl text-slate-800">Radical Privacy</h4>
                    <p className="text-slate-500 font-medium">Your data stays with you. We prioritize security and anonymity in every click.</p>
                </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border-l-8 border-purple-400">
                <Zap className="text-purple-400 mt-1" size={40} />
                <div className="font-jakarta">
                    <h4 className="font-bold text-xl text-slate-800">Science + Joy</h4>
                    <p className="text-slate-500 font-medium">Blending clinical research with interactive, gamified experiences.</p>
                </div>
            </div>
          </div>
        </section>

        {/* --- Feature Grid (What We Offer) --- */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 font-playfair">Inside the Bloom Box</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm font-outfit">Everything you need to nurture your neurodiversity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, idx) => (
              <div key={idx} className={`p-8 rounded-[3rem] border-2 ${item.color} hover:scale-105 transition-transform duration-300`}>
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-3 font-jakarta">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium font-jakarta">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Values Grid (3 Column) --- */}
        <section className="grid md:grid-cols-3 gap-8 mb-32">
          {values.map((v, i) => (
            <div key={i} className={`about-grid-card p-10 rounded-[3.5rem] border-b-8 ${v.borderColor} bg-white text-center shadow-sm`}>
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 mx-auto">
                {v.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4 font-playfair">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed font-jakarta">{v.desc}</p>
            </div>
          ))}
        </section>

        {/* --- Trust & Privacy Banner --- */}
        <section className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden mb-32">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <ShieldCheck size={300} />
           </div>
           <div className="relative z-10 max-w-2xl font-jakarta">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight font-playfair">Your Secrets are Safe <br /><span className="text-blue-400 italic">Under our Umbrella.</span></h2>
              <div className="space-y-6">
                <p className="text-slate-400 text-lg font-medium">
                  We know that mental wellness requires trust. NeuroBloom is built with high-level encryption, ensuring that your assessments and sessions are for your eyes only.
                </p>
                <div className="flex flex-wrap gap-4 font-outfit">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    No Third-Party Sharing
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Anonymous Tracking
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Secure Data Vault
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* --- Soft Interactive Visuals Section --- */}
        <section className="grid lg:grid-cols-2 gap-12 mb-32 items-center font-jakarta">
          <div className="space-y-8 text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight font-playfair">
              A Safe Space <br /> Wrapped in <span className="text-pink-400 italic underline">Softness.</span>
            </h2>
            <div className="flex gap-4 font-outfit">
               <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex-1 hover:bg-pink-50 transition-colors group">
                  <Coffee className="text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-md font-bold text-slate-800">Daily Rituals</p>
                  <p className="text-xs text-slate-400 mt-1 font-jakarta">Log moods with a cup of peace.</p>
               </div>
               <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex-1 hover:bg-blue-50 transition-colors group">
                  <Ghost className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-md font-bold text-slate-800">No Pressure</p>
                  <p className="text-xs text-slate-400 mt-1 font-jakarta">Go at your own pace, ghost the stress.</p>
               </div>
            </div>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              We focus on the human side of mental health. No clinical jargon, 
              no scary medical terms. Just you, your thoughts, and our 
              colorful tools to help you bloom.
            </p>
          </div>

          <div className="relative">
             <div className="bg-gradient-to-tr from-pink-200 via-purple-100 to-blue-200 h-[500px] rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0">
                   <img 
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" 
                    alt="Mental Healing" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                   />
                </div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-lg font-playfair">
                   <p className="text-slate-800 font-black text-2xl italic leading-tight">
                     " Healing is not a destination — it’s a journey. We’re here to walk with you . "  
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* --- Final High-Energy CTA --- */}
        <section className="bg-white rounded-[5rem] p-16 md:p-24 text-center border-4 border-dashed border-pink-100 relative overflow-hidden mb-12 shadow-sm">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tight font-playfair">
              Ready to feel <br /> 
              <span className="text-pink-500 italic">Light as a Feather?</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-lg mx-auto font-medium leading-relaxed font-jakarta">
              Join thousands of people who are cultivating their mental garden with us every single morning.
            </p>
            <button 
              onClick={() => navigate('/assessments')}
              className="bg-pink-500 text-white px-14 py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl shadow-pink-200 hover:bg-pink-600 hover:scale-110 active:scale-95 transition-all flex items-center gap-3 mx-auto font-outfit"
            >
              Start My Bloom 🌸
            </button>
          </div>
        </section>

        <footer className="text-center font-outfit">
            <div className="text-pink-300 font-black text-[12px] uppercase tracking-[0.5em] pb-10">
                NeuroBloom • Designed with Love • 2025
            </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;