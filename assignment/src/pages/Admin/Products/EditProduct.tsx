import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ProductType } from '../../../types/products'
import { CategoryType } from '../../../types/category'

import { readProduct } from '../../../api/products'
import { listCate } from '../../../api/category'

import { updatesProduct } from '../../../features/product/productSlice'

const EditProduct = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductType>();
  const navigate = useNavigate();
  const { id } = useParams();
  const [categorys, setCategorys] = useState<CategoryType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await readProduct(id);
      reset(data);
    }
    getProduct();
  }, []);


  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCate();
      setCategorys(data)
    }
    getCategorys();
  }, []);

  const onSubmit: SubmitHandler<ProductType> = data => {
    dispatch(updatesProduct(data))
    alert("Update thành công")
    navigate("/admin/products");
  }
  return (
    <div>
      <div className='flex justify-between mb-[20px]'>
        <h3 className='text-[30px]'>Update Product</h3>
      </div>
      <form className="justify-center mx-auto" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full  mb-[10px]">
          <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Category</label>
          <select {...register('category', { required: true })} className="w-full border bg-white rounded px-3 py-2 outline-none">
            <option className="py-1">Categorys</option>
            {categorys && categorys.map((item, index) => {
              return <option key={index} className="py-1" value={item._id}>{item.name}</option>
            })}
          </select>
        </div>
        <span>Name </span><hr />
        <input type="text" {...register('name', { required: true })} /><hr />
        <div className="w-full  mb-[10px]">
          <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Image</label>
          <input  {...register('img', { required: true })} type="text" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>
        <span>Price </span><hr />
        <input type="number" {...register('price', { required: true })} /><hr />

        <span>Quantity </span><hr />
        <input type="number" {...register('quantity', { required: true })} /><hr />

        <span>Desc </span><hr />
        <input type="text" {...register('desc', { required: true })} /><hr />

        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Update
        </button>

      </form>
    </div>
  )
}

export default EditProduct