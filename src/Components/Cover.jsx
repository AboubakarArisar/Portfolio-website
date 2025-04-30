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
                  <h1 className='font-bold text-white text-2xl'>Abou Bakar</h1>
                  <span className='text-white font-normal'>
                    MERN Stack Developer
                  </span>
                </div>
                <div className='w-full flex xsm:flex-col md:flex-row justify-center items-center'>
                  <a
                    href='https://github.com/AboubakarArisar'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-[max-content] flex justify-center items-center font-semibold  gap-2 py-3 px-2 bg-[#2d2d30] rounded text-[#8B8A91]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'
                      fill='none'
                      stroke='currentColor'
                    >
                      <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
                    </svg>
                    Follow me on Github
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
