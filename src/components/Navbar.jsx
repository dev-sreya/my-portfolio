import React, { useEffect, useState } from 'react'
import { X, Menu } from 'lucide-react'
import {cn} from '/src/lib/utils'


const navItems = [
    { name: "Home", href: "#hero"},
    { name: "About", href: "#about"},
    { name: "Experience", href: "#experience"},
    { name: "Skills", href: "#skills"},
    { name: "Projects", href: "#projects"},
    { name: "Contact Me", href: "#contact"},
]

const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);

        }

        window.addEventListener("scroll", handleScroll);

        return () => removeEventListener("scroll", handleScroll);

    },[])


  return (
    <nav className={cn('fixed w-full z-40 transition-all duration-300',
        isScrolled ? "py-3 bg-background-80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

        <div className='container flex items-center justify-between'> 
            <a className='text-xl font-bold text-primary flex  items-center'
            
            href='#hero'>
                <span className='hidden md:flex relative z-10'>
                    <img src='./logop.png' className='w-5 h-5 mr-2'/>
                    <span className='text-glow text-foreground'>
                        SreyaTech
                    </span> Portfolio
                </span>
            </a>

            


            {/* Desktop Nav */}

            <div className='hidden md:flex space-x-8 pr-14'>
                {navItems.map((itemm,key) => (
                    <a key={key}
                    href={itemm.href}
                    className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                        {itemm.name}
                    </a>

                ))}
            </div>

            {/* Mobile nav */}

            <button onClick={() => setIsMenuOpen((prev) => (!prev))} className='lg:hidden p-2 absolute top-6 right-6 text-foreground z-50' aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}> {isMenuOpen ? <X size={24} /> : <Menu size={24} />} </button>


            <div className={cn("fixed inset-0 bg-background/95 background-blur-md z-40 flex flex-col items-center ",
                "justify-center transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}> 

                 <div className='flex flex-col space-y-8 text-xl'>
                {navItems.map((itemm,key) => (
                    <a key={key}
                    href={itemm.href}
                    className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    onClick={() => setIsMenuOpen(false)}
                    >
                        {itemm.name}
                    </a>

                ))}
            </div> 


            </div>


        </div>

      
    </nav>
  )
}

export default Navbar
