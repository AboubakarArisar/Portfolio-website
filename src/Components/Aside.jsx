import React from "react";
import { Link } from "react-router-dom";
import { Home, Github, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Aside = () => {
  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/AboubakarArisar",
      icon: <Github size={20} />,
      color: "text-[#2a9d8f]"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aboubakar-arisar-825412264",
      icon: <Linkedin size={20} />,
      color: "text-[#0277b5]"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aboubakarisar05/",
      icon: <Instagram size={20} />,
      color: "text-[#b5179e]"
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@pindaricoders",
      icon: <Youtube size={20} />,
      color: "text-[#e63946]"
    }
  ];

  return (
    <aside className='w-[250px] xsm:hidden lg:block h-screen sticky top-24 mx-5 mb-8 mt-5'>
      <div className='bg-[#1f1e26] rounded-xl shadow-2xl p-6 flex flex-col gap-8'>

        <div className='flex flex-col items-center'>
          <Link
            className='w-full text-[#8B8A91] bg-zinc-700/50 rounded-lg p-4 flex items-center gap-3 hover:bg-zinc-700/50 transition-all duration-300 group'
            to='/'
          >
            <Home size={20} className="group-hover:text-green-500 transition-colors duration-300" />
            <span className="font-medium">Home</span>
          </Link>
        </div>


        <div className='flex flex-col items-center'>
          <Link
            className='w-full text-[#8B8A91] bg-zinc-700/50 rounded-lg p-4 flex items-center gap-3 hover:bg-zinc-700/50 transition-all duration-300 group'
            to='/contact'
          >
            <Mail size={20} className="group-hover:text-green-500 transition-colors duration-300" />
            <span className="font-medium">Contact</span>
          </Link>
        </div>


        <div className='flex flex-col gap-4'>
          <h2 className='text-[#8B8A91] font-semibold text-center'>Connect With Me</h2>
          <div className='flex flex-col gap-3'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full text-[#8B8A91] bg-zinc-700/50 rounded-lg p-4 flex items-center gap-3 hover:bg-zinc-700/50 transition-all duration-300 group'
              >
                <span className={`${link.color} group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </span>
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

  
        <div className='bg-zinc-700/50 rounded-lg p-4'>
          <h3 className='text-[#8B8A91] font-semibold mb-3'>Quick Stats</h3>
          <div className='space-y-2'>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-[#8B8A91]'>Projects</span>
              <span className='text-green-500 font-semibold'>15+</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-[#8B8A91]'>Experience</span>
              <span className='text-green-500 font-semibold'>2+ Years</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-[#8B8A91]'>Skills</span>
              <span className='text-green-500 font-semibold'>10+</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
