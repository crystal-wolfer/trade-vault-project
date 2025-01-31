import * as serverDataAPI from "../../API/serverDataAPI.js";
import { Link } from "react-router-dom";

export default function WishlistCard({
  link,
  logo,
  name,
  symbol,
  price,
  change,
  id,
  removeItem,
}) {
  const deleteItemHandler = async () => {
    try {
      const response = await serverDataAPI.removeFromWishList(id);
      removeItem(id);
    } catch (err) {
      console.error("Failed to delete coin:", err);
    }
  };

  console.log(link);

  return (
    <>
      <div className="relative bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
        {/* Delete Indicator */}
        <span
          onClick={deleteItemHandler}
          className="bg-red-200 text-xs font-medium text-red-800 flex items-center justify-center h-8 w-8 rounded-full cursor-pointer hover:bg-red-300 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-700 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <Link to={`/market-overview/trade/${link}`} state={{ logo }}>
          <div className="flex justify-center mb-">
            <div className="bg-primary-100 p-3 rounded-full">
              <img src={logo} alt={`${name} Logo`} className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">
            {symbol} {price}
          </p>
          <div
            className={`flex items-center justify-center font-semibold mt-4 ${
              change > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {change > 0 ? (
              <svg
                className="h-7 w-7 text-green-500 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-7 w-7 text-red-500 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            )}
            <span className="text-xl">{Math.abs(change)}%</span>
          </div>
        </Link>
      </div>
    </>
  );
}
