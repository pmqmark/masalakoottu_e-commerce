// import React from 'react'

// const TopBanner = ({ image, title, smallhead }) => {
//     return (
//       <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] md:w-[400px] overflow-hidden">
//         {/* Banner Image */}
//         <div className="absolute inset-0">
//           <img
//             src={image}
//             alt="Banner"
//             className="lg:w-full lg:h-full md:w-auto md:h-auto w-full h-full object-contain lg:object-cover"
//           />
          
//         </div>
  
//         {/* Heading */}
//         <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
//             <h1 className='text-white text-xl md:text-xl lg:text-2xl font-bold text-center drop-shadow-lg'>{smallhead}</h1>
//           <h1 className="text-white text-2xl md:text-2xl lg:text-5xl font-bold text-center drop-shadow-lg">
//             {title}
//           </h1>
//         </div>
  
//         {/* Cloud Effect */}
//         <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-white to-transparent" />
//       </div>
//     );
//   };
// export default TopBanner

import React from "react";

const TopBanner = ({ image, title, smallhead }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Banner"
          className="w-full h-full object-cover  lg:object-cover"
        />
      </div>

      {/* Heading */}
      <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center px-4 text-center">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold drop-shadow-lg">
          {smallhead}
        </h1>
        <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
          {title}
        </h1>
      </div>

      {/* Cloud Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default TopBanner;
