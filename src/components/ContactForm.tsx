import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/modal';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndustry?: string;
}

export const ContactForm = ({
  isOpen,
  onClose,
  initialIndustry = ''
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: initialIndustry,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          industry: initialIndustry,
          message: '',
        });
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            Discuss Your Security Needs
          </DialogTitle>
          <p className="text-steel-grey text-sm">
            Fill out the form below and our security experts will contact you within 24 hours.
          </p>
        </DialogHeader>
        
        {submitSuccess ? (
          <div className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-secure/20 mb-6">
              <Send className="h-8 w-8 text-green-secure" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
            <p className="text-steel-grey">We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-steel-grey">
                  Full Name <span className="text-security-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-primary border border-steel-grey/20 rounded-lg text-white placeholder-steel-grey/50 focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-steel-grey">
                  Email Address <span className="text-security-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-primary border border-steel-grey/20 rounded-lg text-white placeholder-steel-grey/50 focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-steel-grey">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-primary border border-steel-grey/20 rounded-lg text-white placeholder-steel-grey/50 focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="industry" className="block text-sm font-medium text-steel-grey">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-primary border border-steel-grey/20 rounded-lg text-white placeholder-steel-grey/50 focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue outline-none transition-all appearance-none"
                >
                  <option value="">Select Industry</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Residential">Residential</option>
                  <option value="Events">Events</option>
                  <option value="Government">Government</option>
                  <option value="Retail">Retail</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-steel-grey">
                How can we help you? <span className="text-security-red">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-navy-primary border border-steel-grey/20 rounded-lg text-white placeholder-steel-grey/50 focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue outline-none transition-all resize-none"
                placeholder="Tell us about your security needs..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-electric-blue to-cyan-accent hover:from-cyan-accent hover:to-electric-blue text-navy-dark font-semibold px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-navy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
            
            <p className="text-xs text-steel-grey/70 text-center">
              We respect your privacy. Your information will not be shared with third parties.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
