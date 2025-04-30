import React from "react";
import { Eye, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "NoteSwap",
      technologies:
        "React, Express js, Mongo DB, Nodejs, Axios, Cloudinary, Multer",
      live: "https://noteswap-sigma.vercel.app/",
      code: "https://github.com/AboubakarArisar/NoteSwap-Frontend",
      image: "/pindari.png",
    },
    {
      name: "Projects-and-payments",
      technologies:
        "React js, React Hook Form, Redux, Express js, Mongo db,  Tailwind CSS",
      live: "https://example.com/projects-and-payments",
      code: "https://github.com/AboubakarArisar/Pindari-Coders-Website",
      image: "/project.jpg",
    },
    {
      name: "Chatty App",
      technologies: "NodeJs, Express, Socket-io, Tailwind CSS",
      live: "https://example.com/chatty-app",
      code: "https://github.com/AboubakarArisar/chatty-app",
      image: "/chatty.jpg",
    },
  ];

  return (
    <div className='w-full md:w-[80vw] mx-auto px-4 py-10'>
      <h2 className='text-3xl font-semibold text-zinc-100 mb-6 pb-2'>
        Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col'
          >
            <img
              src={project.image}
              alt={project.name}
              className='w-full aspect-video object-cover'
            />
            <div className='p-4 flex flex-col justify-between h-[150px]'>
              <div>
                <h3 className='text-lg font-semibold text-zinc-800'>
                  {project.name}
                </h3>
                <p className='text-sm text-zinc-600 mt-1'>
                  {project.technologies}
                </p>
              </div>
              <div className='flex gap-4 justify-between items-center'>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition'
                >
                  <Eye size={18} />
                </a>
                <a
                  href={project.code}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-900 transition'
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
