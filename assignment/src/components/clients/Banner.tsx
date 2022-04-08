import React from 'react'
import { Card } from "react-bootstrap";

type Props = {}

const Banner = (props: Props) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Card className="bg-dark text-white" >
        <Card.Img src="https://media.cooky.vn/images/blog-2016/5-cach-chon-rau-cu-qua-tuoi-ngon-2.jpg" alt="Card image" />
        <Card.ImgOverlay className="col-md-12 ftco-animate text-center" style={{ paddingTop: "180px" }}>
          <Card.Text>
            <h2 className="mb-2 text-white">Chúng tôi phục vụ Rau tươi &amp; Trái cây</h2>
            <h3 className="subheading mb-4 text-white">Chúng tôi cung cấp rau hữu cơ &amp; Trái cây</h3>
          </Card.Text>
          <a href="#" className="btn btn-primary">Xem chi tiết</a>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Banner