
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Security Standards', href: '#standards' },
    { name: 'Compliance', href: '#compliance' },
  ];

  return (
    <footer className="bg-navy-dark border-t border-steel-grey/20">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-electric-blue rounded-lg">
                  <Shield className="h-8 w-8 text-navy-dark" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Sentinel</h1>
                  <p className="text-sm text-steel-grey -mt-1">SECURE</p>
                </div>
              </div>
              
              <p className="text-steel-grey mb-6 leading-relaxed max-w-md">
                Elite physical and digital security services for discerning clients who demand 
                absolute protection and uncompromising reliability.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-steel-grey">
                  <Phone className="h-5 w-5 text-electric-blue" />
                  <span>(555) SECURE-1</span>
                </div>
                <div className="flex items-center space-x-3 text-steel-grey">
                  <Mail className="h-5 w-5 text-electric-blue" />
                  <span>contact@sentinelsecure.com</span>
                </div>
                <div className="flex items-center space-x-3 text-steel-grey">
                  <MapPin className="h-5 w-5 text-electric-blue" />
                  <span>Global Headquarters, Security Plaza</span>
                </div>
                <div className="flex items-center space-x-3 text-steel-grey">
                  <Clock className="h-5 w-5 text-electric-blue" />
                  <span>24/7 Emergency Response</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-steel-grey hover:text-electric-blue transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Legal & Compliance</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-steel-grey hover:text-electric-blue transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-steel-grey/20">
            <div className="text-center mb-8">
              <h4 className="text-white font-bold text-lg mb-4">Licensed & Certified</h4>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                <div className="bg-navy-primary/30 rounded-lg p-3">
                  <div className="text-electric-blue font-bold text-sm">ISO 27001</div>
                  <div className="text-xs text-steel-grey">Certified</div>
                </div>
                <div className="bg-navy-primary/30 rounded-lg p-3">
                  <div className="text-electric-blue font-bold text-sm">SOC 2</div>
                  <div className="text-xs text-steel-grey">Type II</div>
                </div>
                <div className="bg-navy-primary/30 rounded-lg p-3">
                  <div className="text-electric-blue font-bold text-sm">ASIS</div>
                  <div className="text-xs text-steel-grey">Certified</div>
                </div>
                <div className="bg-navy-primary/30 rounded-lg p-3">
                  <div className="text-electric-blue font-bold text-sm">Licensed</div>
                  <div className="text-xs text-steel-grey">All States</div>
                </div>
                <div className="bg-navy-primary/30 rounded-lg p-3">
                  <div className="text-electric-blue font-bold text-sm">Insured</div>
                  <div className="text-xs text-steel-grey">$50M</div>
                </div>
                <div className="bg-navy-primary/30 rounded-lg p-3">
                  <div className="text-electric-blue font-bold text-sm">Bonded</div>
                  <div className="text-xs text-steel-grey">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-charcoal border-t border-steel-grey/20 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-steel-grey text-sm">
              © 2025 Em@webzone
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-steel-grey text-sm">Emergency Hotline:</span>
              <a
                href="tel:+15557372873"
                className="text-electric-blue font-semibold hover:text-white transition-colors"
              >
                (555) SECURE-3
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
