import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const contactDetails = [
  {
    label: "Email",
    value: "aboubakar.arisarsahab@gmail.com",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='#22c55e'
        className='w-7 h-7'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Sukkur IBA University",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='#22c55e'
        className='w-7 h-7'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+92348-3624912",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='#22c55e'
        className='w-7 h-7'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
        />
      </svg>
    ),
  },
];

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-black min-h-screen w-full flex flex-col justify-between'>
        <div className='flex flex-col items-center pt-10 pb-4'>
          <button
            onClick={() => navigate("/")}
            className='px-4 py-2 text-white rounded bg-green-500 hover:bg-green-600 transition font-semibold flex items-center gap-2 shadow-lg'
          >
            {" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='20'
              height='20'
              viewBox='0 0 50 50'
              stroke='currentColor'
              fill='currentColor'
              className='group-hover:text-green-500 transition-colors duration-300'
            >
              <path d='M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z'></path>
            </svg>
            Home
          </button>
        </div>
        <div className='flex flex-col items-center justify-center px-4'>
          <div className='w-full max-w-3xl bg-[#1f1e26] rounded-2xl shadow-2xl p-8 mb-8'>
            <h1 className='text-4xl font-bold text-white mb-2 text-center'>
              Get in Touch
            </h1>
            <p className='text-[#8B8A91] text-center mb-8'>
              I would love to hear from you. Feel free to reach out!
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {contactDetails.map((item, idx) => (
                <div
                  key={idx}
                  className='flex flex-col items-center bg-zinc-800/60 rounded-xl p-6 hover:shadow-lg transition-all duration-300'
                >
                  <span className='mb-3'>{item.icon}</span>
                  <h2 className='text-lg font-semibold text-white mb-1'>
                    {item.label}
                  </h2>
                  <p className='text-[#8B8A91] text-center break-all'>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center px-4 pb-10'>
          <div className='w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl'>
            <iframe
              className='w-full h-64 md:h-96'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56511.832009074824!2d68.833654!3d27.71761045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4e60abe0af7%3A0xcd579d655a1c3ad4!2sSukkur%2C%20Sindh!5e0!3m2!1sen!2s!4v1706111666923!5m2!1sen!2s'
              style={{ border: "0" }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Sukkur IBA University Map'
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
