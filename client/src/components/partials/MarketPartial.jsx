import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function MarketPartial({
  _id,
  name,
  logo,
  symbol,
  price,
  changePercentage,
}) {
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    if (changePercentage < 0) {
      setArrow(false);
    }
  }, [changePercentage]);


  console.log(_id);
  return (
    <div className="relative flex max-w-64 justify-center mx-4 md: py-4">
      <div className="w-56 py-6 px-10 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="mask rounded-full overflow-hidden bg-transparent w-14 h-14">
          <img
            src={logo}
            alt="rose-icon"
            loading="lazy"
            className="css-e8qu14"
          />
        </div>
        <a href="#">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400 pb-6">
          {symbol}
        </p>
        <h6 className="text-sm font-bold text-gray-700 dark:text-gray-400">
          {" "}
          ${price}{" "}
        </h6>
        <div className="inline-flex py-2">
          {/* conditional rendering of the arrow depending on the changePercentage value */}
          {arrow ? (
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4918 9.58995L8.69222 6.23047C8.59227 6.11053 8.40806 6.11053 8.30811 6.23047L5.50853 9.58995C5.37284 9.75279 5.48863 10 5.70059 10L11.2997 10C11.5117 10 11.6275 9.75279 11.4918 9.58995Z"
                fill="#34AB80"
              ></path>
            </svg>
          ) : (
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.50821 6.41005L8.30778 9.76953C8.40773 9.88947 8.59194 9.88947 8.69189 9.76953L11.4915 6.41005C11.6272 6.24721 11.5114 6 11.2994 6H5.70026C5.4883 6 5.37252 6.24721 5.50821 6.41005Z"
                fill="#D95B5B"
              ></path>
            </svg>
          )}

          <p className="text-xs font-medium text-gray-700 dark:text-gray-400">
            {changePercentage}%
          </p>
        </div>
        <Link to={`/market-overview/trade/${_id}`}
          className="pt-6 inline-flex font-medium items-center text-primary-600 hover:underline"
        >
          See details
        
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
