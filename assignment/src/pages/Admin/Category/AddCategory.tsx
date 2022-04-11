import React from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form"
import { CategoryType } from '../../../types/category'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {addCategory} from "../../../features/category/categorySlice"
const AddCategory = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<CategoryType>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<CategoryType> = data => {
    dispatch(addCategory(data))
    alert("Thêm thành công")
    navigate("/admin/category");
}
  return (
    <div>
    <div className='flex justify-between mb-[20px]'>
        <h3 className='text-[30px]'>Add Category</h3>
    </div>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
                <span>Name Category</span>
                <input type="text" {...register('name', { required: true })} /><hr />

                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Add
                </button>

            </form>
</div>
  )
}

export default AddCategory