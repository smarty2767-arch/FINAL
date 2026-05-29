import { motion } from 'motion/react';
import { ShieldCheck, Tag, MessageCircle, ShoppingBag, Users, Globe2 } from 'lucide-react';

const benefits = [
  { icon: <ShieldCheck size={28} />, title: "More Trust", desc: "Build instant credibility with clients" },
  { icon: <Tag size={28} />, title: "Better Branding", desc: "Stand out from your competitors" },
  { icon: <MessageCircle size={28} />, title: "Faster Communication", desc: "Direct channel to your business" },
  { icon: <ShoppingBag size={28} />, title: "Showcase Products", desc: "Beautiful digital catalog" },
  { icon: <Users size={28} />, title: "Attract Customers", desc: "Reach a wider local audience" },
  { icon: <Globe2 size={28} />, title: "24/7 Presence", desc: "Always open for business" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-[40px] md:py-[80px] w-full relative">
      {/* Subtle border instead of full section background */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-[1200px] w-full mx-auto px-5 text-center">
        <div className="mb-10 md:mb-14">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-[11px] md:text-[12px] mb-3 block">Business Growth</span>
          <h2 className="font-display text-[24px] md:text-[36px] font-bold text-white leading-[1.2] tracking-tight">Benefits of Having a Website</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <div className="flex flex-col items-center p-6 md:p-8 bg-slate-900/30 border border-slate-800/80 rounded-[16px] md:rounded-[20px] hover:bg-slate-800/50 hover:border-slate-700 transition-colors duration-300 text-center">
              <div className="text-blue-500 mb-4 md:mb-5 bg-blue-500/5 p-3 rounded-[14px] border border-blue-500/10">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-[17px] md:text-[20px] text-white mb-2 leading-[1.3]">{benefit.title}</h3>
              <p className="text-[14px] md:text-[15px] text-slate-400 max-w-[200px] leading-[1.5] md:leading-[1.6] text-balance">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
