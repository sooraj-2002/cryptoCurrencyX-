import React, { useContext, useEffect, useState, useCallback } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/lineChart/lineChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = useCallback(async () => {
    const options = { 
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-uSzeRVqTjEjQKcCi3ZQizTD4' }
    };
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  }, [coinId]);

  const fetchHistoricalData = useCallback(async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-uSzeRVqTjEjQKcCi3ZQizTD4' }
    };
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  }, [coinId, currency.name]);

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [fetchCoinData, fetchHistoricalData]);

  if (coinData && historicalData) {
    return (
      <div className='coin'>
        <div className="coinname">
          <img src={coinData.image.large} alt=""/>
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="coinchart">
          <LineChart historicalData={historicalData}/>
        </div>

        <div className="coininfo">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>

          <ul>
            <li>Current Price</li>
            <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>

          <ul>
            <li>Market Cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>

          <ul>
            <li>24 Hour high</li>
            <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>

          <ul>
            <li>24 Hour low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>

      </div>
    )
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    )
  }
}

export default Coin;
