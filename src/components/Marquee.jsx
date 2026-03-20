function Marquee() {
  return (
    <div className="overflow-hidden bg-dark-navy py-4">
      <div className="animate-marquee font-sketch text-gray-400 text-lg flex gap-3 whitespace-nowrap">
        {/* first copy */}
        <span><span className="text-yellow-300">✦</span> Frontend Engineer</span>
        <span><span className="text-yellow-300">✦</span> HTML & CSS</span>
        <span><span className="text-yellow-300">✦</span> JavaScript</span>
        <span><span className="text-yellow-300">✦</span> React.js</span>
        <span><span className="text-yellow-300">✦</span> Tailwind CSS</span>
        <span><span className="text-yellow-300">✦</span> Git & Github</span>
        <span><span className="text-yellow-300">✦</span> Responsive Design</span>

        {/* second copy */}
        <span><span className="text-yellow-300">✦</span> Frontend Engineer</span>
        <span><span className="text-yellow-300">✦</span> HTML & CSS</span>
        <span><span className="text-yellow-300">✦</span> JavaScript</span>
        <span><span className="text-yellow-300">✦</span> React.js</span>
        <span><span className="text-yellow-300">✦</span> Tailwind CSS</span>
        <span><span className="text-yellow-300">✦</span> Git & Github</span>
        <span><span className="text-yellow-300">✦</span> Responsive Design</span>
      </div>
    </div>
  );
}

export default Marquee;
