// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <img src="/Loading.gif" alt="" className='w-32' />
    </div>
  );
};

export default Loader;
