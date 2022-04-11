import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div><div>
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Contanc</h3>
          <p className="mt-1 text-sm text-gray-600">Please let us know what you are not satisfied with about the product.</p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700"> Name </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> Name </span>
                    <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder='name'/>
                  </div>
                </div>
              </div>
  
              <div>
                <label  className="block text-sm font-medium text-gray-700"> Email </label>
                <div className="mt-1">
                  <textarea id="about" name="about"  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder='you@example.com'></textarea>
                </div>
              </div>
 
              <div>
                <label className="block text-sm font-medium text-gray-700"> product pictures</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only"/ >
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
                <label  className="block text-sm font-medium text-gray-700">Reflective content </label>
                <div className="mt-1">
                  <textarea id="about" name="about"  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">What are you not satisfied with?</p>
              </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  <div className="hidden sm:block" aria-hidden="true">
    <div className="py-5">
      <div className="border-t border-gray-200"></div>
    </div>
  </div>

  <div className="hidden sm:block" aria-hidden="true">
    <div className="py-5">
      <div className="border-t border-gray-200"></div>
    </div>
  </div>
  
  <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
          <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <fieldset>
                <legend className="text-base font-medium text-gray-900">By Email</legend>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                    <div className="ml-3 text-sm">
                      <label  className="font-medium text-gray-700">Comments</label>
                      <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="candidates" name="candidates" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                    <div className="ml-3 text-sm">
                      <label  className="font-medium text-gray-700">Candidates</label>
                      <p className="text-gray-500">Get notified when a candidate applies htmlFor a job.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="offers" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                    <div className="ml-3 text-sm">
                      <label  className="font-medium text-gray-700">Offers</label>
                      <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div>
                  <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                  <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    <label  className="ml-3 block text-sm font-medium text-gray-700"> Everything </label>
                  </div>
                  <div className="flex items-center">
                    <input id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    <label  className="ml-3 block text-sm font-medium text-gray-700"> Same as email </label>
                  </div>
                  <div className="flex items-center">
                    <input id="push-nothing" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    <label  className="ml-3 block text-sm font-medium text-gray-700"> No push notifications </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default Contact