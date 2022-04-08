import React from 'react'
import { ProductType } from '../../types/productType'
import { Link, NavLink } from 'react-router-dom';


type ProductManagerProps = {
  products: ProductType[],
  onRemove: (id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  // console.log(products);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
          <h2>Section title</h2>

          <button><a className='btn btn-primary' href="/admin/product/add">Add</a></button>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.category}</td>
                      <td>{product.name}</td>
                      <td><img src={product.image} alt="" style={{ maxWidth: "20%" }} /></td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>
                        <Link className='btn btn-danger' to={`${product._id}/edit`} >Edit</Link>
                      </td>
                      <td>
                        <button className='btn btn-primary' onClick={() => onRemove(product._id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}





              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductManager