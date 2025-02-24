import React from "react";
import TopBanner from "../../Components/common/TopBanner";
import grapesbanner from "../../assets/common/grapesbanner.jpg";

import TeamSection from "../../Components/Teams/TeamCard";

const TeamPage = () => {
  return (
    <div>
      <TopBanner title="Team" smallhead="Home / Team" image={grapesbanner} />
      <h2 className="text-2xl font-semibold text-gray-800 text-center mt-6">
        Our Location
      </h2>
      <div className="space-y-8 pb-8"> 
        <TeamSection />
        <TeamSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default TeamPage;
