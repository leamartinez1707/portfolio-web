import { useState } from 'react';
import { LandingFooter } from "../components/landing/LandingFooter";
import { LandingMainContent } from "../components/landing/LandingMainContent";
import { LandingTopNav } from "../components/landing/LandingTopNav";
import LandingHome from "../components/landing/LandingHome";
import LandingSelectedWork from "../components/landing/LandingSelectedWork";
import LandingContact from "../components/landing/LandingContact";
import LandingBuildings from "../components/landing/LandingBuildings";
import { useLandingGsap } from "../hooks/useLandingGsap";
import PageLoader from "../components/PageLoader";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";

export const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);
  const scope = useLandingGsap(loaded);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      <div ref={scope} className="relative overflow-x-hidden portfolio-atmosphere editorial-texture">
        <LandingTopNav />
        <LandingHome />
        <LandingBuildings />
        <LandingSelectedWork />
        <LandingMainContent />
        <LandingContact />
        <LandingFooter />
      </div>
    </>
  );
};

export default LandingPage;
