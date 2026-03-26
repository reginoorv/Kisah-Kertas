import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import ProductsSection from '../components/ProductsSection';
import CompareSection from '../components/CompareSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ProductsSection />
      <CompareSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </main>
  );
}
