import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Price.css';

const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const apiKey = '938dcc427b6a3d6c131e7d6bf3748f7a5ce6d64694eb8fdf7c53b06a65f3248f';
  const newsUrl = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(newsUrl);
        setNews(response.data.Data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsUrl]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  if (loading) return <p className="loading">Loading news...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="crypto-news">
      <h1>Latest Cryptocurrency News</h1>
      <div className="news-container">
        {news.slice(0, showMore ? news.length : 3).map((article, index) => (
          <div key={index} className="news-article">
            {article.imageurl && (
              <img src={article.imageurl} alt={article.title} className="news-image" />
            )}
            <div className="news-description">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-text">{article.body}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleShowMore} className="show-more-button">
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default CryptoNews;
