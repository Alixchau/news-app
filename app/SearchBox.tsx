//convert to client component because there's interactive handler(eg,handleSearch, onClick, onSubmit) 
'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

function SearchBox() {
    const [input, setInput] = useState("")
    const router = useRouter();

    const handleSearch = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        router.push(`/search?term=${input}`)

    }
  return (
      <form className="font-sourceserifpro max-w-6xl mx-auto flex justify-between items-center px-5 py-4" onSubmit={handleSearch}>
          <input type="text"
              placeholder="Type to search"
              value={input}
              onChange={e=> setInput(e.target.value)}
              className="w-full h-14 rounded-sm placeholder-gray-500 text-green-800 outline-none flex-1 bg-transparent font-semibold dark:text-slate-100 " />
          <button type='submit' disabled={!input} className='text-white px-5 py-2 rounded-full bg-green-800 shadow-sm disabled:bg-gray-400'>Search</button>
    </form>
  )
}

export default SearchBox