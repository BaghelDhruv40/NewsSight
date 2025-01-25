import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"

export default function NewsBoard({category,country}) {
    const [articles,setArticles]=useState([])
    const apikey=process.env.VITE_API_KEY
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}`;
        
        fetch(url,{
          headers: {
            'X-Api-Key': "dc997b37122146e7a7e7659f9fdc19ab"
          }  
        })
       .then(response=>response.json()).then(data=>{setArticles(data.articles)})
    },[category,country])
  return (
    <div className="bg-dark" >
      <h2 className="text-center text-light bg-black">Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="container">
        <div className="row">
          {articles.map((news,index)=>{
            
            return (<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          )})}
        </div>
      </div>
    </div>
  )
}
