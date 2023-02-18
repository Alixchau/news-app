import { categories } from "../../../constants"
import fetchNews from "../../../utils/fetchNews"
import NewsList from "../../NewsList"

type Props = {
  params:{category: Category}
}

async function NewsCategory({  params:{category}}: Props) {
  const news: NewsResponse = await fetchNews(category)
  return (
    <div>

      <h1 className="headerTitle px-10">{category}</h1>
      <NewsList news={news} />
    </div>

  )
}

export default NewsCategory
//prebuild each category page in categories
//while fecthNews function still keep the cache up to date
export async function generateStaticParams() {
  return categories.map(category=>({category:category}))
}