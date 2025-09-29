 
import React from "react";

const sections = [
  {
    title: "Engine Repair",
    description: "We provide complete engine diagnostics and repair services.",
    image: "/bmwe90.2.jpg",
  },
  {
    title: "Car Painting",
    description: "Get your car a fresh look with our premium painting service.",
    image: "/merc.jpg",
  },
  
];

const Work = () => {
  return (
    <section  >
    <section id='work' className="work underline text-zinc-500  lg:px-32 md:px-5 px-2 mb-3 text-lg font-semibold">Work</section>
    <div className="w-full flex flex-col items-center justify-between gap-20 lg:px-28  md:py-12 border-b-[1px] border-zinc-800  ">
      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0; // reverse layout for even sections
        return (
           
          
          <div
            key={index}
            className={`flex   flex-col md:flex-row lg:items-center md:items-center justify-center  bg-red-9 lg:gap-32 md:gap-7 gap-4 md:p-4 p-2 ${
              isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1  bg-green-9 ">
              <h2 className="lg:text-3xl md:text-2xl text-xl md:font-bold font-semibold mb-2 md:mb-4 lg:mb-4 text-white">{section.title}</h2>
              <p className="text-gray-600 lg:text-lg text-base md:tracking-normal tracking-tight">{section.description}</p>
            </div>

            {/* Image Section */}
            <div className="flex-1  bg-blue- justify-end flex ">
           

              <img
                src={section.image}
                alt={section.title}
                className=" rounded pointer-events-none select-none "
              />
           
            </div>
          </div>
        );
      })}
    </div>


    </section>

);
};
export default Work;
