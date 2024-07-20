export default function NavBar() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We’ve been around the block
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            TradeVault has been innovating since 2013, and remains a trusted guide in the crypto space.
            Our team spent the last decade building products that remove operational and technical complexities out of crypto.
          </p>
        </div>
        {/* Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Item */}
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">1.5M+</h3>
            <p className="text-base text-gray-500">
              Registered users actively using every day
            </p>
            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          {/* Item */}
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">41.7M</h3>
            <p className="text-base text-gray-500">
              Purchases completed by customers in 2021
            </p>
            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          {/* Item */}
          <div className="p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">30+</h3>
            <p className="text-base text-gray-500">
              Licenses and registrations around the world
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

