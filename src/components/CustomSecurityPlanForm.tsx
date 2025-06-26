import { useState } from 'react';
import { Shield, Lock, Loader2 } from 'lucide-react';

interface CustomSecurityPlanFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function CustomSecurityPlanForm({ onSuccess, onCancel }: CustomSecurityPlanFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    employees: '',
    securityNeeds: [] as string[],
    budget: '',
    timeline: '',
    additionalInfo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const securityOptions = [
    'Physical Security',
    'Cybersecurity',
    'Surveillance Systems',
    'Access Control',
    'Alarm Systems',
    'Security Personnel',
    'Risk Assessment',
    'Emergency Response',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          securityNeeds: [...prev.securityNeeds, value]
        };
      } else {
        return {
          ...prev,
          securityNeeds: prev.securityNeeds.filter(item => item !== value)
        };
      }
    });
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
          <Lock className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-gray-300 mb-6">
          Thank you for your interest in our custom security solutions. 
          Our security experts will review your requirements and contact you within 24 hours to discuss your customized security plan.
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
              Contact Name *
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
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
              Company/Organization *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-1">
              Industry *
            </label>
            <select
              id="industry"
              name="industry"
              required
              value={formData.industry}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            >
              <option value="">Select industry</option>
              <option value="retail">Retail</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="technology">Technology</option>
              <option value="hospitality">Hospitality</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-300 mb-1">
              Number of Employees *
            </label>
            <select
              id="employees"
              name="employees"
              required
              value={formData.employees}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            >
              <option value="">Select range</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
          </div>
        </div>

        <div>
          <p className="block text-sm font-medium text-gray-300 mb-2">
            Security Needs (Select all that apply) *
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {securityOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  id={`security-${option.toLowerCase().replace(/\s+/g, '-')}`}
                  name="securityNeeds"
                  type="checkbox"
                  value={option}
                  checked={formData.securityNeeds.includes(option)}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 rounded border-gray-700 bg-navy-darker text-cyan-500 focus:ring-cyan-500"
                />
                <label
                  htmlFor={`security-${option.toLowerCase().replace(/\s+/g, '-')}`}
                  className="ml-2 text-sm text-gray-300"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
              Estimated Budget *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-50k">$15,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
              Project Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            >
              <option value="">Select timeline</option>
              <option value="immediately">Immediately</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6-12months">6-12 months</option>
              <option value="planning">Just planning/exploring</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-1">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full rounded-md border-gray-700 bg-navy-darker text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5"
            placeholder="Please provide any additional details about your security needs, current security measures, or specific concerns..."
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
            'Request Custom Plan'
          )}
        </button>
      </div>
    </form>
  );
}
