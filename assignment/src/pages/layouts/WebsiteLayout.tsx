import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/clients/Footer'
import Header from '../../components/clients/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default WebsiteLayout