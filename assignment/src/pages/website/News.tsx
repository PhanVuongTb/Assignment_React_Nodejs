import React from 'react'

type Props = {}

const News = (props: Props) => {
  return (
    <div>      <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 className="text-2xl font-extrabold text-gray-900">Promotional information</h2>
  
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="https://conversestore.vn/wp-content/uploads/2021/08/z2423505633937_7a6af78d2f2ea37a1f19a943d0c0bd04-1905x2106.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="#">
                <span className="absolute inset-0"></span>
                20% off men's shoes
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Promotion is applied to all men's footwear products... </p>
          </div>
  
          <div className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="https://conversestore.vn/wp-content/uploads/2021/08/z2663589833856_f5d1ef64e15c9d76eb3f136322074727-1.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full h-full object-center object-cover"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="#">
                <span className="absolute inset-0"></span>
                Buy 5 get 1 free
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">When customers buy online, they will be offered incentives with 5 products poured on...</p>
          </div>
  
          <div className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="https://conversestore.vn/wp-content/uploads/2021/08/z2644602791267_94721f2a732dc8de9f7b280946643c99-1905x2106.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full h-full object-center object-cover"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="#">
                <span className="absolute inset-0"></span>
                Free ship
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Free shipping with products from 1,000,000, customers will be free...</p>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default News