import React from 'react'

const Owner = () => {
  return (
    <div className=' w-full md:py-32 lg:py-20 py-10 flex justify-center  '>
        <div className="w-full lg:px-20   md:flex hidden justify-between border-b-[1px] border-zinc-900">
         <div className="w-1/2 bg-red-90 lg:p-9 md:p-6 justify-center lg:gap-5 md:gap-6 flex flex-col text-white">

         <div className='gap-1 flex flex-col '>
           <h1 className='lg:text-3xl md:text-xl font-semibold tracking-tighter '>Harsh Agarwal</h1>
           <p className='text-zinc-400 text-[12px] md:text-[9px] lg:text-[12px]'>owner of sportech</p>
         </div>
           <p className='text-zinc-300 md:text-[12px] lg:text-base  md:tracking-tight lg:tracking-normal  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam similique dolores, atque, perspiciatis nemo nam perferendis corrupti ad corporis neque possimus? Aliquid molestiae earum perspiciatis facilis officia magnam, nulla, quo harum, voluptas ipsam a nemo est reiciendis. Dolores eum rem mollitia ab obcaecati tenetur quibusdam commodi officia optio accusamus?</p>

           <a 
    href="https://www.youtube.com/watch?v=837R6NP__IM" 
    target="_blank" 
    rel="noopener noreferrer"
    className='  w-fit'
  >
           <button className='text-whitehover:text-black hover:bg-white transition-all duration-50 rounded  lg:w-52 md:w-44 p-3 font-semibold border border-white cursor-pointer'>Watch video</button>
           </a>
         </div> 
         <div className="w-1/2 bg- p-6 flex items-center justify-center">
         <img src="harsh.png" alt="" className='rounded pointer-events-none select-none' /></div> 
         </div>




{/* MObile  */}
         <div className="mobile md:hidden lg:hidden text-white   w-full flex flex-col  border-b-[1px] border-zinc-800 py-4 px-2">
            
            <div className="p-3 gap-3 flex flex-col   ">

            <div className=' '>
            <h1 className=''>Harsh Agarwal</h1>
            <h1 className='text-[9px]'>owner of sportech</h1>                
            </div>

            <p className='text-[9px]  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet alias, natus, assumenda laborum minima sint nihil quibusdam, consequatur possimus culpa ex quam soluta dolor fugiat labore totam harum a! Corporis tempora officiis dolorem, dicta eligendi saepe sunt quam quibusdam beatae rerum? Dolore est natus officia, illum sunt rerum suscipit nam.</p>
            </div>

            <img src="harsh.png" alt="" />

           <div className="button w-full flex justify-center">
  <a 
    href="https://www.youtube.com/watch?v=837R6NP__IM" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="bg-white w-40 text-black rounded p-2 mt-4 cursor-pointer">
      Watch video
    </button>
  </a>
</div>



         </div>
    </div>
  )
}

export default Owner