"use client";
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function DarkModeButton() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
       setMounted(true) 
    }, [])
    
    if (!mounted) {
        return null;
    }

    const currentTheme = theme === "system" ? systemTheme: theme;
    return (
        <div>
          
            {currentTheme === "dark" ? (
             <div className='flex align-middle items-center justify-center  cursor-pointer space-x-2'  onClick={() => setTheme("light")} >    
                <p>Light Mode</p>
                <SunIcon className='h-5 w-5 text-yellow-500'
                   />
                    </div>
            ) : (
                    <div className='flex align-middle items-center justify-center cursor-pointer space-x-2'  onClick={() => setTheme("dark")
                } >
                        <p>Dark Mode</p>
                    <MoonIcon className='h-5 w-5 text-gray-900'
                       />
                    </div>
            )}
        </div>
    );
}

export default DarkModeButton;