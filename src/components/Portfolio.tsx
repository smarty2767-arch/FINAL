import { motion } from 'motion/react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-[40px] md:py-[80px] relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/5 via-[#03050c] to-[#03050c] pointer-events-none" />
      <div className="max-w-[1200px] w-full mx-auto px-5 relative z-10">
        <div
           className="text-center mb-10 md:mb-14"
        >
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-[11px] md:text-[12px] mb-3 block">My Work</span>
          <h2 className="font-display text-[24px] md:text-[36px] font-bold text-white mb-3 md:mb-4 leading-[1.2] tracking-tight">Client Projects</h2>
          <p className="text-[14px] md:text-[18px] text-slate-400 max-w-2xl mx-auto leading-[1.5] md:leading-[1.6]">A selection of recent digital experiences.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-slate-900/40 border border-slate-800/80 rounded-[16px] md:rounded-[20px] overflow-hidden flex items-center justify-center hover:bg-slate-800/30 hover:border-slate-700 transition-colors duration-300">
                <div className="relative z-10 px-6 py-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-[12px] shadow-lg">
                  <span className="text-[14px] font-medium tracking-tight text-white/90">Coming Soon</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
