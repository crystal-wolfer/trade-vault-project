export default function WishlistCard({ logo, name, symbol, price, change }) {
   logo = "https://cryptologos.cc/logos/avalanche-avax-logo.png";
   name = "Avalanche"
   symbol = "AVAX"
   price = "32.35"
   change = "-0.35"

  return (
    <div className="w-48 h-48 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
        <div className="flex justify-center mb-4">
          <div className="bg-orange-500 p-3 rounded-full">
            <img
              src={logo}
              alt={`${name} Logo`}
              className="h-8 w-8"
            />
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{symbol} {price}</p>
        <div className={`flex items-center justify-center font-semibold mt-4 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 ? (
            <svg className="h-7 w-7 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          ) : (
            <svg className="h-7 w-7 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          )}
          <span className="text-xl">{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
};