import NewsPartial from "../partials/NewsPartial.jsx";
import * as newsAPI from "../../API/newsAPI.js"
import { useEffect, useState } from "react";


export default function News() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    newsAPI.getNews().then(data => setNews(data))
  },[])


  return (
    <section className="bg-angled-gradient dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Latest News
          </h2>
          <p className="font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Stay caught up with the latest crypto news.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {news.map(item => (
            
            <NewsPartial
              key={item.date}
              title = {item.title}
              preview = {item.excerpt}
              publisher = {item.publisher.name}
              icon = {item.publisher.favicon}
              thumbnail = {item.thumbnail}
              url = {item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
