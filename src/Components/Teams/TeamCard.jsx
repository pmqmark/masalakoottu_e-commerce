import React from "react";

const TeamCard = ({ name, title, image, bgColor }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-xs">
      {/* Profile Image with Right Leaf */}
      <div className="relative w-[275px] h-[275px] flex items-center justify-center rounded-full border-8 border-green-600 bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
        
        {/* Right Leaf */}
        <div className="absolute top-0 right-0 w-12 h-12">
          <img src="/assets/icons/leaf.png" alt="Leaf Right" />
        </div>
      </div>
      
      {/* Name and Role */}
      <div className={`w-full py-4 px-6 text-center text-white ${bgColor} mt-4 rounded-lg`}>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm">{title}</p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="text-white text-lg"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white text-lg"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white text-lg"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    { name: "Kevin Martin", title: "Senior Farmer", image: "/placeholder.png", bgColor: "bg-orange-600" },
    { name: "Aleesha Brown", title: "Senior Farmer", image: "/placeholder.png", bgColor: "bg-green-900" },
    { name: "Mike Hardson", title: "Senior Farmer", image: "/placeholder.png", bgColor: "bg-green-800" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamSection;
