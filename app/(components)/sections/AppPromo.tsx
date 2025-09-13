import React from 'react';

const AppPromo = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
        </div>
        <div>
          <h2 className="text-4xl font-bold">Get the latest information, promotions, and other interesting events by our mobile apps.</h2>
          <p className="mt-4">Discover our apps.</p>
          <div className="flex gap-4 mt-6">
            <button className="bg-black p-3 rounded-lg">Google Play</button>
            <button className="bg-black p-3 rounded-lg">App Store</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;