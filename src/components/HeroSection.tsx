
import { useState } from 'react';
import { Play, Shield, ArrowRight, Eye, Camera, Lock } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/modal';
import { SecurityAssessmentForm } from './SecurityAssessmentForm';
import { CustomSecurityPlanForm } from './CustomSecurityPlanForm';
import { VideoModal } from './VideoModal';

const HeroSection = () => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isCustomPlanOpen, setIsCustomPlanOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openAssessmentModal = () => setIsAssessmentOpen(true);
  const closeAssessmentModal = () => setIsAssessmentOpen(false);
  
  const openCustomPlanModal = () => setIsCustomPlanOpen(true);
  const closeCustomPlanModal = () => setIsCustomPlanOpen(false);
  
  const openVideoModal = () => setIsVideoOpen(true);
  const closeVideoModal = () => setIsVideoOpen(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2070&q=80"
          alt="Professional security surveillance control room with multiple CCTV monitors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/75"></div>
        <div className="absolute inset-0 gradient-hero opacity-85"></div>
      </div>

      {/* Floating Security Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-16 md:top-20 left-4 md:left-10 animate-bounce-slow">
          <Camera className="h-6 w-6 md:h-8 md:w-8 text-cyan-accent opacity-60" />
        </div>
        <div className="absolute top-32 md:top-40 right-8 md:right-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
          <Shield className="h-5 w-5 md:h-6 md:w-6 text-green-secure opacity-60" />
        </div>
        <div className="absolute bottom-32 md:bottom-40 left-8 md:left-20 animate-bounce-slow" style={{ animationDelay: '2s' }}>
          <Eye className="h-6 w-6 md:h-7 md:w-7 text-electric-blue opacity-60" />
        </div>
        <div className="absolute top-1/2 right-4 md:right-16 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
          <Lock className="h-5 w-5 md:h-6 md:w-6 text-gold-premium opacity-50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6 lg:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-security/10 border border-cyan-accent/20 rounded-full px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 backdrop-blur-sm">
            <Shield className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-cyan-accent" />
            <span className="text-cyan-accent font-semibold text-xs md:text-sm lg:text-base">Premium Security Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
            PROTECT
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-cyan-accent bg-clip-text">
              WHAT MATTERS
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-steel-grey max-w-4xl mx-auto leading-relaxed">
            Elite physical and digital security services with advanced CCTV surveillance, 
            <span className="text-white font-semibold"> AI-powered threat detection</span>, and 
            <span className="text-cyan-accent font-semibold"> 24/7 monitoring systems</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 pt-4 md:pt-6 lg:pt-8">
            <Dialog open={isAssessmentOpen} onOpenChange={setIsAssessmentOpen}>
              <DialogTrigger asChild>
                <button 
                  onClick={openAssessmentModal}
                  className="relative overflow-hidden group bg-gradient-to-r from-electric-blue to-cyan-accent hover:from-cyan-accent hover:to-electric-blue text-navy-dark font-semibold px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow shadow-electric-blue/30 w-full sm:w-auto text-sm md:text-base flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="whitespace-nowrap">Free Security Assessment</span>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
            
            <button 
              onClick={openVideoModal}
              className="btn-secondary group w-full sm:w-auto text-sm md:text-base flex items-center"
            >
              <Play className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">Watch Our Story</span>
            </button>
            
            <Dialog open={isCustomPlanOpen} onOpenChange={setIsCustomPlanOpen}>
              <DialogTrigger asChild>
                <button 
                  onClick={openCustomPlanModal}
                  className="btn-secondary group w-full sm:w-auto text-sm md:text-base flex items-center"
                >
                  <Shield className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="whitespace-nowrap">Request Custom Security Plan</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white mb-2">Request Custom Security Plan</DialogTitle>
                  <p className="text-gray-300 text-sm mb-6">
                    Tell us about your security needs and we'll create a tailored security solution for your business or property.
                  </p>
                </DialogHeader>
                <CustomSecurityPlanForm onSuccess={closeCustomPlanModal} onCancel={closeCustomPlanModal} />
              </DialogContent>
            </Dialog>
            
            <VideoModal
              isOpen={isVideoOpen}
              onClose={closeVideoModal}
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Our Story - Sentinel Secure"
            />
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 pt-6 md:pt-8 lg:pt-12 text-steel-grey">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-secure rounded-full animate-pulse-glow"></div>
              <span className="font-semibold text-xs md:text-sm lg:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-accent rounded-full animate-pulse-glow"></div>
              <span className="font-semibold text-xs md:text-sm lg:text-base">24/7 CCTV Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-electric-blue rounded-full animate-pulse-glow"></div>
              <span className="font-semibold text-xs md:text-sm lg:text-base">AI-Powered Detection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-steel-grey rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-cyan-accent rounded-full mt-1.5 md:mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
