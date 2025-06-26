import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import SecurityShowcase from '@/components/SecurityShowcase';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SecurityShowcase />
      <IndustriesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
