function Projects() {
  const projects = [
    {
      id: 1,
      name: "Task Management",
      description:
        "A simple task management app built with React and Tailwind CSS. It allows users to create, edit and delete tasks, as well as mark them as completed. The App uses an API to persist data from other users/collegues. ",
      tags: ["React", "API", "Tailwind CSS", "React Router"],
      links: ["https://todo-app-pink-two-35.vercel.app/", "https://github.com/tamara-tgod/todo-app"],
    },
    {
      id: 2,
      name: "Blog Site",
      description:
        "A personal blog site built with React, React Router and plain CSS. It features a clean spa design, responsive layout and error boundary handling and error pages for inexistent routes.",
      tags: ["React", "React Router", "CSS"],
      links: ["https://blog-app-bice-delta-28.vercel.app/", "https://github.com/tamara-tgod/blog-app"],
    },
    // {
    //   id: 3,
    //   name: "Link Shortener",
    //   description:
    //     "A short, punchy description of what this does and the problem it solves. Keep it to two sentences max.",
    //   tags: ["React", "CSS", "APIs"],
    //   links: ["live.demo.com", "https://github.com/tamara-tgod/scissors-landing-page"],
    // },
    {
      id: 3,
      name: "Portfolio Website",
      description:
        "My personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills. It features a clean design, responsive layout and smooth animations.",
      tags: ["React", "Tailwind CSS"],
      links: ["live.demo.com", "https://github.com/tamara-tgod/Portfolio_V2"],
    },
  ];

  const colors = [
    {
      id: 1,
      hover: "hover:border-red-400 border-2 hover:shadow-red",
      base: "bg-red-400/40",
      text: "text-red-400",
    },
    {
      id: 2,
      hover: "hover:border-green-400 border-2 hover:shadow-green",
      base: "bg-green-400/40",
      text: "text-green-400",
    },
    {
      id: 3,
      hover: "hover:border-purple-400 border-2 hover:shadow-purple",
      base: "bg-purple-400/40",
      text: "text-purple-400",
    },
    {
      id: 4,
      hover: "hover:border-orange-400 border-2 hover:shadow-orange",
      base: "bg-orange-400/40",
      text: "text-orange-400",
    },
    {
      id: 5,
      hover: "hover:border-blue-400 border-2 hover:shadow-blue",
      base: "bg-blue-400/40",
      text: "text-blue-400",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-cream py-5 px-12 flex flex-col font-cabin"
    >
      <div
        id="projects-header"
        className="flex py-4 justify-between align-middle"
      >
        <div>
          <p className="font-sketch text-red-400 ">things I've built</p>
          <h2 className="font-fraunces text-2xl md:text-4xl">
            Selected Projects <span>✦</span>
          </h2>
        </div>
        <a
          href="https://github.com/Tamara-tgod"
          className="underline decoration-dashed text-red-400 font-sketch text-xl leading-10"
        >
          view all on Github
          <span>→</span>
        </a>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white py-4 px-4 md:py-8 md:px-8 rounded-3xl ${colors[index].hover}`}
          >
            <section className="flex flex-col justify-between gap-4  md:flex-row md:justify-between md:items-center py-4 px-4 mx-4">

              <div className="flex justify-between items-center gap-6">
                <span
                  className={`${colors[index].base} ${colors[index].text} p-3 w-14 rounded-xl font-sketch project-num`}
                >{`0${project.id}`}</span>

                <div className="flex flex-col gap-3">
                  <p className="text-xl font-semibold project-desciption">
                    {project.name}
                  </p>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex gap-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-cream border border-slate-200 py-1 px-3 rounded-2xl text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="links flex md:flex-col gap-3 font-cabin ">
                <a
                  className="bg-dark-navy text-white border px-4 py-1 rounded-2xl "
                  href={project.links[0]}
                >
                  Live↗
                </a>
                <a
                  className="border px-4 py-1 rounded-2xl "
                  href={project.links[1]}
                >
                  Github
                </a>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
