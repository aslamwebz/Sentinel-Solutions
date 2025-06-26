import { useState } from 'react';
import { Shield, Loader2 } from 'lucide-react';

interface SecurityAssessmentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function SecurityAssessmentForm({ onSuccess, onCancel }: SecurityAssessmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    securityConcerns: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
          <Shield className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-gray-300 mb-6">
          Thank you for your interest in our security assessment. 
          Our team will contact you within 24 hours to schedule your free consultation.
        </p>
        <button
          onClick={onCancel}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-cyan-accent px-6 py-3 text-sm font-medium text-navy-dark shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            />
          </div>
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-1">
              Business/Organization Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              required
              value={formData.businessName}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            />
          </div>
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-1">
            Type of Business/Organization *
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            value={formData.businessType}
            onChange={handleChange}
            className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
          >
            <option value="">Select an option</option>
            <option value="retail">Retail</option>
            <option value="office">Office</option>
            <option value="industrial">Industrial</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="hospitality">Hospitality</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="securityConcerns" className="block text-sm font-medium text-gray-300 mb-1">
            Security Concerns or Requirements
          </label>
          <textarea
            id="securityConcerns"
            name="securityConcerns"
            rows={4}
            value={formData.securityConcerns}
            onChange={handleChange}
            className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            placeholder="Please describe your security concerns, areas you'd like us to assess, or specific requirements you have..."
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="rounded-md border border-gray-600 bg-transparent py-2 px-4 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-accent py-2 px-6 text-sm font-medium text-navy-dark shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Request Assessment'
          )}
        </button>
      </div>
    </form>
  );
}
