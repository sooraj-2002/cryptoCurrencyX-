import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Coins from './pages/Coins/Coin.jsx'
import News from './pages/News/News.jsx'
import Price from './pages/Cryptoprice/Price.jsx'
import AboutMe from './pages/AboutMe/About.jsx'
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coins />} />
        <Route path="/news" element={<News />} />
        <Route path="/price" element={<Price />} />   
        <Route path="/about" element={<AboutMe />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App