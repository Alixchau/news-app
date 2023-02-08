const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    //query
    const query = `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}languages=en&category=${category}&sort=published_desc&keywords=${keywords}`
    //Fetch fucntion with Next.js 13 caching

    //Sort function by images vs not images present

    //return res
}
export default fetchNews