function Contact() {
  const connections = [
    {
      id: 1,
      name: "Email",
      link: "mailto:thankgoditemearau@gmail.com",
      icon: "✉️",
    },
    {
      id: 2,
      name: "Github",
      link: "https://github.com/Tamara-tgod", 
      icon: "🐙",
    },
    // {
    //   id: 3,
    //   name: "LinkedIn",
    //   link: "https://linkedin.com/in/tamara-tgod",
    //   icon: "🔗",
    // },
    {
      id: 4,
      name: "Twitter/X",
      link: "https://x.com/Tamma_alt",
      icon: "🐦",
    },
    {
      id: 5,
      name: "Resume",
      link: "https://drive.google.com/file/d/1ewkixPsZE3HaG0s5kSaBrKVav7bdPZrz/view?usp=drive_link",
      icon: "📄",
    },
  ];
  return (
    <section
      id="contact"
      className="py-12 px-12 bg-contact-gradient text-center flex flex-col gap-3"
    >
      <div>
        <p className="font-sketch text-yellow-300 -rotate-2 ">
          ~don't be a stranger~
        </p>
        <h2 className="font-fraunces text-white text-5xl my-5">
          Let's build <br />
          something <em className="text-red-400">great </em>
          <br />
          together.
        </h2>
      </div>
      <p className="text-gray-400">
        I'm open to <span className="font-medium">frontend roles</span>,
        freelance projects, and collaborations. Whether you have a project idea
        or just want to connect — my inbox is always open
      </p>

      <div className="block w-56 max-w-sm bg-red-400 my-4 mx-auto text-white py-3 px-4 rounded-full shadow-[4px_4px_0_rgba(255,107,107,0.3)]">
        <a href="mailto:thankgoditemearau@gmail.com">Send me a message ✉️</a>
      </div>

      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {connections.map((connection) => (
          <a
            key={connection.id}
            href={connection.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100/10 text-gray-300 font-semibold border px-4 py-1 rounded-3xl hover:bg-red-400 hover:text-white transition"
          >
            {connection.icon}
            {connection.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
