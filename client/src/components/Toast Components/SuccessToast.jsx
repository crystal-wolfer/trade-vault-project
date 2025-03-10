import useToastTimer from "../../hooks/useToastTimer.js";

export default function SuccessToast({message}) {
  const { showToast, timeLeft, handleClose } = useToastTimer(1);

   if (!message) return null; 

  return (
    <div>
      {showToast && (
        <div
          id="toast-bottom-right"
          className="fixed flex flex-col items-center justify-between w-full max-w-xs p-4 space-x-2 text-gray-500 bg-white border-2 border-gray-300 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-800 mx-8"
          role="alert"
        >
          <div className="flex flex-row items-center w-full">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-800 bg-green-100 rounded-lg dark:bg-green-900 dark:text-green-300">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal flex-1 text-left">
              {message}
            </div>
            <button
              type="button"
              className="ms-auto -mx-2 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-default"
              aria-label="Close"
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
            <div
              className="h-full bg-primary-500 rounded-full dark:bg-primary-700"
              style={{ width: `${(timeLeft / 2) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
