export default function NotFound() {
  return (
    <section>
      {/* Container */}
      <div className="px-2 py-24 md:px-10 md:py-24">
        {/* Component */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
            alt=""
            className="mx-auto mb-8 inline-block h-72 w-72 flex-none object-cover"
          />
          <h1 className="mb-4 text-2xl font-bold md:text-2xl text-primary-500">
            404 Not Found!
          </h1>
          <p className="mx-auto pb-6 mb-5 max-w-lg text-3xl text-gray-900 sm:text-3xl md:mb-6 lg:mb-8">
            Whoops! That page doesnt exist.
          </p>
          <p className="mx-auto mb-2 max-w-lg text-base text-gray-600 sm:text-base md:mb-6 lg:mb-4">
            Here are some useful links instead:
          </p>
          <ul className="flex flex-col text-base font-normal md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="underline underline-offset-4 block py-2 px-3 md:p-0 text-gray-700 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
              Home
              </a>
            </li>
            <li>
              <a
                href="/market-overview"
                className="underline underline-offset-4 block py-2 px-3 md:p-0 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                
              >
                Market Overview
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
