import React from "react";

const Cover = () => {
  return (
    <>
      <div className='xsm:w-[100vw] md:w-[80vw] flex justify-center items-center xsm:px-3 md:pr-5'>
        <div className='relative xsm:w-[100vw] md:w-[80vw] mt-5'>
          <div className="absolute inset-0 rounded-lg bg-[url('/cover.jpeg')] bg-no-repeat bg-cover blur-sm"></div>
          <div className='relative flex rounded-lg justify-center items-center gap-2 p-5'>
            <div className='flex xsm:flex-col md:flex-row justify-center items-center w-full p-5 content gap-2'>
              <div className="rounded-full bg-[url('/abfinalpic.png')] bg-cover w-[120px] h-[120px] border-2 border-yellow-500 select-none">
                <img
                  src='/abfinalpic.png'
                  className='w-full h-full rounded-full'
                  alt='My Picture'
                />
              </div>
              <div className='flex-grow flex xsm:flex-col md:flex-row justify-center items-center'>
                <div className='flex flex-col w-1/2 justify-center md:mx-20 select-none'>
                  <h1 className='font-bold text-white text-2xl'>
                    Aboubakar Arisar
                  </h1>
                  <span className='text-white font-normal'>
                    MERN Stack Developer
                  </span>
                </div>
                <div className='w-full flex xsm:flex-col md:flex-row justify-center items-center'>
                  <a
                    href='https://www.instagram.com/aboubakarisar05/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-[max-content] flex gap-2 py-3 px-2 bg-[#2d2d30] rounded text-[#8B8A91]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-home'
                    >
                      <rect
                        width='20'
                        height='20'
                        x='2'
                        y='2'
                        rx='5'
                        ry='5'
                      ></rect>
                      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5'></line>
                    </svg>
                    Follow me on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cover;
