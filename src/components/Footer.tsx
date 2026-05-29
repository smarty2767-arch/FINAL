import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#03050c] pt-[40px] md:pt-[60px] pb-[80px] md:pb-[40px] w-full">
      <div className="max-w-[1200px] w-full mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="lg:col-span-2">
            <span className="font-display font-semibold text-[18px] md:text-[20px] text-white block mb-3 md:mb-4 tracking-tight">Saurabh Golande</span>
            <p className="text-slate-400 max-w-md text-[14px] md:text-[15px] leading-[1.6]">
              Professional website builder focusing on creating minimal, modern, and high-converting web experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-[14px] md:text-[15px] tracking-wide">Contact</h4>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="flex items-center text-[14px] text-slate-400 gap-3">
                <Phone size={16} />
                <span>+91 7499642462</span>
              </li>
              <li className="flex items-center text-[14px] text-slate-400 gap-3">
                <Mail size={16} />
                <span>sauravgolande@gmail.com</span>
              </li>
              <li className="flex items-start text-[14px] text-slate-400 gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Navjivan Colony N11 (CSN)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-[14px] md:text-[15px] tracking-wide">Social</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/saurabhhh_67" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://t.me/Saurabh2760" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors font-semibold text-sm">
                TG
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-slate-800/60 text-[13px] text-slate-500 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Saurabh Golande. All rights reserved.</p>
          <p>Built with precision and minimalism.</p>
        </div>
      </div>
    </footer>
  );
}
