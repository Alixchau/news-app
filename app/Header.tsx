import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import DarkModeButton from './DarkModeButton'

function Header() {
  return (
    <header>
          
          <div className='font-sourceserifpro grid grid-cols-3 p-10 items-center align-middle'>
              <Bars3Icon className='h-8 w-8 cursor-pointer' />
              <Link href="/" prefetch={false}>
                  <h1 className='text-4xl text-center font-semibold'>
                  AC News
                  </h1></Link>
            
              <div className='flex items-center justify-end space-x-2'>
              {/* todo darkmode button */}
            <DarkModeButton />          
              <button className='hidden md:inline bg-green-800 text-white px-5 py-2 rounded-full shadow-sm dark:bg-slate-800'>
                  Subscribe
            </button>
              
        </div>

          </div>
                           <NavLinks />
            <SearchBox />
    </header>
  )
}

export default Header