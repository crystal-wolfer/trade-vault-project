import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import * as cryptoAPI from "../../API/cryptoAPI.js";
import * as serverDataAPI from "../../API/serverDataAPI.js";
import SuccessToast from "../Toast Components/SuccessToast.jsx";
import useMessage from "../../hooks/useMessage.js";

function EditOrderModal({ show, onClose, coin, ownerId }) {
  if (!show) return null;
  const [amount, setAmount] = useState(coin.amount);
  const [note, setNote] = useState(coin.note);
  const [price, setPrice] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useMessage();

  const id = coin.key;
  const serverId = coin._id;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cryptoAPI.getCoinInfo(id);
        const number = Number(data.priceUsd).toFixed(2);
        setPrice(number);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const checkKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const amountChange = (event) => {
    const input = event.target.value;
    const value = Number(input);
    setAmount(value);
  };

  const editOrderHandler = async (data) => {
    const obj = {
      amount: data.amount,
      paid: (price * amount).toFixed(2),
      note: data.note,
    };

    try {
      const result = await serverDataAPI.editCoin(serverId, obj);
      setSuccess(true);
      setMessage("Order updated!");
      await serverDataAPI.getMyCoins(ownerId)
      setTimeout(() => {
        onClose();
      }, 2500);
    } catch (err) {
      console.log(err);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-8 w-full max-w-3xl h-full md:h-auto mt-20">
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Order
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <form
            onSubmit={handleSubmit(editOrderHandler)}
            onKeyDown={(e) => checkKeyDown(e)}
          >
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white disa"
                >
                  Coin Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  disabled
                  value={coin.name}
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount to get
                </label>
                <input
                  {...register("amount", {
                    required: "You must enter amount",
                  })}
                  type="text"
                  name="amount"
                  id="amount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={coin.amount}
                  onChange={amountChange}
                />
                {errors.amount && (
                  <p className="text-red-500 text-sm m-2">
                    {errors.amount.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Estimated Price
                </label>
                <input
                  {...register("price")}
                  type="text"
                  name="price"
                  id="price"
                  disabled
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-400 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={`$ ${(price * Number(amount)).toFixed(2)}`}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Trader's notes
                </label>
                <input
                  id="note"
                  {...register("note")}
                  type="text"
                  name="note"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-400 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={note}
                  placeholder="Add a note..."
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Update Order"}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 focus:z-10 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {message && <SuccessToast message={message} />}
    </div>
  );
}

export default EditOrderModal;
