function Projects() {
  const projects = [
    {
      id: 1,
      name: "Task Management",
      description:
        "A short, punchy description of what this does and the problem it solves. Keep it to two sentences max.",
      tags: ["React", "JavaScipt"],
      links: ["live.demo.com", "github.com"],
    },
    {
      id: 2,
      name: "Blog Site",
      description:
        "A short, punchy description of what this does and the problem it solves. Keep it to two sentences max.",
      tags: ["HTML", "JavaScipt"],
      links: ["live.demo.com", "github.com"],
    },
    {
      id: 3,
      name: "Link Shortener",
      description:
        "A short, punchy description of what this does and the problem it solves. Keep it to two sentences max.",
      tags: ["React", "APIs"],
      links: ["live.demo.com", "github.com"],
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
    <div id="projects" className="bg-slate-50 py-5 px-12 flex flex-col font-cabin">
      <div
        id="projects-header"
        className="flex py-4 justify-between align-middle"
      >
        <div>
          <p className="font-sketch text-red-400 ">things I've built</p>
          <h2 className="font-fraunces text-2xl">
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

      <div id="project-cards" className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`py-4 px-4 rounded-3xl ${colors[index].hover}`}
          >
            <section className="flex justify-between items-center gap-4">
              <div
                id="project-num"
                className={`${colors[index].base} ${colors[index].text} p-3 w-14 rounded-xl font-sketch `}
              >
                <span>{`0${project.id}`}</span>
              </div>

              <div id="project-desciption" className="flex flex-col gap-3">
                <p className="text-xl font-semibold">{project.name}</p>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-gray-600 rounded-2xl px-2 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
            <div id="links" className="flex gap-3 pt-3 mt-6 font-cabin">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
