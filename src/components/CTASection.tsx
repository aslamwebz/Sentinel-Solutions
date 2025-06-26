
import { useState } from 'react';
import { Shield, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/modal';
import { SecurityAssessmentForm } from './SecurityAssessmentForm';

const CTASection = () => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const openAssessmentModal = () => setIsAssessmentOpen(true);
  const closeAssessmentModal = () => setIsAssessmentOpen(false);
  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <div className="inline-flex items-center space-x-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full px-6 py-3 mb-6">
              <Shield className="h-5 w-5 text-electric-blue" />
              <span className="text-electric-blue font-semibold">Take Action Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              GET YOUR FREE
              <span className="block text-electric-blue">SECURITY ASSESSMENT</span>
            </h2>

            <p className="text-xl text-steel-grey mb-8 leading-relaxed max-w-3xl mx-auto">
              Don't wait for a security breach to act. Our experts will conduct a comprehensive 
              assessment of your current security posture and provide actionable recommendations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Dialog open={isAssessmentOpen} onOpenChange={setIsAssessmentOpen}>
                <DialogTrigger asChild>
                  <button 
                    onClick={openAssessmentModal}
                    className="relative overflow-hidden group bg-gradient-to-r from-electric-blue to-cyan-accent hover:from-cyan-accent hover:to-electric-blue text-navy-dark font-semibold px-8 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow shadow-electric-blue/30 text-lg flex items-center justify-center"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Schedule Free Assessment</span>
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 via-white/20 to-electric-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white mb-2">Schedule Free Security Assessment</DialogTitle>
                    <p className="text-gray-300 text-sm mb-6">
                      Fill out the form below and our security experts will contact you to schedule a free, no-obligation security assessment.
                    </p>
                  </DialogHeader>
                  <SecurityAssessmentForm onSuccess={closeAssessmentModal} onCancel={closeAssessmentModal} />
                </DialogContent>
              </Dialog>
              
              <a 
                href="tel:+15557328731" 
                className="btn-secondary text-lg px-8 py-5 group flex items-center hover:text-electric-blue transition-colors"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>(555) SECURE-1</span>
              </a>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-primary/50 backdrop-blur-sm border border-steel-grey/20 rounded-2xl p-6 hover-lift">
              <Phone className="h-8 w-8 text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Emergency Hotline</h3>
              <p className="text-steel-grey mb-4">24/7 rapid response</p>
              <a href="tel:+15557372873" className="text-electric-blue font-semibold hover:text-white transition-colors">
                (555) SECURE-3
              </a>
            </div>

            <div className="bg-navy-primary/50 backdrop-blur-sm border border-steel-grey/20 rounded-2xl p-6 hover-lift">
              <Mail className="h-8 w-8 text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Secure Email</h3>
              <p className="text-steel-grey mb-4">Encrypted communications</p>
              <a href="mailto:contact@sentinelsecure.com" className="text-electric-blue font-semibold hover:text-white transition-colors">
                contact@sentinelsecure.com
              </a>
            </div>

            <div className="bg-navy-primary/50 backdrop-blur-sm border border-steel-grey/20 rounded-2xl p-6 hover-lift">
              <Clock className="h-8 w-8 text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-steel-grey mb-4">Average response</p>
              <div className="text-electric-blue font-semibold">
                &lt; 15 minutes
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-16 bg-navy-primary/30 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-electric-blue" />
              <h3 className="text-2xl font-bold text-white">Sentinel Secure Guarantee</h3>
            </div>
            <p className="text-steel-grey leading-relaxed">
              We're so confident in our security solutions that we offer a 30-day satisfaction guarantee. 
              If our services don't exceed your expectations, we'll refund your investment in full.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
