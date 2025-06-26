
import { useState } from 'react';
import { Building2, Home, Calendar, Briefcase, Shield, Star, Camera, Eye, MessageCircle } from 'lucide-react';
import { IndustryModal } from './IndustryModal';
import { ContactForm } from './ContactForm';

const IndustriesSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openIndustryModal = (index: number) => setSelectedIndustry(index);
  const closeIndustryModal = () => setSelectedIndustry(null);
  
  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);
  const industries = [
    {
      icon: Building2,
      title: 'Corporate',
      description: 'Fortune 500 companies trust our advanced CCTV systems and cybersecurity solutions for comprehensive protection.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      stats: '500+ Corporations Protected',
      color: 'electric-blue'
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Ultra-high-net-worth individuals rely on our smart security systems with facial recognition and mobile alerts.',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      stats: '1000+ Homes Secured',
      color: 'green-secure'
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'From intimate gatherings to major conferences, our mobile surveillance units ensure complete event security.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
      stats: '2500+ Events Secured',
      color: 'cyan-accent'
    },
    {
      icon: Briefcase,
      title: 'Government',
      description: 'Classified facilities protected with military-grade surveillance systems and biometric access controls.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
      stats: 'Top Secret Clearance',
      color: 'security-red'
    }
  ];

  return (
    <section id="industries" className="section-padding bg-charcoal">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-security/10 border border-cyan-accent/20 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6">
            <Star className="h-4 w-4 md:h-5 md:w-5 text-gold-premium" />
            <span className="text-gold-premium font-semibold text-sm md:text-base">Trusted by Industry Leaders</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
            INDUSTRIES <span className="text-transparent bg-gradient-to-r from-cyan-accent to-electric-blue bg-clip-text">WE SERVE</span>
          </h2>
          
          <p className="text-lg md:text-xl text-steel-grey leading-relaxed px-4">
            From corporate headquarters to private residences, our CCTV surveillance and security systems protect what matters most.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-2xl shadow-security hover-lift bg-navy-primary min-h-[400px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={`${industry.title} security solutions`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy-dark/70 group-hover:bg-navy-dark/60 transition-colors duration-300"></div>
              </div>

              {/* Security Overlay Elements */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                <Camera className={`h-6 w-6 text-${industry.color}`} />
              </div>
              <div className="absolute bottom-4 left-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                <Eye className={`h-5 w-5 text-${industry.color}`} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-${industry.color}/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${industry.color}/30 transition-colors duration-300`}>
                    <industry.icon className={`h-7 w-7 md:h-8 md:w-8 text-${industry.color}`} />
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-${industry.color} transition-colors duration-300`}>
                    {industry.title}
                  </h3>

                  <p className="text-steel-grey leading-relaxed mb-6 text-sm md:text-base">
                    {industry.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className={`flex items-center space-x-2 text-${industry.color} font-semibold`}>
                    <Shield className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base">{industry.stats}</span>
                  </div>

                  <button 
                    onClick={() => openIndustryModal(index)}
                    className={`text-white hover:text-${industry.color} transition-colors duration-300 font-semibold text-sm md:text-base flex items-center`}
                  >
                    Learn More
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Technology Showcase */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-navy-primary/50 to-charcoal/50 backdrop-blur-sm border border-electric-blue/20 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Advanced Security <span className="text-electric-blue">Technology</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-electric-blue/10 rounded-xl p-6">
                  <Camera className="h-8 w-8 text-electric-blue mb-3" />
                  <h4 className="font-bold text-white mb-2">Smart CCTV</h4>
                  <p className="text-steel-grey text-sm">AI-powered cameras with facial recognition and behavior analysis</p>
                </div>
                <div className="bg-green-secure/10 rounded-xl p-6">
                  <Eye className="h-8 w-8 text-green-secure mb-3" />
                  <h4 className="font-bold text-white mb-2">24/7 Monitoring</h4>
                  <p className="text-steel-grey text-sm">Round-the-clock surveillance with instant alert systems</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=600&q=80"
                alt="Security monitoring station"
                className="rounded-2xl w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-navy-primary/50 backdrop-blur-sm border border-steel-grey/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-steel-grey mb-6 text-sm md:text-base">
              We provide customized CCTV and security solutions for any sector. Contact us to discuss your unique requirements.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={openContactForm}
                className="btn-secondary group inline-flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Discuss Your Needs</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Modals */}
      {industries.map((industry, index) => (
        <IndustryModal
          key={industry.title}
          isOpen={selectedIndustry === index}
          onClose={closeIndustryModal}
          industry={{
            ...industry,
            features: [
              '24/7 Monitoring',
              'Real-time Alerts',
              'Cloud Storage',
              'Mobile Access',
              'AI-Powered Analytics'
            ],
            solutions: [
              'Custom Security Assessment',
              'Tailored Security Plan',
              'Professional Installation',
              'Ongoing Support',
              'Regular System Audits'
            ]
          }}
        />
      ))}

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={closeContactForm}
      />
    </section>
  );
};

export default IndustriesSection;
