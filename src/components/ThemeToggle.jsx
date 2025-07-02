import React from 'react'
import { useState, useEffect } from 'react'
import { Sun,Moon } from 'lucide-react';

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

     useEffect(() => {
        // Check localStorage first, then system preference
        const storedTheme = localStorage.getItem("theme");
     
        if (storedTheme == "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);

        }else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);

        }
    }

    
  return (
    <div>
<button onClick={toggleTheme}> 
    {isDarkMode ? (
        <Sun className='h-6 w-6 text-yellow-500' fill="currentColor" />
    
    ) : (
        <Moon className='h-6 w-6 text-blue-800' fill="currentColor" />

    )}
</button>


      
    </div>
)
    
}

export default ThemeToggle
