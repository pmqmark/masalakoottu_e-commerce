import React from "react";
import TopBanner from "../../Components/common/TopBanner";
import grapesbanner from "../../assets/common/grapesbanner.jpg";
import MapComponent from "../../Components/Contacts/MapComponent";
import ContactInfo from "../../Components/Contacts/ContactInfo";
import ContactForm from "../../Components/Contacts/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <TopBanner title="Contact" smallhead="Home / Contact" image={grapesbanner} />
      <h2 className="text-2xl font-semibold text-gray-800 text-center mt-6">Our Location</h2>
      <MapComponent />
      <ContactInfo />
      <ContactForm />
    </div>
   
  );
};

export default ContactPage;
