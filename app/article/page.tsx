import { notFound } from "next/navigation"
import LiveTimestamp from "../LiveTimestamp";

type Props = {
    searchParams?:Article
}

function ArticlePage({ searchParams }: Props) {
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound()
    }

    const article: Article = searchParams;
  return (
      <article>
          <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
              {article?.image && (
                  <img className="w-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
                      src={article.image}
                      alt={article.title}
                  />
              )}
              <div className="px-10">
                  <h1 className="headerTitle pt-5 pb-2">
                      {article.title}
                  </h1>
              <div className="flex space-x-4 divide-x-2">
                  <h2 className="font-bold">
                      By: {article.author}
                  </h2>
                  <h2 className="font-bold pl-4">
                      Source: {article.source}
                  </h2>
                      <p className="pl-4">
                        <LiveTimestamp time={article.published_at} />
                          
                      </p>
                  </div>
              <p>{article.description}</p>
                  </div>
          </section>
</article>
  )
}

export default ArticlePage