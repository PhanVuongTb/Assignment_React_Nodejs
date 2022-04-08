import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';

type FormInputs = {
  name: string,
  email: string,
  password: string | number
}
const Signin = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = async data => {
    const { data: user } = await signin(data);
    localStorage.setItem('user', JSON.stringify(user))
    alert("đăng nhập thành công");
    navigate('/admin/product')
  }
  return (
    <form className='py-4 container col-md-6' action="" onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-center'>Sign in</h1>
      <br />
      <div className="form-floating">
        <input type="email" {...register('email', { required: true })} className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <br />
      <div className="form-floating">
        <input type="password" {...register('password', { required: true })} className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <br />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" defaultValue="remember-me" /> Remember me
        </label>
      </div>
      <br />
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>


  )
}

export default Signin