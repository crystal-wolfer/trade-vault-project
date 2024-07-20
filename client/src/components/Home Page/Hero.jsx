export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-16 sm:py-8 mx-auto">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 sm:pt-16">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-6 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white font-extrabold">
            Own your crypto adventure!
          </h1>
          <p className="max-w-2xl mb-6 font-normal text-slate-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Grow and manage your crypto portfolio with our easy to use interface. <span className="text-gray-800 font-medium">Start trading crypto today with just $10.</span>
          </p>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center btn-primary"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
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
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex pt-8">
          <img
            src="https://www.ionixxtech.com/assets/img/data-img/crypto-trading.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}
