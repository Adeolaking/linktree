import React from "react";
import linkData from "../linksData";
import { Link } from "react-router-dom";
function LinkTree() {
  return (
    <div className='main flex flex-col justify-center items-center md:pb-32 sm:pb-24 pb-20'>
      <div className=' relative py-5  w-full'>
        <div className='profile flex flex-col justify-center items-center'>
          <div className=' relative w-[88px] h-[88px]'>
            <img
              src='images/adeolaking.jpg'
              alt='profile_pic'
              id='profile__img'
              width='100%'
              className='block rounded-[50%] mb-4 w-full h-full hover:bg-blend-overlay'
            />
            <div className='rounded-[50%] w-full flex flex-col justify-end items-center h-full bg-[#34405475] transition-opacity absolute top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100'>
              <img src='/cam.svg' alt='' className='mb-1' />
            </div>
          </div>

          <span
            id='twitter'
            className='xsm:text-[20px] text-lg font-bold leading-8'
          >
           Adeolaking
          </span>
          <span id='slack' className='hidden'>
            Abdurahmon Adeolaking
          </span>
        </div>

        <div className='share absolute top-0 sm:right-[10%] md:right-[20%] sm:block hidden'>
          <img
            title='Share Link'
            src='images/share.svg'
            alt='share_icon'
            className='p-[10px] border-[2px] border-dotted border-gray-300 rounded-[50%] hover:bg-[#F9FAFB]'
          />
        </div>
        <div className='share absolute top-0 right-[2%] sm:hidden block'>
          <img
            title='Share Link'
            src='images/dots.svg'
            alt='share_mobile'
            className='p-[10px] border-[2px] border-dotted border-gray-300 rounded-[50%] hover:bg-[#F9FAFB]'
          />
        </div>
      </div>
      <div className='links md:px-16 sm:px-12 xsm:px-2 px-2 w-full mt-5'>
        {linkData.map((link) => (
          <a
            href={link.linkTo}
            id={link.id}
            className='block w-full text-center text-[#101828] font-medium sm:text-lg xsm:text-base text-sm py-[20px] mb-5 bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg border-1 border-[ #EAECF0]'
            title={link.title}
          >
            {link.name}
          </a>
        ))}
       <Link to="/contact"  className='block w-full text-center text-[#101828] font-medium sm:text-lg xsm:text-base text-sm py-[20px] mb-5 bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg border-1 border-[ #EAECF0]' id="contact">Contact</Link>
      </div>

      <div className='social flex mt-4 px-4'>
        <a href='/' className='mx-2'>
          <img src='images/slack.svg' alt='slack_icon' />
        </a>
        <a href='https://www.github.com/adeolaking'  className='mx-2'>
          <img src='images/git.svg' alt='github_icon' />
        </a>
      </div>
    </div>
  );
}

export default LinkTree;
