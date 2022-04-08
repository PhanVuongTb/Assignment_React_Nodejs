import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright © Your Website 2022</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer