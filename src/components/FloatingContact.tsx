
import { useState } from 'react';
import { Phone, MessageCircle, X, Shield, Camera } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-electric-blue to-cyan-accent hover:from-cyan-accent hover:to-electric-blue rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow"
      >
        {isOpen ? (
          <X className="h-6 w-6 md:h-8 md:w-8 text-navy-dark" />
        ) : (
          <Phone className="h-6 w-6 md:h-8 md:w-8 text-navy-dark" />
        )}
      </button>

      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-16 md:bottom-20 right-0 space-y-3 md:space-y-4 animate-fade-in">
          <button className="flex items-center space-x-3 bg-security-red text-white px-4 py-3 md:px-6 md:py-3 rounded-full shadow-2xl hover:bg-red-600 transition-colors duration-300 hover-lift text-sm md:text-base">
            <Shield className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-semibold">Emergency</span>
          </button>
          
          <button className="flex items-center space-x-3 bg-navy-primary text-white px-4 py-3 md:px-6 md:py-3 rounded-full shadow-2xl hover:bg-navy-light transition-colors duration-300 hover-lift text-sm md:text-base">
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-semibold">Chat Now</span>
          </button>

          <button className="flex items-center space-x-3 bg-green-secure text-white px-4 py-3 md:px-6 md:py-3 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300 hover-lift text-sm md:text-base">
            <Camera className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-semibold">CCTV Demo</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingContact;
