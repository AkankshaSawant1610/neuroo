
import React from 'react';
import { Book, Heart, Sparkles, Wind, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming you use react-router
import '../styles/home.css';

const ExploreMore = () => {
  const categories = [
    { title: "Anxiety", color: "bg-blue-100/50", text: "text-blue-700", path: "/assessments/anxiety" },
    { title: "Depression", color: "bg-purple-100/50", text: "text-purple-700", path: "/assessments/depression" },
    { title: "Bipolar", color: "bg-rose-100/50", text: "text-rose-700", path: "/assessments/bipolar" },
    { title: "OCD", color: "bg-amber-100/50", text: "text-amber-700", path: "/assessments/ocd" },
    { title: "Stress", color: "bg-emerald-100/50", text: "text-emerald-700", path: "/assessments/stress" },
  ];

  const lifestyleItems = [
    { title: "The Art of Reading", desc: "Build focus through literature", icon: <Book size={18} /> },
    { title: "Conquering Shadows", desc: "A guide to overcoming fear", icon: <Sparkles size={18} /> },
    { title: "Daily Stillness", desc: "Simple meditation routines", icon: <Wind size={18} /> },
    { title: "Inner Fire", desc: "Stay motivated every day", icon: <Heart size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] py-20 px-6 font-sans text-slate-800 relative overflow-hidden">
      
      {/* Background Blobs for Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-50/50 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* --- HERO HEADER SECTION --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-indigo-500 bg-indigo-50 px-4 py-1 rounded-full">
              Discover More
            </span>
            <h1 className="text-5xl md:text-7xl font-light leading-tight text-slate-900">
              Everything you need <br />
              <span className="font-serif italic text-indigo-600">to heal and grow.</span>
            </h1>
            <p className="max-w-lg text-lg text-slate-500 leading-relaxed border-l-2 border-indigo-100 pl-6">
              A curated space where science meets serenity. Explore our comprehensive guides and lifestyle tips designed for your mental well-being.
            </p>
          </div>
          
          <div className="relative group">
            {/* Main Cheerful Image */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Mindfulness and Peace" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply opacity-20 animate-bounce" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-400 rounded-full mix-blend-multiply opacity-20 animate-pulse" />
          </div>
        </section>

        {/* --- CONTENT BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Knowledge Hub (Clickable Topics) */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Knowledge Hub</h2>
              <p className="text-slate-400 text-sm mb-8">Deep dives into clinical conditions.</p>
              
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, i) => (
                  <Link 
                    to={cat.path} 
                    key={i} 
                    className={`${cat.color} ${cat.text} px-5 py-3 rounded-2xl font-medium transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95 flex items-center gap-2`}
                  >
                    {cat.title}
                    <ArrowRight size={14} className="opacity-50" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-12 p-5 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-500 text-center uppercase tracking-widest font-bold">New Content Weekly</p>
            </div>
          </div>

          {/* Card 2: Your Lifestyle Corner */}
          <div className="lg:col-span-1 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
             <h2 className="text-2xl font-semibold mb-6">Lifestyle Tips</h2>
             <div className="space-y-4">
                {lifestyleItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-indigo-50/50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Card 3: The NEW Readable "Cheerful" Card (The Affirmation) */}
          <div className="bg-indigo-600 p-10 rounded-[3rem] text-white relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <Quote size={40} className="text-indigo-400 mb-6" />
              <h2 className="text-2xl font-medium leading-relaxed">
                "Small steps every day lead to big changes. You are exactly where you need to be in your journey."
              </h2>
            </div>
            
            <div className="relative z-10 mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 p-1">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="rounded-full" />
              </div>
              <div>
                <p className="font-bold text-sm">From Admin : Gentle Reminder</p>
                <p className="text-indigo-200 text-xs tracking-wide uppercase">Mindfulness Team</p>
              </div>
            </div>

            {/* Abstract background shapes for the card */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExploreMore;