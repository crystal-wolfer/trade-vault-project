import MarketPartial from "../partials/MarketPartial.jsx";
import Spinner from "../Static Pages/Loading.jsx";
import * as cryptoAPI from "../../API/cryptoAPI.js";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Market() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    cryptoAPI.getCrypto()
    .then((data) => {
      const topCoins =  Object.values(data).slice(0,5);
      setCoins(topCoins);
    })
    .finally(() => {
      
      setLoading(false);});
  }, [setCoins]);

  return (
    <section className="bg-angled-gradient py-8 bg-slate-400 flex flex-col items-start justify-center lg:flex-row">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-8 md:px-8 md:py-8">
        <h2 className="text-center text-3xl font-bold lg:text-4xl pb-8">
          Hottest crypto assets
        </h2>

        <div className="flex flex-col w-full items-center justify-center lg:flex-row md: ">
          {/* Item1 */}
          {loading && <Spinner/>}
          
          {coins.map((coin) => {
            const changePercentage =
              ((coin.high24h - coin.low24h) / coin.low24h) * 100;
            return (
              <MarketPartial
                key={coin.totalSupply}
                _id={coin.key}
                name={coin.name}
                logo={coin.logo}
                symbol={coin.symbol}
                price={coin.quote.quotes_price.toFixed(2)}
                changePercentage={changePercentage.toFixed(2)}
              />
            );
          })}
        </div>

        <div className="py-8 lg:py-4">
          <Link to="/market-overview">
          <button
            type="button"
            className="w-64 text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium border-solid border-2 border-primary-800 rounded text-m px-4 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Explore more assets
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
