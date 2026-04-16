function Skills() {
  const skills = [
    {
      name: "HTML & CSS Layouts",
      icon: "🎨",
      description: "animations & responsive design",
    },
    {
      name: "JavaScript",
      icon: "✨",
      description: "ES6+, DOM, async/await",
    },
     {
      name: "React.js",
      icon: "⚛️",
      description: "Components, hooks & state",
    },
    {
      name: "TypeScript",
      icon: "#️⃣",
      description: "type-safe react applications",
    },
    {
      name: "Git & Github",
      icon: "🔗",
      description: "Version control & collaboration",
    },
    {
      name: "Responsive Design",
      icon: "📱",
      description: "Mobile-first & cross-device",
    },
    {
      name: "UI Thinking",
      icon: "🧩",
      description: "Typography, spacing & visual hierarchy",
    },
  ];

  const colors = [
    "border-red-400 border-2 bg-red-400/15",
    "border-yellow-400 border-2 bg-yellow-400/15",
    "border-orange-400 border-2 bg-orange-400/15",
    "border-blue-400 border-2 bg-blue-400/15",
    "border-green-400 border-2 bg-green-400/15",
    "border-dark-navy border-2 bg-dark-navy/15",
  ];

  return (
    <div id="skills" className="bg-white px-12 py-5">
      <div id="skills-header" className="text-center my-12">
        <p className="font-sketch text-red-400 text-base">What I work with</p>
        <h1 className="text-4xl font-fraunces font-semibold">
          My toolkit<span className="ml-3">✦</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:px-32 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`px-3 py-10 rounded-3xl text-sm border font-medium relative overflow-hidden flex flex-col gap-1 ${colors[index % colors.length]}`}
          >
            <span className="text-2xl ">{skill.icon}</span>
            <h3 className="text-base font-cabin font-extrabold mt-2">
              {skill.name}
            </h3>
            <p className="font-sketch font-light text-gray-500">
              {skill.description}
            </p>
            <span className="absolute bottom-[-30px] right-[-10px] h-20 w-20 -mr-4 bg-custom-opacity rounded-full z-50 "></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
