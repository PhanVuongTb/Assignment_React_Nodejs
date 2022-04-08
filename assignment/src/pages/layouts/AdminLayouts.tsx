import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/admins/Footer'
type Props = {}
import { Form, FormControl, Dropdown, Button } from "react-bootstrap"

const AdminLayouts = (props: Props) => {
  return (
    <div>
      <div id="wrapper">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
          </a>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area" />
              <span>Charts</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table" />
              <span>Tables</span></a>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">
            Quản Lý Sản Phẩm - Đơn Hàng
          </div>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/category" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <span>Category</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/product" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <span>Products</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/cart" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <span>Cart</span>
            </a>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">
            Quản Lý Blog - Bình Luận
          </div>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/post" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <span>Bài Viết</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/post" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <span>Bình luận</span>
            </a>
          </li>
          <hr className="sidebar-divider" />

          <div className="sidebar-heading">
            Quản Tài khoản
          </div>

          <li className="nav-item">
            <a className="nav-link collapsed" href="user" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <span>Tài khoản</span>
            </a>
          </li>
        </ul>
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

              {/* Topbar Search */}
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                </li>
                {/* Nav Item - Alerts */}
                <li className="nav-item dropdown no-arrow mx-1">
                </li>
                {/* Nav Item - Messages */}
                <li className="nav-item dropdown no-arrow mx-1">
                </li>
                <div className="topbar-divider d-none d-sm-block" />
                <li className="nav-item dropdown no-arrow">
                  <Dropdown>
                    <Dropdown.Toggle>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Thông tin tài khoản</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <main style={{ padding: "10px", }}>
              <Outlet />
            </main>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}

      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default AdminLayouts