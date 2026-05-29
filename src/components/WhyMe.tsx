import { motion } from 'motion/react';
import { Smartphone, Clock, Eye, DollarSign, Layout, HeartHandshake, Zap } from 'lucide-react';

const features = [
  { icon: <Smartphone />, title: "Mobile Friendly Website", desc: "Flawless experience on phones and tablets." },
  { icon: <Clock />, title: "Ready in 4-5 Days", desc: "Fast turnaround times for standard projects." },
  { icon: <Eye />, title: "Free Demo Before Final Delivery", desc: "Review and approve before it goes live." },
  { icon: <DollarSign />, title: "Affordable Pricing", desc: "Premium quality that fits your budget." },
  { icon: <Layout />, title: "Modern UI Design", desc: "Sleek, clean, and professional aesthetics." },
  { icon: <HeartHandshake />, title: "Support After Delivery", desc: "I'm here to help even after launch." },
  { icon: <Zap />, title: "Quick Communication", desc: "Fast responses to your questions and updates." },
];

export default function WhyMe() {
  return (
    <section id="services" className="py-[40px] md:py-[80px] relative bg-zinc-950 w-full">
      <div className="max-w-[1200px] w-full mx-auto px-5">
        <div className="mb-8 md:mb-12">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-[11px] md:text-[12px] mb-2 block text-center md:text-left">Services</span>
          <h2 className="font-display text-[24px] md:text-[36px] font-bold text-white mb-3 md:mb-4 leading-[1.2] tracking-tight text-center md:text-left">Why Build With Me?</h2>
          <p className="text-[14px] md:text-[18px] text-zinc-400 max-w-2xl text-center md:text-left mx-auto md:mx-0 leading-[1.5] md:leading-[1.6]">I focus on efficiency, transparency, and modern design principles to deliver exactly what your business needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 md:p-8 bg-slate-900/40 border border-slate-800/80 rounded-[16px] md:rounded-[20px] hover:bg-slate-800/50 hover:border-slate-700 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-lg md:rounded-xl flex items-center justify-center text-blue-500 mb-4 md:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-[17px] md:text-[20px] font-semibold text-white mb-2 leading-[1.3] group-hover:text-blue-50 transition-colors">{feature.title}</h3>
              <p className="text-[14px] md:text-[15px] text-slate-400 leading-[1.6]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
