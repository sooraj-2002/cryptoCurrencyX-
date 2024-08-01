import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import {CoinContext} from "../../context/CoinContext";
import { Link } from 'react-router-dom';

const Home = () => {
    const {allCoin,currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([])

    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);

        if(event.target.value === ''){
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler = async(event) =>{
        event.preventDefault();
    const coins = await allCoin.filter((item)=> {
          return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])
  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
            <form onSubmit={searchHandler}>
                <input type="text" className='text-slate-950' placeholder='Search Crypto...' list='coinlist' value={input} onChange={inputHandler} required  />

                <datalist id='coinlist'>
                    {allCoin.map((item, index) => (<option key={index} value={item.name}/>))}
                </datalist>

                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="cryptotabel">
            <div className="tabellayout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24H Change</p>
                <p className='marketcap'>Market Cap</p>
            </div>
            {displayCoin.slice(0,20).map((item, index)=>(
                <Link to={`/coin/${item.id}`} className="tabellayout" key={index}>
                    <p>{item.market_cap_rank}</p>
                    <div>
                        <img src={item.image} alt="" />
                        <p>{item.name + " - " + item.symbol}</p>
                    </div>
                    <p>{currency.symbol} {item.current_price.toLocaleString()}</p>

                    <p className={item.price_change_percentage_24h>0?"green":"red"}>
                        {Math.floor(item.price_change_percentage_24h*100)/100}
                    </p>

                    <p className='marketcap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home