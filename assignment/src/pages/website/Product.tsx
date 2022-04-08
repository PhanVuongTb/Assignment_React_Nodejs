import React from 'react'
import { Card } from 'react-bootstrap';
import { ProductType } from '../types/productType'

type ProductProps = {
  products: ProductType[],
}

const ProductPage = (products: ProductProps) => {
  console.log(products);

  return (
    <div>
      {products.products?.map((item) => {
        return (
          <div className="container" style={{ paddingTop: '30px', paddingBottom: "20px" }}>
            <Card.Title className="text text-center" ><h1>Sản phẩm mới</h1></Card.Title>
            <Card className="col-md-6 col-lg-3 border border-white">
              <a href="">
                <Card.Body>
                  <Card.Img src='images/product-1.jpg' style={{ width: '100%' }} />
                  <Card.Title className="text py-3 pb-4 px-3 text-center" >Bell Pepper</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-center">$120.00</Card.Subtitle>
                  <div className="bottom-area d-flex px-3">
                    <div className="m-auto d-flex">
                      <Card.Link href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      </Card.Link>
                      <Card.Link href="#" className="buy-now d-flex justify-content-center align-items-center mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                      </Card.Link>
                      <Card.Link href="#" className="buy-now d-flex justify-content-center align-items-center mx-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg></span>
                      </Card.Link>
                    </div>
                  </div>
                </Card.Body>
              </a>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default ProductPage;