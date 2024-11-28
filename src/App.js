import React, { Suspense, useState } from 'react';
import FAQSection from './components/FAQ/FAQSection';
import PricingSection from './components/Pricing/Pricing';
import Hero from './components/Hero/Hero';

// Lazy-loaded components
const Features = React.lazy(() => import('ambel_home/Features'));
const Navigation = React.lazy(() => import('ambel_home/Navigation'));
const Footer = React.lazy(() => import('ambel_home/Footer'));
export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);
  const customLinks = [
    { text: "Home", link: "http://localhost:3000", hasDropdown: false },
    { text: "Features", link: "http://localhost:3001/#features", hasDropdown: true },
    { text: "Solutions", link: "/solutions", hasDropdown: true },
    { text: "Resources", link: "/resources", hasDropdown: true },
    { text: "Find Professionals", link: "/professionals", hasDropdown: false },
    { text: "Help", link: "/help", hasDropdown: true },
  ];
  return (
    <div>
      {/* hero */}
      <Suspense fallback={<div>Loading Features...</div>}>
        {Navigation ? <Navigation
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          closeDrawer={closeDrawer}
          links={customLinks} /> : <div>Navigation module not available</div>}
      </Suspense>
      <Hero />

      <div className='relative bottom-[50px]'>
        <Suspense fallback={<div>Loading Features...</div>}>
          {Features ? <Features /> : <div>Feature module not available</div>}
        </Suspense>
      </div>

      <FAQSection />
      <Suspense fallback={<div>Loading Features...</div>}>
        {Footer ? <Footer /> : <div>Footer module not available</div>}
      </Suspense>
    </div>
  );
}
