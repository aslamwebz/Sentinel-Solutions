
import { Award, Clock, Shield, Users, Zap, Globe } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Decades of proven expertise in high-stakes security operations worldwide.',
      color: 'text-electric-blue'
    },
    {
      icon: Shield,
      title: '99.9% Success Rate',
      description: 'Unparalleled track record in threat prevention and incident resolution.',
      color: 'text-security-red'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock vigilance with rapid response capabilities anywhere, anytime.',
      color: 'text-electric-blue'
    },
    {
      icon: Users,
      title: 'Elite Personnel',
      description: 'Former military, law enforcement, and intelligence professionals at your service.',
      color: 'text-security-red'
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge security systems and AI-powered threat detection capabilities.',
      color: 'text-electric-blue'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International security services with local expertise in over 50 countries.',
      color: 'text-security-red'
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-navy-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            WHY CHOOSE <span className="text-electric-blue">SENTINEL SOLUTIONS</span>
          </h2>
          <p className="text-xl text-steel-grey leading-relaxed">
            When failure is not an option, industry leaders choose us for our uncompromising standards and proven results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Circle */}
              <div className="mx-auto mb-6 w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-security">
                <reason.icon className={`h-10 w-10 ${reason.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-steel-grey leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-navy-primary/30 backdrop-blur-sm border border-steel-grey/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-electric-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                2500+
              </div>
              <div className="text-steel-grey font-semibold">Clients Protected</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-security-red mb-2 group-hover:scale-110 transition-transform duration-300">
                50
              </div>
              <div className="text-steel-grey font-semibold">Countries Served</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-electric-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-steel-grey font-semibold">Response Time</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-security-red mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-steel-grey font-semibold">Confidentiality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
