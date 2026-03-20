function Hero() {
    return (
        <section id="hero" className="bg-slate-100 pt-24 pb-6
         px-12 flex flex-col gap-6 font-cabin relative">
            <div className="bg-slate-100 text-gray-400 border border-slate-200 rounded-full text-center w-1/2 shadow-md shadow-[3px_3px_0_#e8e0d4] flex justify-center items-center gap-1">
            <span className="w-4 h-4 bg-green-500 border rounded-[50%] animate-greenPulse"></span>
            Available for opportunities</div>
            <h1 className="font-fraunces text-5xl font-semibold"> Hi, I'm <em className="text-red-400">Tamara</em> -
            <br />
            I build <span className="underline decoration-wavy decoration-red-400">beautiful</span> 
            <br />
            things for the web.</h1>
            <p className="text-gray-500 font-medium text-lg max-w-lg">Frontend Engineer in training at AltSchool Africa. I turn ideas into interfaces that feel good to use, with React, clean code and a lot of curiosity.</p>

            <div className="flex gap-4">
                <a href="#projects" className="bg-dark-navy text-white shadow-md shadow-[4px_4px_0_#ff6b6b] border border-gray-500 rounded-full px-6 py-3">See my work<span>✦</span></a>
                <a href="#contact" className="border-2 border-dark-navy rounded-full px-6 py-3">Say hello</a>
                <span className="font-sketch text-gray-500 -rotate-12">← let's build something!</span>

            </div>

           
               <div id="blobs">
                <div className="absolute w-80 h-96 bg-red-400 rounded-full blur-3xl opacity-40 pointer-events-none top-[-80px] right-[10px]"></div>
                <div className="absolute w-48 h-60 bg-orange-400 rounded-full blur-3xl opacity-40 pointer-events-none bottom-0 left-[-60px]"></div>
                <div className="absolute w-48 h-40 bg-purple-400 rounded-full blur-3xl opacity-40 pointer-events-none top-[40%] right-[25%]"></div>
               </div>

               <div>
                <span className="absolute font-sketch text-gray-500/40 top-[22%] right-[12%] rotate-6 ">✦ open to work ✦</span>
                <span className="absolute font-sketch text-gray-500/40 bottom-[23%] left-[8%] -rotate-6 ">~ building things ~</span>
                <span className="absolute font-sketch text-gray-500/40 top-[60%] right-[8%] rotate-12 ">↓ scroll down ↓</span>
               </div>
               
                
            
        </section>
    )
}

export default Hero;