import sortNewsByImg from "./sortNewsByImg";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {

    const query = keywords ?
        `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&languages=en&categories=${category}&keyword=${keywords}&sort=published_desc&limit=10&offset=0`
        :
        `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&languages=en&categories=${category}&sort=published_desc&limit=10&offset=0`
    //Fetch fucntion with Next.js 13 caching
    // if not dynamic, use cach within the 20s timeframe
    //if dynamic, all the api the fetch data instead of using cach
    const res = await fetch(query, {
        method: 'GET',
        cache: isDynamic ? 'no-cache' : 'default',
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 }, 
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log("query", query)
    const response = await res.json();
    //console.log("response json", response)
    //Sort function by images vs not images present
    const data = sortNewsByImg(response)
    return data;
}
export default fetchNews