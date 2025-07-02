
import { useState, useEffect } from 'react';
import { Menu, X, Shield, ArrowRight } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/modal';
import { SecurityAssessmentForm } from './SecurityAssessmentForm';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const openAssessmentModal = () => setIsAssessmentOpen(true);
  const closeAssessmentModal = () => setIsAssessmentOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-dark/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="p-1.5 md:p-2 bg-electric-blue rounded-lg">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-navy-dark" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">Sentinel</h1>
              <p className="text-xs md:text-sm text-steel-grey -mt-1">SOLUTIONS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-electric-blue transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
            <Dialog open={isAssessmentOpen} onOpenChange={setIsAssessmentOpen}>
              <DialogTrigger asChild>
                <button 
                  onClick={openAssessmentModal}
                  className="relative overflow-hidden group bg-gradient-to-r from-electric-blue to-cyan-accent hover:from-cyan-accent hover:to-electric-blue text-navy-dark font-semibold px-4 py-2 xl:px-6 xl:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow shadow-electric-blue/30 text-sm xl:text-base flex items-center"
                >
                  <span className="relative z-10 flex items-center">
                    <span>Free Assessment</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 via-white/20 to-electric-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white mb-2">Free Security Assessment</DialogTitle>
                  <p className="text-gray-300 text-sm mb-6">
                    Fill out the form below and our security experts will contact you to schedule a free, no-obligation security assessment.
                  </p>
                </DialogHeader>
                <SecurityAssessmentForm onSuccess={closeAssessmentModal} onCancel={closeAssessmentModal} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-navy-light/20 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-navy-dark/95 backdrop-blur-lg border-t border-steel-grey/20 rounded-b-lg">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-electric-blue hover:bg-navy-light/10 transition-all duration-300 font-medium px-4 py-3 rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-2 pt-2">
                <Dialog open={isAssessmentOpen} onOpenChange={setIsAssessmentOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="relative overflow-hidden group bg-gradient-to-r from-electric-blue to-cyan-accent hover:from-cyan-accent hover:to-electric-blue text-navy-dark font-semibold w-full text-sm px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow shadow-electric-blue/30 flex items-center justify-center"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        openAssessmentModal();
                      }}
                    >
                      <span className="relative z-10 flex items-center">
                        <span>Free Assessment</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 via-white/20 to-electric-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
