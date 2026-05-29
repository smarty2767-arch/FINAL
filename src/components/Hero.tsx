import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[100svh] md:min-h-[90vh] flex items-center justify-center pt-[80px] md:pt-[120px] pb-[40px] md:pb-[80px] overflow-hidden w-full">
      {/* Subtle SaaS-style background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-[#03050C] to-[#03050C] pointer-events-none -z-10" />

      <div className="max-w-[1200px] w-full mx-auto px-5 relative z-10 mt-4 md:mt-0">
        <div className="flex flex-col items-center justify-center pt-8 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-full w-fit border border-blue-500/10 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[11px] md:text-xs font-semibold tracking-wide uppercase">Available for new projects</span>
            </div>
            
            <h1 className="font-display text-[36px] md:text-[56px] lg:text-[72px] leading-[1.05] font-bold text-white tracking-[-0.02em] mt-5 md:mt-6 text-balance">
              I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">High-Converting</span> Business Websites
            </h1>
            
            <p className="text-[15px] md:text-[18px] text-slate-400 max-w-full md:max-w-2xl leading-[1.6] text-balance mt-4 md:mt-6 font-medium">
              Modern, fast & mobile-friendly websites delivered in just 4-5 working days.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-8 md:mt-10 w-full md:w-auto">
              <button
                onClick={onBookClick}
                className="group w-full md:w-auto flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3.5 md:py-4 rounded-[12px] font-semibold hover:bg-blue-500 transition-colors duration-300 text-[15px] md:text-base border border-blue-500 shadow-sm"
              >
                <span>Book Website Now</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-8 md:pt-10 border-t border-slate-800/60 w-full max-w-2xl mt-10 md:mt-12">
              <div className="flex items-center space-x-2 text-[13px] md:text-[14px] font-medium text-slate-400">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span>1+ Year Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-[13px] md:text-[14px] font-medium text-slate-400">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span>4-5 Days Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-[13px] md:text-[14px] font-medium text-slate-400">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span>Free Demo Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
