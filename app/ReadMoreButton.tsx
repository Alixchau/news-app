"use client";

import { useRouter } from "next/navigation"

type Props = {
    article: Article
}
function ReadMoreButton({ article }: Props) {
    const router = useRouter()
    const handleClick = () => {
        const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join("&");
        const url = `/article?${queryString}`
        router.push(url)
    }

  return (
      <button className='h-10 bg-green-800 rounded-b-lg hover:bg-green-700 dark:text-slate-100 text-center text-white font-bold cursor-pointer justify-center flex items-center'
      onClick={handleClick} >
          Read More
    </button>
  )
}

export default ReadMoreButton