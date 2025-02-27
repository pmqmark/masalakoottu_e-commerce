import React from "react";
import Banner from "../../Components/Home/Banner";
import FeaturesSection from "../../Components/Home/FeaturesSection"; // Import FeaturesSection
import ProductGrid from "../../Components/Home/ProductGrid";
import WhyChoose from "../../Components/Home/WhyChoose";
import StatsSection from "../../Components/Home/StatsSection";
import Testimonials from "../../Components/Home/Testimonials";
import TeamPage from "../Team/TeamPage";
import TeamSection from "../../Components/Teams/TeamCard";


const Home= () => {
  return (
    <div>
      <Banner />
      <div >
        <FeaturesSection />
      </div>
      <div className="bg-gray-100 min-h-screen">
      <ProductGrid />
    </div>
    <div>
      <WhyChoose/>
    </div>
    <div>
      <StatsSection/>
    </div>
    <div className="mt-10 mb-10"> 
      <TeamSection />
    </div>
    <div>
      <Testimonials/>
    </div>
    
    </div>
  );
}

export default Home;
