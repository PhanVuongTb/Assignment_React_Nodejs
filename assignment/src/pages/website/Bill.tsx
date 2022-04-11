import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Bill = (props: Props) => {
  return (
    <div>
      <div className="m-20 ">
    <div className="mt-10 sm:mt-0">
      <div className="mt-5 md:mt-0 md:col-span-2">

        <div className="shadow overflow-hidden sm:rounded-md">
        <form action="#" method="POST" id="form-add-category">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" autoComplete="given-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label  className="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" name="email" id="email" autoComplete="email"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
              <div className="col-span-6">
                <label  className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" name="address" id="street-address" autoComplete="street-address"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label  className="block text-sm font-medium text-gray-700">Phone number</label>
              <input type="number" name="phoneNumber" id="phoneNumber" autoComplete="phoneNumber"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>  
          </div>
          </form>
        </div>
      </div>
    </div>
    <div className="">
      <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
             Bill
            </h2>
            <div className="ml-3 h-7 flex items-center">
              <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close panel</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-8">

          <div className="flow-root">
            <div role="list" className="-my-6 divide-y divide-gray-200">
              <div className="py-6 flex">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img src=""
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    className="w-full h-full object-center object-cover"/>
                </div>

                <div className="ml-4 flex-1 flex flex-col">

                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">
                        </a>
                      </h3>
                      <p className="ml-4">
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Salmon
                    </p>
                  </div>
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <p className="text-gray-500">
                    </p>

                    <div className="flex">
                      <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                  </div>
                </div>
                
              </div>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <p className="mt-0.5 text-sm text-gray-500">Shipping tax is charged at checkout.</p>
            <div className="mt-6">
              <NavLink to="notification"
                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Payment</NavLink>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
              </p>
            </div>
          </div>
          </div>
         
        </div>
        </div>
      
      </div>
    </div>


</div>
</div>
  )
}

export default Bill