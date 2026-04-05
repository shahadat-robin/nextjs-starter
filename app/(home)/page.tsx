import type { NextPage } from 'next';
import AnotherSection from './sub-components/another-section';
import HeroSection from './sub-components/hero-section';

const HomePage: NextPage = () => (
  <>
    <HeroSection />
    <AnotherSection />
  </>
);

export default HomePage;
