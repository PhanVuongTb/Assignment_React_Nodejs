import React from 'react'
import { categoryType } from '../../types/categoryType'
import { Link, NavLink } from 'react-router-dom';

type CategoryManagerProps = {
  categorys: categoryType[],
  onRemove: (id: number) => void
}

const CategoryManager = ({ categorys, onRemove }: CategoryManagerProps) => {
  return (
    <div className="container-fluid">
      <div className="row">
        
      </div>
      <div className="row">
        <div className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <h2>Section title</h2>

          <Link className='btn btn-primary' to="add">Add</Link>
          <div className="table-responsive" style={{ paddingTop: "10px" }}>
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {categorys?.map((category, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{category.name}</td>
                      <td>
                        <Link className='btn btn-primary' to={`${category._id}/edit`}>Edit</Link>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={() => onRemove(category._id)}>Delete</button>
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

export default CategoryManager