import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { CategoryType } from '../../../types/category';
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateCate } from '../../../api/category';
import { useAppDispatch } from '../../../app/hooks';
import { updateCategory } from '../../../features/category/categorySlice';

const EditCategory = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CategoryType>();
    const { id } = useParams();
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await updateCate(id);
            reset(data);
        }
        getCategory();
    }, [])
    const onSubmit: SubmitHandler<CategoryType> = data => {
        dispatch(updateCategory(data))
        console.log(data);
        alert("Update thành công .")
        navigate("/admin/categorys")
    }
    return (
        <div>
            <div className='flex justify-between mb-[20px]'>
                <h3 className='text-[30px]'>Update Categorys  </h3>
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

export default EditCategory 