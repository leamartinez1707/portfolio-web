import { useState } from 'react';
import { LandingFooter } from "./newLanding/LandingFooter";
import { LandingMainContent } from "./newLanding/LandingMainContent";
import { LandingTopNav } from "./newLanding/LandingTopNav";
import LandingHome from "./newLanding/LandingHome";
import LandingSelectedWork from "./newLanding/LandingSelectedWork";
import LandingContact from "./newLanding/LandingContact";
import LandingBuildings from "./newLanding/LandingBuildings";
import { useLandingGsap } from "../hooks/useLandingGsap";
import PageLoader from "./PageLoader";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";

export const NewLanding = () => {
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
        {/* <LandingBuildings /> */}
        <LandingSelectedWork />
        <LandingMainContent />
        <LandingContact />
        <LandingFooter />
      </div>
    </>
  );
};

export default NewLanding;
