// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 flex-col gap-4">
        <img src="/Loading.gif" alt="" className='md:w-30 w-24' />
         <span className="md:text-base text-sm text-zinc-400">Loading...</span>
    </div>
  );
};

export default Loader;
