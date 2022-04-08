import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';


type FormInputs = {
  surname:string,
  name: string,
  email: string,
  password: string | number,
  address:string
}


const Signup = () => {
  const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        signup(data);
        
        navigate('/signin');
        alert("Đăng ký thành công");
    }

  return (
    <div className='container'>

      <h1 className="py-4 mb-3 text-center">Sign up</h1>
      <form className="row g-3" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6">
          <label htmlFor="inputSurname" className="form-label">Surname</label>
          <input {...register('surname', {required: true})} type="text" className="form-control" id="inputSurname" placeholder="Surname" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input {...register('name', {required: true})} type="text" className="form-control" id="inputName" placeholder="Name" />
        </div>
       
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input {...register('email', {required: true})} type="email" className="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input {...register('password', {required: true})} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input {...register('address', {required: true})} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Sign in</button>
        </div>
      </form></div>

  )
}

export default Signup