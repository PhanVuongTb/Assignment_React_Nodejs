import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/product';
import { ProductType } from '../../types/productType';
import { categoryType } from "../../types/categoryType"
import { listcategory } from '../../../api/category';
type ProductEditProps = {
  onUpdate: (product: ProductType) => void
}
type FormInputs = {
  name: String,
  image: String,
  price: number,
  description: String,
  detail: String,
  category: String

}

const ProductEdit = (props: ProductEditProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  const [categorys, setCategorys] = useState<categoryType[]>([])
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data)
    }
    getProduct();
  }, []);

  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listcategory();
      console.log(data);

      setCategorys(data)
    }
    getCategorys();
  }, []);

  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdate(data);
    navigate('/admin/product')
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <form className="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-4" action="" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sửa Sản Phẩm</h1>
          <div className="w-full  mb-[10px]">
            <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Category</label>
            <select {...register('category', { required: true })} className="w-full border bg-white rounded px-3 py-2 outline-none">
              <option className="py-1">Categorys</option>
              {categorys && categorys.map((item, index) => {
                return <option key={index} className="py-1" value={item.name}>{item.name}</option>
              })}
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" {...register('name', { required: true })} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Image</span>
            <input type="text" {...register('image')} className="form-control" placeholder="Image" id="basic-url" aria-describedby="basic-addon3" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Price</span>
            <input type="number" {...register('price')} className="form-control" placeholder="Price" aria-label="Amount (to the nearest dollar)" />

          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <input type="text" {...register('description')} className="form-control" placeholder="Description" />
          </div>
          <div className="input-group py-4">
            <span className="input-group-text">Detail</span>
            <textarea className="form-control" {...register('detail')} placeholder="Detail" aria-label="With textarea" defaultValue={""} />
          </div>

          <button className="btn btn-primary">Update</button>
        </form>



      </div>
    </div>

  )
}

export default ProductEdit