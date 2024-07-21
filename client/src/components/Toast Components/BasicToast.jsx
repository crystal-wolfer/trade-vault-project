import useToastTimer from "../../hooks/useToastTimer.js";

export default function BasicToast() {
  const { showToast, timeLeft, handleClose } = useToastTimer(2);

  return (
    <div>
      {showToast && (
        <div
          id="toast-bottom-right"
          className="fixed flex flex-col items-center justify-between w-full max-w-xs p-4 space-x-2 text-gray-500 bg-white border-2 border-gray-300 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-800 mx-8"
          role="alert"
        >
          <div className="flex flex-row items-center w-full">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-primary-500 bg-primary-100 rounded-lg dark:bg-primary-800 dark:text-primary-200">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 23 23"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 6.34267C17.35 4.30367 14.8273 3 12 3C7.02944 3 3 7.02944 3 12C3 13.8501 3.55827 15.5699 4.51555 17M21 12C21 16.9706 16.9706 21 12 21C10.961 21 9.96308 20.8239 9.03452 20.5M12 16H13C13.6667 16 15 15.6 15 14C15 12.4 13.6667 12 13 12H11C10.3333 12 9 11.6 9 10C9 8.4 10.3333 8 11 8H12M12 16H9M12 16V18M15 8H12M12 8V6"
                />
              </svg>
              <span className="sr-only">Fire icon</span>
            </div>
            <div className="ms-3 text-sm font-normal flex-1 text-left">
              This is example messge!
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
