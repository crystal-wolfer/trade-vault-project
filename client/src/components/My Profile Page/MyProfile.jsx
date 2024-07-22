import { useState } from "react";

import Table from "./Table.jsx";
import WishlistCard from "../partials/WishListCard.jsx";

export default function MyProfile() {
  const [activeCard, setActiveCard] = useState("");

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-16">
      <div className="main-content w-full max-w-screen-xl mx-auto p-4 bg-gray-100 py-8 pb-24 md:pb-5">
        <div className="bg-primary-800 pt-3">
          <div className="bg-primary-600 p-4 shadow text-2xl text-white">
            <h3 className="font-bold pl-2">My Profile</h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-start">
          <div
            className="w-full md:w-1/2 xl:w-1/3 p-6"
            onClick={() => handleCardClick("revenue")}
          >
            {/* start Green Metric */}
            <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-2 bg-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 1C11.866 1 15 2.56689 15 4.5V6C15 6.55228 14.5523 7 14 7H13C11.7295 7.64819 9.95868 8 8 8C6.04132 8 4.27051 7.64819 3 7V8.5C3 9.22569 4.71803 9.83109 7.00053 9.97002C7.55179 10.0036 8 10.4477 8 11C8 11.5523 7.55166 12.0038 7.0005 11.9686C5.44274 11.8692 4.05039 11.5359 3 11V12.5C3 13.2257 4.71803 13.8311 7.00053 13.97C7.55179 14.0036 8 14.4477 8 15C8 15.5523 7.55132 16.004 7.00044 15.9646C3.60793 15.7221 1 14.2634 1 12.5V4.5C1 2.56689 4.134 1 8 1ZM3 4.5C3 3.67163 5.23859 3 8 3C10.7614 3 13 3.67163 13 4.5C13 5.32837 10.7614 6 8 6C5.23859 6 3 5.32837 3 4.5Z"
                        fill="#dcfce7"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23 11.5C23 9.567 19.866 8 16 8C12.134 8 9 9.567 9 11.5V19.5C9 21.433 12.134 23 16 23C19.866 23 23 21.433 23 19.5V11.5ZM11 19.5C11 20.3284 13.2386 21 16 21C18.7614 21 21 20.3284 21 19.5V18C19.7295 18.6483 17.9587 19 16 19C14.0413 19 12.2705 18.6483 11 18V19.5ZM16 17C13.2386 17 11 16.3284 11 15.5V14C12.2705 14.6483 14.0413 15 16 15C17.9587 15 19.7295 14.6483 21 14V15.5C21 16.3284 18.7614 17 16 17ZM16 10C13.2386 10 11 10.6716 11 11.5C11 12.3284 13.2386 13 16 13C18.7614 13 21 12.3284 21 11.5C21 10.6716 18.7614 10 16 10Z"
                        fill="#dcfce7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    Trading Orders
                  </h5>
                  <h3 className="font-bold text-3xl">
                    5 orders
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* end Green Metric */}
          </div>

          <div
            className="w-full md:w-1/2 xl:w-1/3 p-6"
            onClick={() => handleCardClick("wishList")}
          >
            {/* start Yellow Metric */}
            <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-2 bg-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10 16H3"
                        stroke="#fef9c3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="#fef9c3"
                      />
                      <path
                        d="M9 11H3"
                        stroke="#fef9c3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="#fef9c3"
                      />
                      <path
                        d="M16.4901 16.3082L16.935 15.7045L16.935 15.7045L16.4901 16.3082ZM17.5 10.1062L16.9641 10.6309C17.1052 10.775 17.2983 10.8562 17.5 10.8562C17.7017 10.8562 17.8948 10.775 18.0359 10.6309L17.5 10.1062ZM18.5099 16.3083L18.9549 16.912L18.9549 16.912L18.5099 16.3083ZM17.5 16.8103L17.5 16.0603H17.5L17.5 16.8103ZM16.935 15.7045C16.2914 15.2302 15.4675 14.5568 14.8118 13.808C14.1328 13.0325 13.75 12.3064 13.75 11.7148H12.25C12.25 12.8758 12.9489 13.9574 13.6832 14.7961C14.4409 15.6614 15.3619 16.4085 16.0451 16.912L16.935 15.7045ZM13.75 11.7148C13.75 10.607 14.2445 10.0237 14.7533 9.83348C15.2705 9.6401 16.0951 9.74331 16.9641 10.6309L18.0359 9.58145C16.88 8.40091 15.4546 7.96984 14.228 8.42849C12.993 8.89028 12.25 10.1453 12.25 11.7148H13.75ZM18.9549 16.912C19.6381 16.4085 20.5591 15.6614 21.3168 14.7961C22.0511 13.9574 22.75 12.8758 22.75 11.7148H21.25C21.25 12.3064 20.8672 13.0326 20.1882 13.808C19.5325 14.5568 18.7086 15.2302 18.065 15.7045L18.9549 16.912ZM22.75 11.7148C22.75 10.1453 22.007 8.89027 20.772 8.42849C19.5454 7.96985 18.12 8.40091 16.9641 9.58145L18.0359 10.6309C18.9049 9.74331 19.7295 9.6401 20.2467 9.83348C20.7555 10.0237 21.25 10.607 21.25 11.7148H22.75ZM16.0451 16.912C16.4368 17.2007 16.8752 17.5603 17.5 17.5603L17.5 16.0603C17.4852 16.0603 17.4682 16.0626 17.399 16.0252C17.3008 15.972 17.178 15.8836 16.935 15.7045L16.0451 16.912ZM18.065 15.7045C17.822 15.8836 17.6992 15.972 17.601 16.0252C17.5318 16.0626 17.5148 16.0603 17.5 16.0603L17.5 17.5603C18.1248 17.5603 18.5632 17.2007 18.9549 16.912L18.065 15.7045Z"
                        fill="#fef9c3"
                      />
                      <path
                        d="M20 6L9.5 6M3 6L5.25 6"
                        stroke="#fef9c3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    Wishlist
                  </h5>
                  <h3 className="font-bold text-3xl">
                    2 coins
                    <span className="text-yellow-600">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* end Yellow Metric */}
          </div>

          <div
            className="w-full md:w-1/2 xl:w-1/3 p-6"
            onClick={() => handleCardClick("account")}
          >
            {/* start Basic Metric */}
            <div className="bg-gradient-to-b from-primary-200 to-primary-100 border-b-4 border-primary-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-2 bg-primary-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995zM6.357 18h11.49a6.992 6.992 0 0 0-5.745-3 6.992 6.992 0 0 0-5.745 3zM12 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                          fill="#e0f2fe"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    Account Details
                  </h5>
                  <h3 className="font-bold text-3xl">Newbie</h3>
                </div>
              </div>
            </div>
            {/* end Basic Metric */}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-xl">
          {activeCard === "revenue" && 
            <div>
              <Table />
            </div>}
          {activeCard === "wishList" && (
            <div className="flex w-full max-w-screen-xl mx-auto items-center justify-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6">
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
              <WishlistCard />
            </div>
            </div>
          )}
          {activeCard === "account" && 
            <div>
            
              Account Details: ...
            </div>}
        </div>
      </div>
    </div>
  );
}
