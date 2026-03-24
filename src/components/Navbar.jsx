import { useEffect, useState } from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        // clean up
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [])
    return (
        <nav className={`bg-slate-100 fixed top-0 z-50 w-full flex justify-between items-center px-12 py-6 mb-4 ${isScrolled ? 'bg-stone-50 py-4 border-b-2 border-dashed backdrop-blur-xl' : 'bg-transparent'}`} >
               <h1 className="font-sketch font-semibold text-3xl italic text-red-500 ">tamara <span>✦</span></h1>
            <button 
            onClick={toggleMenu}
            className="md:hidden">{isOpen ? "✕" : "☰"}</button>
            {isOpen && <div className="absolute top-full left-0 w-full bg-cream backdrop-blur-md flex flex-col items-center gap-4 py-6 border-b-2 border-dashed border-gray-200 md:hidden shadow-lg">
                 <ul className="flex flex-col gap-4 border-black w-full text-center">
                <li ><a href="#about"  onClick={toggleMenu} className="font-sketch text-2xl text-gray-700 hover:text-red-400 transition-colors">about</a></li>
                <li ><a href="#skills"  onClick={toggleMenu} className="font-sketch text-2xl text-gray-700 hover:text-red-400 transition-colors ">skills</a></li>
                <li ><a href="#projects"  onClick={toggleMenu} className="font-sketch text-2xl text-gray-700 hover:text-red-400 transition-colors ">projects</a></li>
                <li ><a href="#contact"  onClick={toggleMenu} className="font-sketch text-2xl text-gray-700 hover:text-red-400 transition-colors ">contact</a></li>

            </ul>
            </div> }
         
            <ul className="hidden md:flex gap-4">
                <li><a href="#about" className="hover:text-red-400 transition-colors font-sketch">about</a></li>
                <li><a href=" #skills" className="hover:text-red-400 transition-colors font-sketch">skills</a></li>
                <li><a href="#projects" className="hover:text-red-400 transition-colors font-sketch">projects</a></li>
                <li><a href="#contact" className="hover:text-red-400 transition-colors font-sketch">contact</a></li>

            </ul>
        </nav>
    )
}

export default Navbar;