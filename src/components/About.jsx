import avatar from "../assets/images/avatar.jpeg";
function About() {
  const chips = [
    "🔥consistency",
    "⚡Learning daily",
    "✨ Loves a good UI",
    "💡Problem solver",
    "🌍 Based in Nigeria",
  ];

  const chipColors = [
    "bg-red-400/40 text-red-400",
    "bg-yellow-400/40 text-yellow-400",
    "bg-orange-400/40 text-orange-400",
    "bg-blue-400/40 text-blue-400",
    "bg-green-400/40 text-green-400",
  ];

  return (
    <div id="about" className="bg-dark-navy px-12 py-5 text-gray-200 md:grid items-center grid-cols-2 gap-6">
      <div id="avatar-wrap" className="relative">
        <div
          id="avatar"
          className="w-full aspect-[4/5] bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] border border-white/10 flex items-center justify-center relative overflow-hidden animate-morphBlob"
        >
          <img
            className="w-full"
            src={avatar}
            alt="Tamara"
          />
        </div>
        {/* <div className="bg-yellow-300 absolute right-[10px] bottom-[10px] w-32 py-1 px-4 border-none rounded-lg font-sketch rotate-12">
            <span>🎓</span>
            AltSchool Africa
        </div> */}
      </div>

      <div className="font-cabin text-gray-300">
        <span className="text-green-400 text-sm font-sketch">
          ~ a little about me ~
        </span>
        <h2 className="text-3xl font-fraunces md:text-4xl lg:text-5xl">
          I'm a<em className="text-purple-600 font-fraunces "> curious </em>
          <br />
          frontend engineer.
        </h2>
        <p className="my-2">
         I'm a frontend developer who enjoys turning ideas into functional, engaging web experiences. I like figuring out how things work, experimenting with new approaches, and building projects that solve actual problems.
        </p>
        <p className="my-2">
          I'm particular about the details, from a hover state that feels just right to a layout that works across screen sizes. I value clean, readable code and believe the best interfaces are not just good-looking but intuitive and enjoyable to use.
        </p>

        <div className="flex flex-wrap gap-2">
          {chips.map((chip, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${chipColors[index % chipColors.length]}`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
