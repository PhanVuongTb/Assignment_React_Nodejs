import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { signin } from '../../api/auth';
import { useNavigate } from 'react-router-dom'

type FormInputs = {
  email: string,
  password: string
}

const Signin = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = async data => {
    try {
      const { data: user } = await signin(data);
      localStorage.setItem('user', JSON.stringify(user));
      alert('Đăng Nhập thành công ')
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    // <form action="" onSubmit={handleSubmit(onSubmit)}>
    //   <span>Email</span>
    //   <input type="text" {...register('email', { required: true })} /><hr />

    //   <span>Pass</span>
    //   <input type="password" {...register('password', { required: true })} /><hr />
    //   <button>Đăng Nhập</button>
    // </form>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
          <p className="mt-2 text-center text-sm text-gray-600">

            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"></a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Email address</label>
              <input type="email" {...register('email', { required: true })} id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input type="password" {...register('password', { required: true })} id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label className="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin