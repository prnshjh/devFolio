
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

import AboutMeSection from '@/components/AboutMeSection';
import EducationSection from '@/components/EducationSection';
import CodingStatsSection from '@/components/CodingStatsSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      
      <Navigation />
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <CodingStatsSection />
    </div>
  );
};

export default Index;
