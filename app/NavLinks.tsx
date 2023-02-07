//in order to use hooks(usePathname), need to make the component a client component
'use client' 

import { categories } from "../constants"
import NavLink from "./NavLink"
import {usePathname} from "next/navigation"

function NavLinks() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split('/')[2] === path;
    }
  return (
      <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm max-w-6xl gap-4 border-b pb-4 mx-auto">
          {categories.map(category => (
              <NavLink key={category} category={category} isActive={isActive(category)} />
          ))}
   </nav>
  )
}

export default NavLinks