import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'

function Header() {
  return (
    <header>
          
          <div className='grid grid-cols-3 p-10 items-center align-middle'>
              <Bars3Icon className='h-8 w-8 cursor-pointer' />
              <Link href="/" prefetch={false}>
                  <h1 className='font-serif text-4xl text-center'>
                  AC News
                  </h1></Link>
            
              <div className='flex items-center justify-end space-x-2'>
              {/* todo darkmode button */}
                  
              <button className='hidden md:inline bg-slate-900 text-white px-5 py-2 rounded-full dark:bg-slate-800'>
                  Subscribe
            </button>
              </div>

          </div>
                        {/* NavLinks */}
    <NavLinks />
            {/* Search Bar */}
    </header>
  )
}

export default Header