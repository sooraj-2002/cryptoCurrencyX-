import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState([]); // State for toggling description

  const apikey = 'pub_49792e52fd22be19121f33d3bafb41a142ef7';
  const query = 'cryptocurrency';
  const url = `https://newsdata.io/api/1/news?apikey=${apikey}&q=${query}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(url);
        setNews(response.data.results);
        setShowFullDescription(new Array(response.data.results.length).fill(false)); // Initialize toggle state for descriptions
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchNews();
  }, [url]);

  const toggleDescription = (index) => {
    const newShowFullDescription = [...showFullDescription];
    newShowFullDescription[index] = !newShowFullDescription[index];
    setShowFullDescription(newShowFullDescription);
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="cryptonews">
      <h1 className="headline">Latest News Articles</h1>
      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-article">
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="news-image"
              />
            )}
            <div className="news-description">
              <h2 className="news-title">{article.title}</h2>
              <p className="news-text">
                {showFullDescription[index]
                  ? article.description || 'No description available.'
                  : `${article.description ? article.description.slice(0, 300) : 'No description available.'}...`}
              </p>
              <div className="btnshow">
                <button className='btnshowmore' onClick={() => toggleDescription(index)}>
                  {showFullDescription[index] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
