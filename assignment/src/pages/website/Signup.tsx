import { useForm, SubmitHandler } from 'react-hook-form';
import { signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom'

type FormInputs = {
  name: string,
  phonenumber: number,
  address: string,
  email: string,
  password: string
}
const Signup = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = data => {
    try {

      navigate('/signin');
      console.log(data);
      signup(data);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
        <p className="mt-2 text-center text-sm text-gray-600">

          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"></a>
        </p>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" {...register('name', { required: true })} placeholder="NGUYEN VAN A" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="number" {...register('phonenumber', { required: true })} placeholder="09...." autoComplete="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" {...register('address', { required: true })} placeholder="Street, County, City" autoComplete="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" {...register('email', { required: true })} autoComplete="email" placeholder="abc@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" {...register('password', { required: true })} placeholder="****" autoComplete="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signup</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup