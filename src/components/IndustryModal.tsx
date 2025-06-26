import { X, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/modal';

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry: {
    title: string;
    description: string;
    image: string;
    color: string;
    stats: string;
    icon: React.ComponentType<any>;
    features?: string[];
    solutions?: string[];
  };
}

export const IndustryModal = ({
  isOpen,
  onClose,
  industry,
}: IndustryModalProps) => {
  const defaultFeatures = [
    '24/7 Monitoring',
    'Real-time Alerts',
    'Cloud Storage',
    'Mobile Access',
    'AI-Powered Analytics'
  ];

  const defaultSolutions = [
    'Custom Security Assessment',
    'Tailored Security Plan',
    'Professional Installation',
    'Ongoing Support',
    'Regular System Audits'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-${industry.color}/20`}>
              <industry.icon className={`h-6 w-6 text-${industry.color}`} />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              {industry.title} Security Solutions
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden h-64">
            <img
              src={industry.image}
              alt={industry.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="font-medium">{industry.stats}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                {industry.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Key Features:</h4>
                <ul className="space-y-2">
                  {(industry.features || defaultFeatures).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-${industry.color} mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Our Solutions:</h4>
                <ul className="space-y-2">
                  {(industry.solutions || defaultSolutions).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-cyan-accent mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                onClick={onClose}
                className={`bg-${industry.color} hover:bg-${industry.color}/90 text-navy-dark font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto`}
              >
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IndustryModal;
