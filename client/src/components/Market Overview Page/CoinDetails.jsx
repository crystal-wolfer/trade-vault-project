import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as cryptoAPI from "../../API/cryptoAPI.js";
import * as serverDataAPI from "../../API/serverDataAPI.js";
import LineChart from "../partials/LineChart.jsx";
import SuccessToast from "../Toast Components/SuccessToast.jsx";
import useMessage from "../../hooks/useMessage.js";

export default function CoinDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [coinInfo, setCoinInfo] = useState({});
  const [noCoin, setNoCoin] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useMessage();
  const [arrow, setArrow] = useState(true);
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Ensuring hook order is consistent
  useEffect(() => {
    cryptoAPI.getCoinChartData(id).then((data) => {
      setData(data);
      setDataFetched(true);
    });
  }, [id]); // Ensure id is included

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cryptoAPI.getCoinInfo(id);
        if (!data) {
          setNoCoin(true);
        } else {
          setCoinInfo(data);
        }
      } catch (error) {
        console.error(error);
        setNoCoin(true);
      }
    };

    fetchData();
  }, [id]); // Ensure id is included

  useEffect(() => {
    if (coinInfo.changePercent24Hr < 0) {
      setArrow(false);
    }
  }, [coinInfo.changePercent24Hr]);

  useEffect(() => {
    if (success) {
      setMessage("Order submitted!");
      setSuccess(false);
    }
  }, [success, setMessage]);

  const amountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  const handleCloseToast = () => {
    setError(null);
  };

  // Submit Handler - Create Order
  const submitOrderHandler = async ({ price, amount }) => {
    const modifiedData = {
      amount,
      paid: (Number(coinInfo.priceUsd) * Number(amount)).toFixed(2),
      key: id,
      name: coinInfo.name,
      symbol: coinInfo.symbol,
    };

    try {
      const result = await serverDataAPI.create(modifiedData);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  // Rendering section
  if (noCoin) {
    return (
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-6xl text-primary-600 dark:text-primary-500">
              Coin not found!
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-xl dark:text-white">
              Looks like you stumbled upon an issue...
            </p>
            <p className="mb-4 text-base font-light text-gray-500 dark:text-gray-400">
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
                $ {Number(coinInfo.priceUsd).toFixed(2)}
              </p>
            </div>

            <div className="mt-4 sm:items-center sm:gap-4 sm:flex flex-col sm:flex-row">
              {arrow ? (
                <span className="flex items-center bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 mt-2 sm:mt-0 w-full sm:w-auto h-12 sm:h-auto">
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
                </span>
              ) : (
                <span className="flex items-center bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 mt-2 sm:mt-0 w-full sm:w-auto h-12 sm:h-auto">
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
                </span>
              )}

              <button className="flex items-center bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 mt-2 sm:mt-0 w-full sm:w-auto h-12 sm:h-auto">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 16H3"
                    stroke="#EAB308"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="#EAB308"
                  />
                  <path
                    d="M9 11H3"
                    stroke="#EAB308"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="#EAB308"
                  />
                  <path
                    d="M16.4901 16.3082L16.935 15.7045L16.935 15.7045L16.4901 16.3082ZM17.5 10.1062L16.9641 10.6309C17.1052 10.775 17.2983 10.8562 17.5 10.8562C17.7017 10.8562 17.8948 10.775 18.0359 10.6309L17.5 10.1062ZM18.5099 16.3083L18.9549 16.912L18.9549 16.912L18.5099 16.3083ZM17.5 16.8103L17.5 16.0603H17.5L17.5 16.8103ZM16.935 15.7045C16.2914 15.2302 15.4675 14.5568 14.8118 13.808C14.1328 13.0325 13.75 12.3064 13.75 11.7148H12.25C12.25 12.8758 12.9489 13.9574 13.6832 14.7961C14.4409 15.6614 15.3619 16.4085 16.0451 16.912L16.935 15.7045ZM13.75 11.7148C13.75 10.607 14.2445 10.0237 14.7533 9.83348C15.2705 9.6401 16.0951 9.74331 16.9641 10.6309L18.0359 9.58145C16.88 8.40091 15.4546 7.96984 14.228 8.42849C12.993 8.89028 12.25 10.1453 12.25 11.7148H13.75ZM18.9549 16.912C19.6381 16.4085 20.5591 15.6614 21.3168 14.7961C22.0511 13.9574 22.75 12.8758 22.75 11.7148H21.25C21.25 12.3064 20.8672 13.0326 20.1882 13.808C19.5325 14.5568 18.7086 15.2302 18.065 15.7045L18.9549 16.912ZM22.75 11.7148C22.75 10.1453 22.007 8.89027 20.772 8.42849C19.5454 7.96985 18.12 8.40091 16.9641 9.58145L18.0359 10.6309C18.9049 9.74331 19.7295 9.6401 20.2467 9.83348C20.7555 10.0237 21.25 10.607 21.25 11.7148H22.75ZM16.0451 16.912C16.4368 17.2007 16.8752 17.5603 17.5 17.5603L17.5 16.0603C17.4852 16.0603 17.4682 16.0626 17.399 16.0252C17.3008 15.972 17.178 15.8836 16.935 15.7045L16.0451 16.912ZM18.065 15.7045C17.822 15.8836 17.6992 15.972 17.601 16.0252C17.5318 16.0626 17.5148 16.0603 17.5 16.0603L17.5 17.5603C18.1248 17.5603 18.5632 17.2007 18.9549 16.912L18.065 15.7045Z"
                    fill="#EAB308"
                  />
                  <path
                    d="M20 6L9.5 6M3 6L5.25 6"
                    stroke="#EAB308"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Add to waitlist
              </button>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            {/* Trade Form */}
            <form
              onSubmit={handleSubmit(submitOrderHandler)}
              onKeyDown={(e) => checkKeyDown(e)}
            >
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="w-full">
                  <label
                    htmlFor="payment"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    You pay
                  </label>
                  <input
                    {...register("price")}
                    type="text"
                    name="price"
                    id="price"
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={`$${(
                      Number(coinInfo.priceUsd) * Number(amount)
                    ).toFixed(2)}`}
                    placeholder="Price"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    You get {coinInfo.symbol}
                  </label>
                  <input
                    {...register("amount", {
                      required: "You must enter amount",
                    })}
                    type="number"
                    name="amount"
                    id="amount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="1"
                    value={amount}
                    onChange={amountChange}
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-sm m-2">
                      {errors.amount.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium border-solid border-2 border-primary-800 rounded text-sm px-12 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={isSubmitting}
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
                  {isSubmitting ? "Loading..." : "Place Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {message && <SuccessToast message={message} />}

      {error && (
        <div>
          <ErrorToast error={error} handleCloseToast={handleCloseToast} />
        </div>
      )}
    </section>
  );
}
