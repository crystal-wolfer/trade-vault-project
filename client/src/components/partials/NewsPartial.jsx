export default function NewsPartial({
  title,
  preview,
  publisher,
  url,
}){
  return(
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <div className="flex-grow">
              <div className="flex-col content-start">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex content-start">
                  <a href="#">
                    {title}
                  </a>
                </h2>
                <p className="mb-5 font-normal text-gray-500 dark:text-gray-400">
                  {preview}
                </p>
              </div>
            </div>
            <div id="items" className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7"
                  src="news.svg"
                  alt="Publisher avatar"
                />
                <span className="font-medium dark:text-white">{publisher}</span>
              </div>
              <a
                href={url}
                className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
    
  )
}