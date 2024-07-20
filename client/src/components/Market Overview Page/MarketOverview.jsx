import { useEffect, useState } from "react";
import * as cryptoAPI from "../../API/cryptoAPI.js";
import MarketOverviewPartial from "../partials/MarketOverviewPartial.jsx";
import Spinner from "../Static Pages/Loading.jsx";

export default function MarketOverview() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cryptoAPI
      .getCrypto()
      .then((data) => {
        const topCoins = Object.values(data).slice(0, 50);
        setCoins(topCoins);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setCoins]);

  return (
    <section className="block bg-white dark:bg-gray-900 sm:py-8 mx-auto">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Coin name
              </th>
              <th scope="col" className="px-2 py-3">
                Symbol
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                24h Change
              </th>
              <th scope="col" className="px-6 py-3">
                Total Supply
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
              {loading && (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center">
                      <Spinner />
                    </div>
                  </td>
                </tr>
              )}

            {coins.map((coin) => {
              const changePercentage =
                ((coin.high24h - coin.low24h) / coin.low24h) * 100;
              return (
                <MarketOverviewPartial
                  key={coin.key}
                  _id={coin.key}
                  name={coin.name}
                  logo={coin.logo}
                  symbol={coin.symbol}
                  price={coin.quote.quotes_price.toFixed(2)}
                  rank={coin.rank}
                  totalSupply={(coin.totalSupply*0.000001).toFixed(2)}
                  changePercentage={changePercentage.toFixed(2)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
