import { useEffect, useState } from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

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
            <ul className="flex gap-4">
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>

            </ul>
        </nav>
    )
    // rgba(250, 247, 242, 0.85) FAF7F2D9 
}

export default Navbar;