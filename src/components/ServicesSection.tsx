
import { useState } from 'react';
import { Shield, Eye, Users, Lock, Zap, Monitor, Camera, Smartphone } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/modal';
import { CustomSecurityPlanForm } from './CustomSecurityPlanForm';

const ServicesSection = () => {
  const [isCustomPlanOpen, setIsCustomPlanOpen] = useState(false);
  
  const openCustomPlanModal = () => setIsCustomPlanOpen(true);
  const closeCustomPlanModal = () => setIsCustomPlanOpen(false);
  const services = [
    {
      icon: Camera,
      title: 'CCTV Surveillance',
      description: 'State-of-the-art security camera systems with 4K resolution, night vision, and AI-powered motion detection for complete property monitoring.',
      features: ['4K HD Cameras', 'Night Vision', 'AI Motion Detection', 'Remote Access'],
      color: 'cyan-accent',
      bgColor: 'bg-cyan-accent/10'
    },
    {
      icon: Eye,
      title: 'Advanced Monitoring',
      description: 'Real-time surveillance operations with facial recognition, perimeter detection, and instant alert systems for proactive security.',
      features: ['Facial Recognition', 'Perimeter Alerts', 'Live Monitoring', 'Instant Notifications'],
      color: 'electric-blue',
      bgColor: 'bg-electric-blue/10'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Enterprise-grade digital protection including network security, data encryption, and threat intelligence services.',
      features: ['Network Security', 'Data Encryption', 'Threat Intelligence', 'Compliance Audits'],
      color: 'purple-tech',
      bgColor: 'bg-purple-tech/10'
    },
    {
      icon: Users,
      title: 'Executive Protection',
      description: 'Elite personal security services for high-profile individuals, including risk assessment and close protection.',
      features: ['Risk Assessment', 'Close Protection', 'Secure Transport', 'Event Security'],
      color: 'security-red',
      bgColor: 'bg-security-red/10'
    },
    {
      icon: Smartphone,
      title: 'Mobile Security',
      description: 'Advanced mobile surveillance solutions with smartphone integration, GPS tracking, and remote monitoring capabilities.',
      features: ['Mobile Integration', 'GPS Tracking', 'Remote Control', 'Cloud Storage'],
      color: 'green-secure',
      bgColor: 'bg-green-secure/10'
    },
    {
      icon: Monitor,
      title: 'Control Centers',
      description: 'Centralized security command centers with multi-screen displays, communication systems, and emergency response protocols.',
      features: ['Multi-Screen Setup', 'Communication Hub', 'Emergency Protocols', 'Data Analytics'],
      color: 'orange-warning',
      bgColor: 'bg-orange-warning/10'
    }
  ];

  return (
    <section id="services" className="section-padding bg-navy-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
            SECURITY <span className="text-transparent bg-gradient-to-r from-electric-blue to-cyan-accent bg-clip-text">SERVICES</span>
          </h2>
          <p className="text-lg md:text-xl text-steel-grey leading-relaxed px-4">
            Comprehensive protection solutions with cutting-edge CCTV technology and AI-powered security systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group ${service.bgColor} backdrop-blur-sm border border-steel-grey/20 rounded-2xl p-6 md:p-8 hover-lift hover:border-${service.color}/50 transition-all duration-300 hover:shadow-glow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className={`h-7 w-7 md:h-8 md:w-8 text-${service.color}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-${service.color} transition-colors duration-300`}>
                {service.title}
              </h3>
              
              <p className="text-steel-grey mb-6 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-steel-grey">
                    <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <div className="pt-4 border-t border-steel-grey/20">
                <a 
                  href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-${service.color} font-semibold hover:text-white transition-colors duration-300 group text-sm md:text-base inline-flex items-center`}
                >
                  Learn More
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CCTV Features Section */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-navy-primary/50 to-charcoal/50 backdrop-blur-sm border border-cyan-accent/20 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Advanced CCTV <span className="text-cyan-accent">Technology</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-accent/20 rounded-full flex items-center justify-center">
                    <Camera className="h-6 w-6 text-cyan-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">4K Ultra HD Recording</h4>
                    <p className="text-steel-grey text-sm">Crystal clear footage day and night</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-secure/20 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-green-secure" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">AI-Powered Analytics</h4>
                    <p className="text-steel-grey text-sm">Smart detection and alerts</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Mobile Integration</h4>
                    <p className="text-steel-grey text-sm">Monitor from anywhere, anytime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                alt="Security control room with multiple CCTV monitors"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Dialog open={isCustomPlanOpen} onOpenChange={setIsCustomPlanOpen}>
            <DialogTrigger asChild>
              <button 
                onClick={openCustomPlanModal}
                className="btn-primary group flex items-center mx-auto"
              >
                <Shield className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>Request Custom Security Plan</span>
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
