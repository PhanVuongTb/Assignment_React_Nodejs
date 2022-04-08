import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/category';
import { categoryType } from "../../types/categoryType"


type CategoryEditProps = {
  onUpdate: (category: categoryType) => void
}
type FormInputs = {
  name: String
}

const CategoryEdit = (props: CategoryEditProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await read(id);
      console.log(data);
      reset(data)
    }
    getCategorys();
  }, []);

  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdate(data);
    console.log(data);
    navigate('/admin/category')
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <form className="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-4" action="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className='py-4'>Update_Category</h1>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" {...register('name', { required: true })} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <button>Update</button>
        </form>



      </div>
    </div>

  )
}

export default CategoryEdit