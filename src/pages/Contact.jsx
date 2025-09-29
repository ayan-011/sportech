 
import React from "react"

const ContactUs = () => {
  return (
     

    <section id='contact' className="w-full min-h-[20vh]  bg-black text-white flex flex-col items-center justify-center px-4 py-10 ">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8  ">
        Contact us!
      </h2>

      {/* Contact Form */}
      <form className="w-full max-w-2xl flex flex-col gap-6">
        {/* Row 1 - Name + Email */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white focus:outline-none focus:border-white transition duration-300"
          />
          <input
            type="email"
            placeholder="Email *"
            className="flex-1 rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white focus:outline-none focus:border-white transition duration-300"
          />
        </div>

        {/* Phone Number */}
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white focus:outline-none focus:border-white transition duration-300"
        />

        {/* Comment */}
        <textarea
          rows="4"
          placeholder="Comment"
          className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white focus:outline-none focus:border-white transition duration-300"
        ></textarea>

        {/* Button */}
        <button 
          className="w-full md:w-40 bg-  md:hover:bg-zinc-100 md:hover:text-black md:border-[1px] md:border-zinc-100 md:text-white font-medium py-3 rounded-md transition duration-100 cursor-pointer text-black bg-zinc-200 md:bg-transparent"
        >
          Send
        </button>
      </form>
    </section>

      
  )
}

export default ContactUs
