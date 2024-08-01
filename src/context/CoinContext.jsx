import { createContext, useEffect, useState, useCallback } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });

    // Wrap fetchAllCoin with useCallback to memoize it
    const fetchAllCoin = useCallback(async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-uSzeRVqTjEjQKcCi3ZQizTD4' }
        };

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
            const data = await response.json();
            setAllCoin(data);
        } catch (err) {
            console.error(err);
        }
    }, [currency]);

    useEffect(() => {
        fetchAllCoin();
    }, [fetchAllCoin]);  // Including fetchAllCoin as a dependency

    const contextValue = { allCoin, currency, setCurrency };

    return (        
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
