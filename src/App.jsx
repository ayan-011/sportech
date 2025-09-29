import Nav from "./components/Nav"  
import Tagline from "./pages/tagline"
import Work from "./pages/Work"
import Owner from "./pages/owner.jsx"
import CarScroll from "./pages/CarsSroll"   
import { VideoText } from "./components/ui/video-text"  
import ContactUs from "./pages/Contact"  
import Footer from "./pages/Footer" 
import FirstPage from "./pages/FirstPage" 
 
 import React, { useState, useEffect } from "react";
import Loader from "./pages/Loader"
import { Marquee } from "./components/ui/marquee"

 
 


const App = () => {
  const [loading, setLoading] = useState(true);

  // List all images and videos that need to be preloaded
  const assets = [
    "/sportech.png",
    "/img1.png",
    // "/images/car3.jpg",
    // "/carvideo.mp4",
  ];

  useEffect(() => {
    let loadedCount = 0;

    assets.forEach((src) => {
      if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = src;
        video.onloadeddata = () => {
          loadedCount += 1;
          if (loadedCount === assets.length) setLoading(false);
        };
        video.onerror = () => {
          loadedCount += 1;
          if (loadedCount === assets.length) setLoading(false);
        };
      } else {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount += 1;
          if (loadedCount === assets.length) setLoading(false);
        };
        img.onerror = () => {
          loadedCount += 1;
          if (loadedCount === assets.length) setLoading(false);
        };
      }
    });
  }, []);

  if (loading) return <Loader />; // Show loader until all assets are loaded

  return (
    <div className="h-[400px] w-full bg-black">
      <Nav />
      <div className="gap md:h-12 h-20"></div>

      <FirstPage />
      <Tagline />
      <Owner />
      <Work />
      <CarScroll />

       <div className="md:h-[200px] sm:h-[150px]  h-[100px] flex w-full bg-black items-center justify-center  opacity-70">
      <Marquee>
            <img src="bmwe90.2.jpg" alt="" className="md:w-64 md:h-40 sm:w-52 sm:h-32 w-40 h-24"/> 
            <img src="merc.jpg" alt="" className="md:w-64 md:h-40 sm:w-52 sm:h-32 w-40 h-24"/>  
            <img src="/drift/drift1.jpeg" alt="" className="md:w-72 md:h-40 sm:w-56 sm:h-32 w-40 h-24"/> 
            <img src="/drift/drift2.jpg" alt="" className="md:w-72 md:h-40 sm:w-52 sm:h-32 w-40 h-24"/> 
            <img src="/drift/drift3.jpeg" alt="" className="md:w-72 md:h-40 sm:w-52 sm:h-32 w-40 h-24"/> 
            <img src="/drift/drift4.jpeg" alt="" className="md:w-64 md:h-40 sm:w-52 sm:h-32 w-40 h-24"/> 
            <img src="/drift/drift5.jpg" alt="" className="md:w-72 md:h-40 sm:w-52 sm:h-32 w-40 h-24"/> 
            <img src="/drift/drift6.jpg" alt="" className="md:w-72 md:h-40 sm:w-56 sm:h-32 w-44 h-24"/> 
            <img src="/drift/drift7.png" alt="" className="md:w-72 md:h-40 sm:w-56 sm:h-32 w-44 h-24"/> 
      </Marquee> 
      </div>

      <div className="border-b-[1px] bg-black border-zinc-800 relative lg:h-[400px] md:h-[400px] h-[200px] w-full overflow-hidden">
        <VideoText src="/carvideo.mp4" className="tracking-tighter">
          DRIFT CARS
        </VideoText>
      </div>

      <div className="w-full flex justify-center items-center p-2 bg-black">
        <ContactUs />
      </div>

      <Footer />
     
    </div>
  );
};

export default App;