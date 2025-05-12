import React from "react";

const Skills = () => {
  const colors = [
    "border-yellow-500",
    "border-blue-500",
    "border-green-500",
    "border-red-500",
    "border-purple-500",
  ];
  const skills = [
    {
      title: "Front-End",
      tech: ["HTML", "CSS", "Tailwind css", "React Js", "TypeScript"],
    },
    {
      title: "Back-End",
      tech: ["Express Js", "Node Js", "Version Control", "API", "Go Lang"],
    },
    {
      title: "Database",
      tech: ["Mongo DB", "My SQL", "Sqlite", "Postgres"],
    },

    {
      title: "Programming Languages",
      tech: ["Java", "C++", "JavaScript", "Python", "Rust", "Dart", "Go Lang"],
    },
  ];
  return (
    <>
      <div className='xsm:w-[100vw] xsm:p-5 md:w-[80vw]'>
        <h2 className='text-3xl font-semibold text-zinc-100 mb-6 pb-2'>
          Skills
        </h2>
        <div className=' text-[#8B8A91]'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='p-4 bg-[#1f1e26] rounded shadow-2xl hover:scale-105 duration-300'
              >
                <h3 className='font-bold mb-2'>{skill.title}</h3>
                <div className='flex flex-wrap'>
                  {skill.tech.map((tech, i) => {
                    const randomColorClass =
                      colors[Math.floor(Math.random() * colors.length)];
                    return (
                      <span
                        key={i}
                        className={`${randomColorClass} m-1 p-1 border-2 border-opacity-50 shadow-lg rounded`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
