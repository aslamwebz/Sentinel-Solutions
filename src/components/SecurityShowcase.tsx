
import { useState } from 'react';
import { Camera, Shield, Eye, Smartphone, Monitor, Lock } from 'lucide-react';
import { SecurityFeatureModal } from './SecurityFeatureModal';

const SecurityShowcase = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const openFeatureModal = (index: number) => setSelectedFeature(index);
  const closeFeatureModal = () => setSelectedFeature(null);
  const securityFeatures = [
    {
      icon: Camera,
      title: 'HD CCTV Systems',
      description: '4K resolution cameras with night vision and weatherproof housing for all-weather monitoring.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
      color: 'cyan-accent'
    },
    {
      icon: Eye,
      title: 'Facial Recognition',
      description: 'Advanced AI-powered facial recognition technology for enhanced access control and threat detection.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      color: 'electric-blue'
    },
    {
      icon: Monitor,
      title: 'Control Centers',
      description: 'State-of-the-art monitoring stations with multiple displays and real-time alert systems.',
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=600&q=80',
      color: 'green-secure'
    }
  ];

  return (
    <section className="section-padding bg-navy-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
            SECURITY <span className="text-transparent bg-gradient-to-r from-cyan-accent to-electric-blue bg-clip-text">SHOWCASE</span>
          </h2>
          <p className="text-lg md:text-xl text-steel-grey leading-relaxed px-4">
            Experience our cutting-edge security technology in action with real-world implementations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12 md:space-y-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`w-16 h-16 bg-${feature.color}/20 rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 text-${feature.color}`}>
                  {feature.title}
                </h3>
                <p className="text-steel-grey text-base md:text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                <button 
                  onClick={() => openFeatureModal(index)}
                  className={`bg-${feature.color} hover:bg-${feature.color}/80 text-navy-dark font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Learn More
                </button>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent rounded-2xl"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 bg-${feature.color}/20 backdrop-blur-sm rounded-full flex items-center justify-center`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stats */}
        <div className="mt-16 md:mt-20 bg-charcoal/50 backdrop-blur-sm border border-electric-blue/20 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Our Technology <span className="text-electric-blue">By The Numbers</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-cyan-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-steel-grey font-semibold text-sm md:text-base">CCTV Cameras Installed</div>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-green-secure mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-steel-grey font-semibold text-sm md:text-base">System Uptime</div>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-electric-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-steel-grey font-semibold text-sm md:text-base">Monitoring Coverage</div>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-security-red mb-2 group-hover:scale-110 transition-transform duration-300">
                &lt;2s
              </div>
              <div className="text-steel-grey font-semibold text-sm md:text-base">Alert Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Modals */}
      {securityFeatures.map((feature, index) => (
        <SecurityFeatureModal
          key={feature.title}
          isOpen={selectedFeature === index}
          onClose={closeFeatureModal}
          feature={{
            ...feature,
            features: [
              '24/7 Monitoring',
              'Real-time Alerts',
              'Cloud Storage',
              'Mobile Access',
              'AI-Powered Analytics'
            ]
          }}
        />
      ))}
    </section>
  );
};

export default SecurityShowcase;
