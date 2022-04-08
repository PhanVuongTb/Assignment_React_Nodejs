import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

type ProductType = {
  _id?: number,
  name: String,
  image: String,
  price: number,
  description: String,
  detail: String,
  category: String
}

const ProductDetail = (props: Props) => {

  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>(); // 1

  useEffect(() => { // 3
    const getProduct = async () => {
      const response = await fetch('http://localhost:8000/api/product/' + id);
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, []);



  return (
    <>
      <section className="ftco-section" style={{ paddingTop: "20px" }}>
        <div className="container">
          <h3 style={{ paddingBottom: "20px" }}>
            Chi Tiết Sản Phẩm
          </h3>
          <div className="row">
            <div className="col-lg-6 mb-5 ftco-animate">
              <a href="" className="image-popup">
                <img src={product?.image} className="img-fluid" alt="Colorlib Template" />
              </a>
            </div>
            <div className="col-lg-6 product-details pl-md-5 ftco-animate">
              <h3 style={{ fontWeight: "600" }}>{product?.name}</h3>
              <p className="price" style={{ fontWeight: "500" }}><span>{product?.price}$</span></p>
              <p>{product?.description}</p>
              <p>{product?.detail}</p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon"><span className="ion-ios-arrow-down" /></div>
                    </div>
                  </div>
                </div>
                <div className="input-group col-md-6 d-flex mb-3" style={{ paddingTop: "10px" }}>
                  <span className="input-group-btn mr-2">
                    <button type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                    </button>
                  </span>
                  <input type="text" id="quantity" name="quantity" className="form-control input-number col-md-6" defaultValue={1} min={1} max={100} />
                  <span className="input-group-btn ml-2">
                    <button type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                    </button>
                  </span>
                </div>
              </div>
              <p><a href="cart.html" className="btn btn-black" style={{ background: "#fff" }}>Add to Cart</a></p>
            </div>
          </div>
          <div>
            <h3>
              Bình Luận
            </h3>
            <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail