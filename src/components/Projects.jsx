function Projects() {
  const projects = [
    {
      id: 1,
      name: "Task Management",
      description:
        "A collaborative task manager built for teams who need to stay on the same page. Team members can create, assign, edit and complete tasks in real time, making it easy to track who's handling what across the whole team.",
      tags: ["React", "API", "Tailwind CSS", "React Router"],
      links: ["https://todo-app-pink-two-35.vercel.app/", "https://github.com/tamara-tgod/todo-app"],
    },
    // {
    //   id: 2,
    //   name: "Blog Site",
    //   description:
    //     "A clean, fast-loading personal blog where readers can browse posts, navigate seamlessly between pages, and always land on a helpful page, even if a link doesn't exist.",
    //   tags: ["React", "React Router", "CSS"],
    //   links: ["https://blog-app-bice-delta-28.vercel.app/", "https://github.com/tamara-tgod/blog-app"],
    // },
    {
      id: 2,
      name: "Github Explorer",
      description:
        "A search tool that lets you look up any GitHub user by username and instantly see their profile, activity stats, and top repositories — great for developers researching collaborators or open source projects.",
      tags: ["React","TypeScript", "API", "Tailwind CSS"],
      links: ["https://github-explorer-ten-mocha.vercel.app", "https://github.com/Tamara-tgod/github-explorer.git"],
    },
    {
      id: 3,
      name: "Portfolio Website",
      description:
        "MA personal portfolio designed to showcase my projects and skills in a clean, responsive layout with smooth animations, built to work beautifully on any screen size.",
      tags: ["React", "Tailwind CSS"],
      links: ["https://tamara-portfolio-v2.vercel.app/", "https://github.com/tamara-tgod/Portfolio_V2"],
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

      <div className="flex flex-col gap-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white py-4 px-4 md:py-8 md:px-8 rounded-3xl  ${colors[index].hover}`}
          >
            <section className="flex flex-col justify-between gap-4  md:flex-row md:justify-between md:items-center py-4 px-4 mx-4 ">

              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 min-w-0 ">
                <span
                  className={`${colors[index].base} ${colors[index].text} p-3 w-14 rounded-xl font-sketch project-num`}
                >{`0${project.id}`}</span>

                <div className="flex flex-col gap-3 min-w-0 overflow-hidden">
                  <p className="text-xl font-semibold project-desciption">
                    {project.name}
                  </p>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
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
                  className="bg-dark-navy text-white border px-4 py-2 rounded-2xl "
                  href={project.links[0]}
                >
                  Live↗
                </a>
                <a
                  className="border px-4 py-2 rounded-2xl "
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
