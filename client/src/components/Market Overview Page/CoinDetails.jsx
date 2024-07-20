import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as cryptoAPI from "../../API/cryptoAPI.js";
import LineChart from "../partials/LineChart.jsx";

export default function CoinDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [coinInfo, setCoinInfo] = useState([]);
  const [noCoin, setNoCoin] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    cryptoAPI.getCoin(id).then((data) => {
      setData(data);
      setDataFetched(true);
    });
  }, [setData]);

  useEffect(() => {
    cryptoAPI.getCoinInfo(id).then((data) => {
      if (data === undefined) {
        setNoCoin(true);
        return;
      }
      setCoinInfo(data);
      console.log(data);
    });
  }, [setCoinInfo]);

  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    if (Number(coinInfo.changePercent24Hr) < 0) {
      setArrow(false);
    }
  }, [Number(coinInfo.changePercent24Hr)]);

  const [amount, setAmount] = useState(1);

  const amountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  }

  if (noCoin) {
    return (
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-6xl text-primary-600 dark:text-primary-500">
              Coin not found!
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-xl dark:text-white">
              Looks like you stumbled upon an issue...
            </p>
            <p class="mb-4 text-base font-light text-gray-500 dark:text-gray-400">
              In the meantime you can go back to the{" "}
              <a
                href="/market-overview"
                className="underline underline-offset-4 block py-2 px-3 md:p-0 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Market Overview
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="py-20 max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Coin Chart */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-base font-semibold mb-8 text-gray-900 sm:text-2xl dark:text-white">
                {coinInfo.name} Price last 24h
              </h1>
            </div>
            {dataFetched && <LineChart data={data} name={coinInfo.name} />}
          </div>
          {/* Coin Details */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {coinInfo.name} {coinInfo.symbol}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${Number(coinInfo.priceUsd).toFixed(2)}
              </p>
            </div>

            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
            {arrow 
              ? (<span className="flex items-center bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4918 9.58995L8.69222 6.23047C8.59227 6.11053 8.40806 6.11053 8.30811 6.23047L5.50853 9.58995C5.37284 9.75279 5.48863 10 5.70059 10L11.2997 10C11.5117 10 11.6275 9.75279 11.4918 9.58995Z"
                    fill="#34AB80"
                  ></path>
                </svg>
                {Number(coinInfo.changePercent24Hr).toFixed(2)}%
              </span>) 
              : (<span className="flex items-center bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.50821 6.41005L8.30778 9.76953C8.40773 9.88947 8.59194 9.88947 8.69189 9.76953L11.4915 6.41005C11.6272 6.24721 11.5114 6 11.2994 6H5.70026C5.4883 6 5.37252 6.24721 5.50821 6.41005Z"
                    fill="#D95B5B"
                  ></path>
                </svg>
                {Number(coinInfo.changePercent24Hr).toFixed(2)}%
              </span>) 
            }
              
              
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            {/* Trade Form */}
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="w-full">
                  <label
                    htmlFor="payment"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    You pay
                  </label>
                  <input
                    type="text"
                    name="payment"
                    id="payment"
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={`$${(Number(coinInfo.priceUsd) * Number(amount)).toFixed(2)}`}
                    placeholder="Price"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    You get
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="1"
                    value={amount}
                    onChange={amountChange}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium border-solid border-2 border-primary-800 rounded text-sm px-12 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                    />
                  </svg>
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
