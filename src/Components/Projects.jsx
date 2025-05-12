import React from "react";
import { Eye, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      name: "NoteSwap",
      technologies:
        "React, Express js, Mongo DB, Nodejs, Axios, Cloudinary, Multer",
      live: "https://noteswap-sigma.vercel.app/",
      code: "https://github.com/AboubakarArisar/NoteSwap-Frontend",
      image: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_630,w_1200/v1464051370/zewn7jsdcyy5apqndiac.jpg",
    },
    {
      name: "Projects-and-payments",
      technologies:
        "React js, React Hook Form, Redux, Express js, Mongo db,  Tailwind CSS",
      live: "https://projects-and-payments.vercel.app/",
      code: "https://github.com/AboubakarArisar/Pindari-Coders-Website",
      image: "/project.jpg",
    },
    {
      name: "Droplr",
      technologies: "NodeJs, Express, React-js, Geolocation, MongoDb, Cloudinary, Tailwind CSS",
      live: "https://droplr-front.vercel.app/",
      code: "https://github.com/AboubakarArisar/Droplr",
      image: "https://www.cleo.com/sites/default/files/secure-file-sharing.jpg",
    },
  ];

  return (
    <div className='w-full md:w-[80vw] mx-auto px-4 py-10'>
      <div className="flex justify-between items-center mb-6">
        <h2 className='text-3xl font-semibold text-zinc-100 pb-2'>
          Projects
        </h2>
      
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col border border-white/20'
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.name}
                className='w-full aspect-video object-cover transition duration-300 group-hover:scale-105'
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition'
                >
                  <Eye size={20} />
                </a>
                <a
                  href={project.code}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-900 transition'
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            <div className='p-6 flex flex-col justify-between h-[150px]'>
              <div>
                <h3 className='text-xl font-semibold text-zinc-100'>
                  {project.name}
                </h3>
                <p className='text-sm text-zinc-400 mt-2'>
                  {project.technologies}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
