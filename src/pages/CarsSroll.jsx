import React from "react";

const sections = [
  {
    title: "Maruti",
    description: "We provide complete engine diagnostics and repair services.",
    image: "/maruti2.jpg",
    line: " ",
    backgroundImage: "/maruti2.jpg",
  },
  {
    title: "Swift",
    description: "Get your car a fresh look with our premium painting service.",
    image: "/swift2.jpg",
    line: " ",
    backgroundImage: "/swiftbg.png",
  },
  
];

const CarScroll = () => {
  return (
    <div className="bg-black">
    
 <div className="work underline text-zinc-500  lg:px-28 md:px-5 px-2 mb-3 text-lg font-semibold py-5  bg-black">Customs</div>
    
    <div className="w-full flex flex-col items-center justify-between gap-20  py-12 bg-black">
      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0; // reverse layout for even sections
        return (
          <>
           
          <div
            key={index}
            className={`flex lg:px-28  flex-col md:flex-row lg:items-center md:items-center justify-center  bg-red-9 lg:gap-32 md:gap-7 gap-4 md:p-4 p-2 ${
              isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1  bg-green-9 ">
              <h2 className="lg:text-3xl md:text-2xl text-xl md:font-bold font-semibold mb-2 md:mb-4 lg:mb-4 text-white">{section.title}</h2>
              <p className="text-gray-600 lg:text-lg text-base md:tracking-normal tracking-tight">{section.description}</p>
            </div>

            {/* Image Section */}
            <div className="flex-1   justify-end flex ">
              <img
                src={section.image}
                alt={section.title}
                className=" rounded pointer-events-none select-none "
              />
            </div>

          </div>
         

          <div
        className="lg:h-[60vh] md:h-[20vh] h-[30vh] object-cover  flex items-center w-full justify-center text-white text-4xl font-bold opacity-30 "
        style={{
          backgroundImage: `url(${section.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {section.line}
      </div>
          </>
            
        );
      })}
    </div>

    </div>
  );
};

export default CarScroll;
