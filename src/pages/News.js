import React, { useState, useEffect } from "react";
import "../Components/News.css";
import NewsForm from "../Components/NewsForm";
const News = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("election");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // async fetch request to the api. the q=query is dynamic and the api key is saved in the env file hence okay for github
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=5cvROOmiVj3QnghA0Njf125jgidfPAc7`
        );

        const articles = await res.json();
        // console.log(articles.response.docs);
        setArticles(articles.response.docs);
        setIsLoading(false);
        // console.log(process.env.REACT_APP_ARTICLES_API_KEY);
      } catch (error) {
        console.error(error);
      }
    }; // End  fetchArticles()

    fetchArticles();
  }, [term]);

  return (
    <>
      <div className="showcase">
        <div className="overlay px-5">
          <h1 className="text-4xl font-bold capitalize text-white text-center mb-4 ">
            Viewing articles about ... {term}
          </h1>
          <NewsForm
            searchText={(text) => {
              setTerm(text);
            }}
          />
        </div>
      </div>

      {isLoading ? (
        <h1 className="text-center mt-20 font-bold text-6xl">Loading...</h1>
      ) : (
        <section className="grid grid-col-1 gap-10 spx-5 pt-10 pb-20">
          {articles.map((article) => {
            const {
              abstract,
              headline: { main },
              byline: { original },
              lead_pargraph,
              news_desk,
              section_name,
              web_url,
              _id,
              word_count,
            } = article;
            return (
              <article
                key={_id}
                className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto"
              >
                <h2 className="font-bold text-2xl mb-5 lg:text-4xl">{main}</h2>
                <p>{abstract}</p>
                <p>{lead_pargraph}</p>
                <ul className="my-4">
                  <li>{original}</li>
                  <li>
                    <span>News Desk: </span>
                    {news_desk}
                  </li>
                  <li>
                    <span className="font-bold">Section Name</span>{" "}
                    {section_name}
                  </li>
                  <li>
                    <span className="font-bold">Word Count:</span> {word_count}
                  </li>
                </ul>
                <a href={web_url} target="_blank" className="underline">
                  Web Resource
                </a>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default News;
