import { useState } from "react";

import MarketOverview from "../Market Overview Page/MarketOverview.jsx";

export default function MyProfile() {
  const [activeCard, setActiveCard] = useState(""); // Initial state is empty

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
          <div className="w-full md:w-1/2 xl:w-1/3 p-6" onClick={() => handleCardClick('revenue')}>
            {/* start Green Metric */}
            <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-green-600">
                    <i className="fa fa-wallet fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    Total Revenue
                  </h5>
                  <h3 className="font-bold text-3xl">
                    $3249{" "}
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* end Green Metric */}
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6" onClick={() => handleCardClick('users')}>
            {/* start Red Metric */}
            <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-pink-600">
                    <i className="fas fa-users fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    Total Users
                  </h5>
                  <h3 className="font-bold text-3xl">
                    249{" "}
                    <span className="text-pink-500">
                      <i className="fas fa-exchange-alt"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* end Red Metric */}
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6" onClick={() => handleCardClick('newUsers')}>
            {/* start Yellow Metric */}
            <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-yellow-600">
                    <i className="fas fa-user-plus fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    New Users
                  </h5>
                  <h3 className="font-bold text-3xl">
                    2{" "}
                    <span className="text-yellow-600">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* end Yellow Metric */}
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6" onClick={() => handleCardClick('uptime')}>
            {/* start Basic Metric */}
            <div className="bg-gradient-to-b from-primary-200 to-primary-100 border-b-4 border-primary-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-primary-600">
                    <i className="fas fa-server fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    Server Uptime
                  </h5>
                  <h3 className="font-bold text-3xl">152 days</h3>
                </div>
              </div>
            </div>
            {/* end Basic Metric */}
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6" onClick={() => handleCardClick('uptime')}>
            {/* start Basic Metric */}
            <div className="bg-gradient-to-b from-primary-200 to-primary-100 border-b-4 border-primary-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-primary-600">
                    <i className="fas fa-server fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    Server Uptime
                  </h5>
                  <h3 className="font-bold text-3xl">152 days</h3>
                </div>
              </div>
            </div>
            {/* end Basic Metric */}
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6" onClick={() => handleCardClick('uptime')}>
            {/* start Basic Metric */}
            <div className="bg-gradient-to-b from-primary-200 to-primary-100 border-b-4 border-primary-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-primary-600">
                    <i className="fas fa-server fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-right">
                  <h5 className="font-bold uppercase text-gray-600">
                    Server Uptime
                  </h5>
                  <h3 className="font-bold text-3xl">152 days</h3>
                </div>
              </div>
            </div>
            {/* end Basic Metric */}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-xl">
          {activeCard === "revenue" && <div><MarketOverview/></div>}
          {activeCard === "users" && <div>User Details: ...</div>}
          {activeCard === "newUsers" && <div>New Users Details: ...</div>}
          {activeCard === "uptime" && <div>Server Uptime Details: ...</div>}
        </div>
      </div>
    </div>
  );
}
