import React from "react";

const MapComponent = () => {
  return (
    <div className="w-full flex justify-center my-6">
      <div className="w-full max-w-4xl h-[450px] shadow-lg rounded-lg overflow-hidden">
        <iframe
          className="w-[2100PX] h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4614424759397!2d76.58470547368483!3d9.978688573403842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ddb0d9ac167f%3A0xc113309bce524657!2sMasalakoottu%20Home%20Made%20Food%20Store!5e0!3m2!1sen!2sin!4v1740130100118!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
