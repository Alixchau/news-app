import fetchNews from "../../utils/fetchNews"
import NewsList from "../NewsList"

type Props = {
    searchParams?: {term:string}
}
async function SearchPage({searchParams}:Props) {
    const news: NewsResponse = await fetchNews("general", searchParams?.term, true)
  return (
      <div>
          <h1 className="headerTitle pt-5 pb-2 px-10 underline underline-offset-4 decoration-green-700 decoration-4">Search Results for: {searchParams?.term}</h1>
          <NewsList news={news} />
    </div>
  )
}

export default SearchPage