import React from 'react'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarWeb from "../clients/Navbar"
import Banner from "../clients/Banner"
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div className="py-1 bg-success" >
          <div className="container " style={{maxHeight: "25px"}}>
            <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                    <span className="text-white">+ 0986977365</span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                    <span className="text-white">vegefoods@gmail.com.vn</span>
                  </div>
                  <div className="col-md-5 pr-4 d-flex align-items-center">
                    <span className="text-white" ><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" /></svg> 30 - Phan Trọng Tuệ - Phùng Hưng - Hà Đông - Hà Nội</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{paddingTop: "5px"}}>
          <NavbarWeb />
        </div>
        <div style={{paddingTop: "5px"}}>
          <Banner />
        </div>
    </div>
  )
}

export default Header