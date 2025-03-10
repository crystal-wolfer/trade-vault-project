import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext.js";

import ErrorToast from "../Toast Components/ErrorToast.jsx";

export default function MarketPartial({
  _id,
  name,
  logo,
  symbol,
  price,
  rank,
  totalSupply,
  changePercentage,
}) {
  const { isAuth } = useContext(AuthContext);

  const handleClick = (e) => {
    if (!isAuth) {
      e.preventDefault();
      setError("You must be logged in!");
    }
  };

  const [error, setError] = useState(null);

  const handleCloseToast = () => {
    setError(null);
  };

    return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th scope="col" className="px-2 py-3">
          {rank}
        </th>

        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="flex items-center space-x-4">
            <div className="mask rounded-full overflow-hidden bg-transparent w-8 h-8">
              <img
                src={logo}
                alt="rose-icon"
                loading="lazy"
                className="css-e8qu14"
              />
            </div>
            <span className="text-gray-500">{name}</span>
          </div>
        </th>
        <th scope="col" className="px-2 py-3 text-gray-500">
          {symbol}
        </th>
        <td className="px-6 py-4">$ {price}</td>
        <td className="px-6 py-4">{changePercentage} %</td>
        <td className="px-6 py-4">{totalSupply} M</td>
        <td className="px-6 py-4">
          <Link
            to={`/market-overview/trade/${_id}`}
            state = {{logo}}
            onClick={handleClick}
            className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Buy
          </Link>
        </td>
      </tr>

      {error && (
          <ErrorToast className="z-50" error={error} handleCloseToast={handleCloseToast} />
      )}
    </>
  );
}
