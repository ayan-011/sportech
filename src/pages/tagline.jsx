import { WordRotate } from '@/components/ui/word-rotate'
import React from 'react'

const Tagline = () => {
  return (
      <section id='about' className="tagline w-full h-  bg-red- flex flex-col items-center lg:gap-4 md:gap-4  ">
            <span className="lg:text-3xl md:text-2xl text-[12px] font-bold tracking-tight  text-white md:mt-7 mt-4 flex   items-center md:gap-2 gap-[2px] select-none"> WE BUILD <WordRotate words={["DIFFERENT", "BEST", "PERFECT"]} /> !</span>

            <p className="w-full text-zinc-300 lg:py-9 md:py-9 py-4 lg:w-1/2 lg:px-0 md:px-40 px-5 lg:text-base md:text-[15px]  text-[9px] md:text-base ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi doloribus non quisquam pariatur eius neque cumque laboriosam sunt eos error dolor quasi illum repellendus nesciunt accusamus distinctio, ipsam sapiente veritatis.
            
            Lorem ipsum dolor sit amet ,<br />
            <br />
             consectetur adipisicing elit. Quia accusantium nihil magni eveniet earum dolores quidem, odit, eum optio, amet aut impedit ratione dolorem maxime voluptate quo aspernatur assumenda doloremque. Itaque sunt dolore illum ratione veritatis quas molestiae atque! Vero fugit expedita illum ipsa repellat aperiam, earum dicta nostrum perferendis?
            </p>
        </section>
  )
}

export default Tagline 