function Hero() {
    return (
        <section id="hero" className="bg-cream pt-24 pb-6
         px-6 md:px-12 flex flex-col gap-6 font-cabin relative  mx-auto">
            <div className="bg-cream text-gray-400 border border-slate-200 rounded-full text-center w-fit px-4 py-1 shadow-[3px_3px_0_#e8e0d4] flex justify-center items-center gap-1 md:w-1/4">
            <span className="w-4 h-4 bg-green-500 border rounded-[50%] animate-greenPulse "></span>
            Available for opportunities</div>
            <h1 className="font-fraunces text-4xl font-semibol md:text-7xl md:leading-snug "> Hi, I'm <em className="text-red-400">Tamara</em>
            <br />
            I build <span className="underline underline-offset-8 decoration-wavy decoration-red-400">beautiful</span> 
            <br />
            things for the web.</h1>
            <p className="text-gray-500 font-medium text-lg max-w-lg">Frontend Engineer in training at AltSchool Africa. I turn ideas into interfaces that feel good to use, with React, clean code and a lot of curiosity.</p>

            <div className="flex flex-wrap items-center gap-4">
                <a href="#projects" className="bg-dark-navy text-white text-sm shadow-[4px_4px_0_#ff6b6b] border border-gray-500 rounded-full px-6 
                py-2 w-fit text-nowrap transition hover:translate-x-[2px] hover:translate-y-2[2px] hover:shadow-none">See my work<span>✦</span></a>
                <a href="#contact" className="border-2 text-sm border-dark-navy rounded-3xl px-6 py-2 w-fit text-nowrap transition hover:bg-red-400 hover:text-white">Say hello</a>
                <span className="md:block font-sketch text-gray-500 -rotate-12">← let's build something!</span>

            </div>

               <div id="blobs">
                <div className="absolute w-48 h-52 md:w-80 m:h-96
                 bg-red-400 rounded-full blur-3xl opacity-40 pointer-events-none top-[-80px] right-[10px] animate-float"></div>
                <div className="absolute w-36 h-24 md:w-32 md:h-60 bg-orange-400 rounded-full blur-3xl opacity-40 pointer-events-none bottom-[50px] left-[-60px] animate-float"></div>
                <div className="absolute w-48 h-40 bg-purple-400 rounded-full blur-3xl opacity-40 pointer-events-none top-[40%] right-[25%] animate-float"></div>
               </div>

               <div>
                <span className="absolute font-sketch text-gray-500/40 top-[22%] right-[12%] rotate-6 ">✦ open to work ✦</span>
                <span className="absolute font-sketch text-gray-500/40 bottom-[27%] md:bottom-[23%] left-[30%] md:left-[8%] -rotate-6 ">~ building things ~</span>
                <span className="absolute font-sketch text-gray-500/40 top-[60%] right-[8%] rotate-12 ">↓ scroll down ↓</span>
               </div>
               
                
            
        </section>
    )
}

export default Hero;