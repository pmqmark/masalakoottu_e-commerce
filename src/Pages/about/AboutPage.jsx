import React from "react";
import TopBanner from "../../Components/common/TopBanner";
import AboutSection from "../../Components/about/AboutSection";
import grapesbanner from "../../assets/common/grapesbanner.jpg";
import StatsSection from "../../Components/Home/StatsSection";
import TeamSection from "../../Components/Teams/TeamCard";

const AboutPage = () => {
  return (
    <div>
     <TopBanner
  title="About"
  smallhead="Home / About"
  image={grapesbanner}
  className="relative -z-10 "
/>

      <AboutSection />
      <StatsSection />
      <div className="mt-4"> <TeamSection /></div>
     
    </div>
  );
};

export default AboutPage;
