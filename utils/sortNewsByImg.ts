export default function sortNewsByImg(news: NewsResponse){
    const newsWithImg = news.data.filter(item => item.image !== null)
    const newsWithoutImg = news.data.filter(item => item.image === null)
    
    const sortedNewsRes = {
        ...news,
        data: [...newsWithImg, ...newsWithoutImg]
    }

    return sortedNewsRes
}