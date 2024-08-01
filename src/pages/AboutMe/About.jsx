// About.js (React component)
import React from 'react';
import './About.css'; // Import the CSS file
import assets from '../../assets/suraj0-r.png'
import github from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/instagram.svg'


const About = () => {
  return (
    <div className="about-container">
      <h1 className='text-4xl font-semibold '>About Me</h1>
      <div className="intro">
        <img src={assets} alt="" className='about-image'/>
      <p>Hello! I'm Suraj, a passionate web developer specializing in React.js. With a keen interest in cryptocurrencies, I've created a comprehensive and user-friendly cryptocurrency website. This platform offers a seamless experience for users to explore the world of digital currencies.</p>
      </div>
      <div className="socialmedia">
        <a href="https://github.com/sooraj-2002"><img src={github} alt="" /><br /> Github</a>
        <a href="https://www.instagram.com/developercodetec/"><img src={insta} alt="" /><br /> Insta</a>
        <a href="https://x.com/soorajkuma65408"><img src={twitter} alt="" /><br />Twitter</a>
      </div>
      <section className="details-section">
        <h2 className='text-4xl font-semibold'>What I Do</h2>
        <p>I've developed a comprehensive cryptocurrency website that provides users with up-to-date information and insights into the digital currency market. Here's a glimpse of what my project offers:</p>
        <ul>
          <li><strong>Home Page:</strong> A broad overview of various cryptocurrencies, allowing users to explore and learn about different coins. By clicking on any coin, users can access detailed data and graphical representations of its performance.</li>
          <li><strong>Search & Filter:</strong> An intuitive search and filter feature that helps users quickly find specific coins, making navigation seamless and efficient.</li>
          <li><strong>Detailed Coin Data & Graphs:</strong> Comprehensive data for each cryptocurrency, including real-time price trends, market cap, and more. Our graphs provide a visual understanding of each coin's historical performance.</li>
          <li><strong>Currency Conversion:</strong> The ability to view cryptocurrency prices in multiple currencies, including USD, EUR, and INR, ensuring users have the information they need in their preferred currency.</li>
          <li><strong>Cryptocurrency News:</strong> A dedicated page that brings the latest news, analysis, and trends in the cryptocurrency world, keeping users informed and engaged.</li>
          <li><strong>Latest Cryptocurrencies:</strong> A section highlighting the newest additions to the market, helping users stay updated with the latest trends and opportunities.</li>
        </ul>
      </section>
      <section className="contact-section">
        <p>My goal is to create platforms that are not only functional and informative but also engaging and user-friendly. I believe in the power of technology to bring transparency and accessibility to complex markets like cryptocurrency.</p>
        <p>If you're looking for a dedicated and innovative web developer to bring your ideas to life, I'd love to connect! Thank you for visiting my site, and I look forward to the possibility of working together.</p>
      </section>
      
    </div>
  );
};

export default About;
