import { categories } from "../constants"
import fetchNews from "../utils/fetchNews"

async function Homepage() {
  //* fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","))
  return (
    <div>
{/* NewsList news */}

    </div>
  )
}

export default Homepage