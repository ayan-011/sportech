import Nav from "./components/Nav"  
import Tagline from "./pages/tagline"
import Work from "./pages/Work"
import Owner from "./pages/owner.jsx"
import CarScroll from "./pages/CarsSroll"   
import { VideoText } from "./components/ui/video-text"  
import ContactUs from "./pages/Contact"  
import Footer from "./pages/Footer" 
import FirstPage from "./pages/FirstPage"
 
 

 
 


const App = () => {


 

  return (
    <div className="h-[400 w-full bg-black  ">
     <Nav/>
     <div className="gap md:h-12 h-20"></div>

      <FirstPage/>

      <Tagline />
      <Owner />
      <Work />
      <CarScroll /> 
      
     
          <div className="border-b-[1px] border-zinc-800 relative lg:h-[400px] md:h[400px] h-[200px] w-full overflow-hidden ">
             
          <VideoText src="/carvideo.mp4" className="tracking-tighter"> DRIFT CARS</VideoText>
        </div>

       


  
<div className="w-full flex justify-center items-center  p-2 bg-black">

       <ContactUs/> 
</div>

<Footer/>
  

 

      
    </div>
  )
}

export default App
