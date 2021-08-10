import "./App.css";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import News from "./pages/News";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("election");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // async fetch request to the api. the q is dynamic and the api key is saved in the env file hence okay for github
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
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/news" exact>
              <News />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
