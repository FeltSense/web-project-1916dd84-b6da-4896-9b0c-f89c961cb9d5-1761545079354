export default function Pricing() {
  return (
    ```jsx
<section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu Packages</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Choose the perfect dining experience for your occasion
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Casual Bites */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-amber-500 transition-all duration-300 hover:shadow-xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Casual Bites</h3>
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-5xl font-bold text-amber-600">$25</span>
            <span className="text-gray-600">/person</span>
          </div>
          <p className="text-gray-600">Perfect for quick lunches and casual gatherings</p>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Choice of 2 appetizers</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">1 main course</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Soft drinks included</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Fresh salad bar access</span>
          </li>
        </ul>
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
          Select Package
        </button>
      </div>

      {/* Chef's Selection - Featured */}
      <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl shadow-2xl p-8 border-2 border-amber-500 transform lg:scale-105 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-white text-amber-700 font-bold px-4 py-1 rounded-full text-sm shadow-lg">
            MOST POPULAR
          </span>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Chef's Selection</h3>
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-5xl font-bold text-white">$45</span>
            <span className="text-amber-100">/person</span>
          </div>
          <p className="text-amber-50">Our signature dining experience</p>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Choice of 4 appetizers</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">2 main courses</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Dessert selection</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Premium beverages</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Complimentary wine pairing</span>
          </li>
        </ul>
        <button className="w-full bg-white hover:bg-gray-100 text-amber-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
          Select Package
        </button>
      </div>

      {/* Gourmet Experience */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-amber-500 transition-all duration-300 hover:shadow-xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Gourmet Experience</h3>
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-5xl font-bold text-amber-600">$75</span>
            <span className="text-gray-600">/person</span>
          </div>
          <p className="text-gray-600">Luxury dining for special occasions</p>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Unlimited appetizer selection</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">3-course tasting menu</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Premium dessert platter</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Sommelier wine selection</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Private dining area</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Dedicated server</span>
          </li>
        </ul>
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
          Select Package
        </button>
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-gray-600 mb-4">All packages can be customized to accommodate dietary restrictions</p>
      <a href="#contact" className="text-amber-600 hover:text-amber-700 font-semibold underline">
        Contact us for group bookings and custom menus
      </a>
    </div>
  </div>
</section>
  );
}