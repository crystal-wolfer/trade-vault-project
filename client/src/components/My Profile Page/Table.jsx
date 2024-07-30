import { useState } from "react";
import timeStampTranform from "../../util/timeStampTransform.js";
import * as serverDataAPI from "../../API/serverDataAPI.js";


import EditOrderModal from "../partials/EditOrderModal.jsx";
import DeleteOrderModal from "../partials/DeleteOrderModal.jsx";

function Table({ coins, refreshCoins, ownerId, setCoins }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleOpenEditModal = (coin) => {
    setSelectedCoin(coin);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setSelectedCoin(null);
    setShowEditModal(false);
  };

  const handleOpenDeleteModal = (coin) => {
    setSelectedCoin(coin);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setSelectedCoin(null);
    setShowDeleteModal(false);
  };

  
  return (
    <>
      {/* Start block */}
      <section className="block bg-white dark:bg-gray-900 sm:py-8 mx-auto antialiased">
        {/* Conditional rendering */}
        {coins.length > 0 ? (
          <div className="mx-auto max-w-screen-xl px-4shadow-md sm:rounded-lg">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
                <div className="w-full md:w-1/2">
                  <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        placeholder="Search for coins"
                        required=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                  </form>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  <button
                    type="button"
                    id="refreshCoins"
                    onClick={refreshCoins}
                    className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    <svg
                      className="h-3.5 w-3.5 mr-1.5 -ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Refresh Table
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4">
                        Coin name
                      </th>
                      <th scope="col" className="p-4">
                        Symbol
                      </th>
                      <th scope="col" className="p-4">
                        Paid
                      </th>
                      <th scope="col" className="p-4">
                        Amount
                      </th>
                      <th scope="col" className="p-4">
                        Order placed on
                      </th>
                      <th scope="col" className="p-4">
                        Order updated on
                      </th>
                      <th scope="col" className="p-4">
                        Notes
                      </th>
                      <th scope="col" className="p-4">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row with data*/}
                    {coins.map((coin) => {
                      return (
                        <tr
                          key={coin._id}
                          className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className="flex items-center mr-3">
                              {coin.name}
                            </div>
                          </th>
                          <td className="px-4 py-3">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                              {coin.symbol}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                              $ {coin.paid}
                            </div>
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {coin.amount}
                          </td>

                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {timeStampTranform(coin._createdOn)}
                          </td>

                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {coin._updatedOn &&
                              timeStampTranform(coin._updatedOn)}
                          </td>

                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {coin.note}
                          </td>

                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center space-x-4">
                              <button
                                type="button"
                                onClick={() => handleOpenEditModal(coin)}
                                data-drawer-target="drawer-update-product"
                                data-drawer-show="drawer-update-product"
                                aria-controls="drawer-update-product"
                                className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-2 -ml-0.5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => handleOpenDeleteModal(coin)}
                                data-modal-target="delete-modal"
                                data-modal-toggle="delete-modal"
                                className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-2 -ml-0.5"
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
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <h3 className="mb-2 text-center text-2xl font-bold tracking-tight text-primary-800 dark:text-white">
            You haven't made any orders yet!
          </h3>
        )}
      </section>
      {/* End block */}

      {/* Edit Order Modal  */}

      <EditOrderModal
        show={showEditModal}
        onClose={handleCloseEditModal}
        coin={selectedCoin}
        ownerId={ownerId}
      />

      {/* Delete Modal */}
      <DeleteOrderModal
        show={showDeleteModal}
        onClose={handleCloseDeleteModal}
        coin={selectedCoin}
      />
    </>
  );
}

export default Table;
