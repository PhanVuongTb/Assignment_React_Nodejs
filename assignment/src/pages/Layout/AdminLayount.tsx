import React from 'react'
import HeaderAdmin from '../../Components/Admin/HeaderAdmin';

import { Outlet } from 'react-router-dom'
import SliderAdmin from '../../Components/Admin/Slider';
import Footer from '../../Components/Admin/footer';

type Props = {}

const AdminLayount = (props: Props) => {

  return (
    <div>
      <div className="h-screen flex flex-row flex-wrap">
        <SliderAdmin />
        <div className="bg-gray-100 flex-1">
          <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <HeaderAdmin />
          </header>
          <main className='p-[10px]'>
            <Outlet />
          </main>
        </div>

      </div>
    </div >
  )
}

export default AdminLayount