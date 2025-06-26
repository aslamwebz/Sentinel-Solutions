import { Dialog, DialogContent } from '@/components/ui/modal';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[90vw] max-w-[95vw] max-h-[90vh] p-0 bg-transparent border-0 shadow-none">
        <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 z-10 text-white hover:text-gray-300 transition-colors"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>
          
          <iframe
            src={videoUrl}
            title={title}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
