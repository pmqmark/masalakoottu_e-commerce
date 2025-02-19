import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import FeaturesSection from "./Components/FeaturesSection"; // Import FeaturesSection
import ProductGrid from "./Components/ProductGrid";
import WhyChoose from "./Components/WhyChoose";
import StatsSection from "./Components/StatsSection";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar />
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
    <div>
      <Testimonials/>
    </div>
    <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
