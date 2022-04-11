import React from 'react'
import {Outlet} from 'react-router-dom'
import Banner from '../../Components/Website/Banner'
import Footer from '../../Components/Website/Footer'
import Headers from '../../Components/Website/Header'
type Props = {}

const WebsiteLayount = (props: Props) => {
  return (
    <div>
      <header>
        <Headers/>
      </header>
      <div>
        <Banner/>
      </div>
      <main>
      <Outlet/>    
      </main>
      <footer>
        <Footer/>
      </footer>

    </div>
  )
}

export default WebsiteLayount