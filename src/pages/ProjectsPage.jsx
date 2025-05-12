import React from "react";
import { Eye, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ProjectsPage = () => {
  const projects = [
    {
      name: "NoteSwap",
      description: "A full-stack note-taking application with real-time collaboration features. Users can create, edit, and share notes with others. The app includes features like rich text editing, file attachments, and real-time updates.",
      technologies: [
        "React", "Express.js", "MongoDB", "Node.js", "Axios", "Cloudinary", "Multer"
      ],
      live: "https://noteswap-sigma.vercel.app/",
      code: "https://github.com/AboubakarArisar/NoteSwap-Frontend",
      image: "/pindari.png",
    },
    {
      name: "Projects-and-payments",
      description: "A comprehensive project management and payment tracking system. It helps teams manage their projects, track payments, and maintain client relationships. Features include project status tracking, payment history, and client management.",
      technologies: [
        "React.js", "React Hook Form", "Redux", "Express.js", "MongoDB", "Tailwind CSS"
      ],
      live: "https://projects-and-payments.vercel.app/",
      code: "https://github.com/AboubakarArisar/Pindari-Coders-Website",
      image: "/project.jpg",
    },
    {
      name: "Chatty App",
      description: "A real-time chat application that allows users to communicate instantly. Features include private messaging, group chats, and message history. The app uses WebSocket for real-time communication.",
      technologies: [
        "Node.js", "Express", "Socket.io", "Tailwind CSS"
      ],
      live: "https://github.com/AboubakarArisar/chatty-app",
      code: "https://github.com/AboubakarArisar/chatty-app",
      image: "/chatty.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <div className="w-full md:w-[80vw] mx-auto px-4 py-10">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-zinc-100">My Projects</h1>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                      >
                        <Eye size={24} />
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors duration-300"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-zinc-100">{project.name}</h2>
                    <p className="text-zinc-400 leading-relaxed">{project.description}</p>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-3">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage; 