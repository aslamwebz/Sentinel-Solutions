
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Michael Richardson',
      title: 'CEO, Richardson Industries',
      company: 'Fortune 500 Manufacturing',
      content: 'Sentinel Secure transformed our security posture completely. Their proactive approach and cutting-edge technology prevented three potential breaches in our first year alone. Absolutely worth every investment.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      company: 'Global Tech Solutions',
      content: 'The cybersecurity audit they conducted revealed vulnerabilities we never knew existed. Their team worked around the clock to implement solutions without disrupting our operations. True professionals.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Robert Hamilton',
      title: 'Private Client',
      company: 'High-Net-Worth Individual',
      content: 'When you value your family\'s safety above all else, you need the best. Sentinel Secure provides peace of mind that money can\'t buy. Their discretion and professionalism are unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-charcoal">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            CLIENT <span className="text-electric-blue">TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-steel-grey leading-relaxed">
            Don't just take our word for it. Here's what our clients say about our security services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-navy-primary/50 backdrop-blur-sm border border-steel-grey/20 rounded-2xl p-8 hover-lift relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-electric-blue/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-electric-blue fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-steel-grey mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-electric-blue/20"
                />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-electric-blue">{testimonial.title}</div>
                  <div className="text-xs text-steel-grey">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-navy-primary/30 backdrop-blur-sm border border-steel-grey/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Trusted & Certified</h3>
            <p className="text-steel-grey">Our credentials speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div className="group">
              <div className="text-electric-blue font-bold text-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                ISO 27001
              </div>
              <div className="text-xs text-steel-grey">Information Security</div>
            </div>
            
            <div className="group">
              <div className="text-electric-blue font-bold text-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                SOC 2 Type II
              </div>
              <div className="text-xs text-steel-grey">Security Controls</div>
            </div>
            
            <div className="group">
              <div className="text-electric-blue font-bold text-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                ASIS Certified
              </div>
              <div className="text-xs text-steel-grey">Security Management</div>
            </div>
            
            <div className="group">
              <div className="text-electric-blue font-bold text-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                DOD Cleared
              </div>
              <div className="text-xs text-steel-grey">Government Contracts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
