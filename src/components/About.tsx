import { motion } from 'motion/react';
import { User, Award, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-[40px] md:py-[80px] w-full">
      <div className="max-w-[1200px] w-full mx-auto px-5 text-center">
        <div
           className="text-center"
        >
          <h2 className="font-display text-[24px] md:text-[36px] font-bold text-white leading-[1.2] tracking-tight">About Me</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
          
          <p className="text-[15px] md:text-[18px] text-slate-400 leading-[1.6] max-w-2xl mx-auto mt-5 md:mt-6">
            Hello, I am <strong className="text-white font-medium">Saurabh Golande</strong>. I help businesses grow with modern, highly performant websites. 
            With a focus on clean design and technical excellence, I ensure your online presence is both trustworthy and effective.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-12">
            <div className="flex flex-col items-center p-6 bg-slate-900/40 border border-slate-800/80 rounded-[16px] md:rounded-[20px] hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300">
              <User className="text-blue-500 mb-4" size={28} />
              <h3 className="text-[17px] md:text-[20px] font-semibold text-white mb-2 leading-[1.3] tracking-tight">Professional</h3>
              <p className="text-[14px] md:text-[15px] text-slate-400 leading-[1.5]">Website Builder</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-slate-900/40 border border-slate-800/80 rounded-[16px] md:rounded-[20px] hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300">
              <Award className="text-blue-500 mb-4" size={28} />
              <h3 className="text-[17px] md:text-[20px] font-semibold text-white mb-2 leading-[1.3] tracking-tight">Experience</h3>
              <p className="text-[14px] md:text-[15px] text-slate-400 leading-[1.5]">1 Year specialized focus</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-slate-900/40 border border-slate-800/80 rounded-[16px] md:rounded-[20px] hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300">
              <Code2 className="text-blue-500 mb-4" size={28} />
              <h3 className="text-[17px] md:text-[20px] font-semibold text-white mb-2 leading-[1.3] tracking-tight">Quality</h3>
              <p className="text-[14px] md:text-[15px] text-slate-400 leading-[1.5]">Premium modern UI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
