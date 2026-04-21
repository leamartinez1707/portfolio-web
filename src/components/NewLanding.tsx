import { LandingFooter } from "./newLanding/LandingFooter";
import { LandingMainContent } from "./newLanding/LandingMainContent";
import { LandingTopNav } from "./newLanding/LandingTopNav";
import LandingHome from "./newLanding/LandingHome";
import LandingSelectedWork from "./newLanding/LandingSelectedWork";
import LandingContact from "./newLanding/LandingContact";

export const NewLanding = () => {
  return (
    <>
      <LandingTopNav />
      <LandingHome />
      <LandingSelectedWork />
      <LandingMainContent />
      <LandingContact />
      <LandingFooter />
    </>
  );
};

export default NewLanding;
