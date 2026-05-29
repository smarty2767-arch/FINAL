import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    type: 'Business',
    budget: '',
    deadline: '',
    pages: '',
    features: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields explicitly (though 'required' prop handles most of this)
    if (!formData.name || !formData.type || !formData.budget || !formData.deadline || !formData.pages || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const message = `Hello Saurabh,
I want to build a website.

Name: ${formData.name}
Business Name: ${formData.businessName || 'N/A'}
Website Type: ${formData.type}
Budget: ${formData.budget}
Deadline: ${formData.deadline}
Required Pages: ${formData.pages}
Special Features: ${formData.features || 'None'}
Contact Number: ${formData.phone}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917499642462?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
          />
          <div className="fixed inset-0 z-50 overflow-y-auto w-full flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-lg bg-[#0A0D18] border border-slate-800/80 rounded-[20px] md:rounded-[24px] p-6 md:p-8 shadow-2xl relative"
            >
              <div className="flex justify-between items-center mb-5 md:mb-6">
                <h2 className="text-[20px] md:text-[22px] font-display font-semibold text-white tracking-tight">Book Website Build</h2>
                <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-medium text-slate-300">Your Name *</label>
                    <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#03050C] border border-slate-800/80 rounded-[12px] px-4 py-3 text-[14px] text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-medium text-slate-300">Business Name</label>
                    <input name="businessName" value={formData.businessName} onChange={handleChange} className="w-full bg-[#03050C] border border-slate-800/80 rounded-[12px] px-4 py-3 text-[14px] text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="Acme Corp" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[14px] font-medium text-slate-300">Type of Website *</label>
                  <select required name="type" value={formData.type} onChange={handleChange} className="w-full bg-[#03050C] border border-slate-800/80 rounded-[12px] px-4 py-3 text-[14px] text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none transition-all outline-none">
                    <option value="Business">Business</option>
                    <option value="Portfolio">Portfolio</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Custom">Custom Web App</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-medium text-slate-300">Budget Range *</label>
                    <input required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#03050C] border border-slate-800/80 rounded-[12px] px-4 py-3 text-[14px] text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="e.g. $500 - $1000" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-medium text-slate-300">Deadline *</label>
                    <input required name="deadline" value={formData.deadline} onChange={handleChange} className="w-full bg-[#03050C] border border-slate-800/80 rounded-[12px] px-4 py-3 text-[14px] text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="e.g. 2 Weeks" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-medium text-slate-300">Required Pages *</label>
                    <input required name="pages" value={formData.pages} onChange={handleChange} className="w-full bg-[#03050C] border border-slate-800/80 rounded-[12px] px-4 py-3 text-[14px] text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="e.g. 5 Pages" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[14px] font-medium text-slate-300">Contact Number *</label>
                    <input required type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#03050C] border border-slate-800/80 rounded-[12px] px-4 py-3 text-[14px] text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="+91 ..." />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[14px] font-medium text-slate-300">Special Features (Optional)</label>
                  <textarea name="features" value={formData.features} onChange={handleChange} rows={3} className="w-full bg-[#03050C] border border-slate-800/80 rounded-[12px] px-4 py-3 text-[14px] text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all placeholder:text-slate-600" placeholder="Booking system, payment gateway, etc." />
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-[12px] transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] mt-6 text-[15px]">
                  Send Details via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
