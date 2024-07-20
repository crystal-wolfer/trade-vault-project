import { Link } from "react-router-dom";

export default function About() {

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4 font-normal">
            At TradeVault, we combine strategic insight with cutting-edge design
            and development to provide a trading platform that meets your
            highest standards. Whether you’re a novice trader or a seasoned
            professional, our commitment is to support you with the tools and
            services you need to succeed in the dynamic world of cryptocurrency.
          </p>
          <p className="mb-4 font-normal">
            Innovators and problem solvers. Agile enough to adapt swiftly, yet
            powerful enough to offer the expansive features you require. Join
            TradeVault and trade with confidence.
          </p>

          <div className="py-8 lg:py-4">
            <Link to="/register">
              <button
                type="button"
                className="w-64 text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium border-solid border-2 border-primary-800 rounded text-m px-4 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Join TradeVault now!
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
