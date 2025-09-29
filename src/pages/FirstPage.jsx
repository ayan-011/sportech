 
import GradientText from '@/components/GradientText'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'
import React from 'react'
  

const FirstPage = () => {
  return (
    <section id='home' className='  bg-black select-none'>
         <div className="w-full h-fit bg-cover bg-black ">
      <img src="sportech.png" alt="" className=" w-full pointer-events-none " />
     </div>
          
          {/* BMW Image */}
        <div className="w-full bg-cover">
           
          <AnimatedGradientText className=" lg:text-4xl md:text-2xl text-[12px] opacity-100 z-10 font-semibold tracking-tighter lg:p-10 md:p-4 p-3 absolute">We build this beast!</AnimatedGradientText>
<GradientText></GradientText>
          
                   
                   
          <img src="img1.png" alt="" className="w-full opacity-30  pointer-events-none" />
        </div>
    </section>
  )
}

export default FirstPage