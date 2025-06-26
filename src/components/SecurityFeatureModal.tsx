import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/modal';

interface SecurityFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    description: string;
    image: string;
    color: string;
    features?: string[];
  };
}

export const SecurityFeatureModal = ({
  isOpen,
  onClose,
  feature,
}: SecurityFeatureModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            {feature.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden h-64 md:h-80">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/30 to-transparent"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              {feature.description}
            </p>
            
            {feature.features && feature.features.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Key Features:</h4>
                <ul className="space-y-2">
                  {feature.features.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-${feature.color} mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="pt-4">
              <button
                onClick={onClose}
                className={`bg-${feature.color} hover:bg-${feature.color}/90 text-navy-dark font-semibold px-6 py-3 rounded-lg transition-all duration-300`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SecurityFeatureModal;
