import React from "react";

function Footer() {
  return (
    <div className='flex sm:flex-row flex-col px-2 xsm:px-0  justify-between border-t pt-6 footer'>
      <div className='zuri sm:my-0 my-1'>
        <img src='images/zuri.svg' alt='zuri_logo' />
      </div>
      <div className='sm:my-0 my-1'>
        <span className='font-[400] sm:text-base text-sm text-[#667085]'>
          HNG Internship 9 Frontend Task
        </span>
      </div>
      <div className='sm:my-0 my-1'>
        <img src='images/I4G.svg' alt='I4G_logo' />
      </div>
    </div>
  );
}

export default Footer;
