import React from "react";
import { Github, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
    <footer className="bg-[#1f1e26] ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Aboubakar</h3>
            <p className="text-[#8B8A91] max-w-xs">
              A passionate MERN Stack Developer focused on creating full stack web applications.
            </p>
          </div>

       

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} hover:scale-110 transition-transform duration-300`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8">
      
            <p className="text-[#8B8A91] text-center font-bold">
              © {currentYear} Aboubakar. All rights reserved.
            </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
