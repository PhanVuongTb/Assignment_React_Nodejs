import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm, FormState } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ProductType } from '../../../types/products';
import { CategoryType } from '../../../types/category';
import {listCate} from '../../../api/category'
import axios from 'axios';
import { addsProduct} from '../../../features/product/productSlice';
const AddProduct = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState } = useForm<ProductType>();
  const [categorys, setCategorys] = useState<CategoryType[]>([])
  const navigate = useNavigate();
  const [files, setFiles] = useState<any>([]);

  const CLOUDINARY_PRESET = "k9yoyn7r";
  const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dev7lem1d/image/upload";

  const onSubmit: SubmitHandler<ProductType> = async (data) => {
      const formData = new FormData();
      if (files) {
        let imgLink = []
        for (let index = 0; index < files.length; index++) {
            formData.append("file", files[index]);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            const image = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            imgLink.push(image.data.url)
        }
         dispatch(addsProduct({ ...data, img: imgLink[0] }));
        alert("Thêm thành công ");
        navigate("/admin/products");
    }
  }
  const previewImg = (ig: any) => {
    let imgs = [];
    for (let i = 0; i < ig.length; i++) {
        imgs.push(ig[i])
    }
    setFiles(imgs)
}
useEffect(() => {
  const getCategorys = async () => {
      const { data } = await listCate();
      setCategorys(data)
      console.log(data);
  }
  getCategorys();
}, []);
  return (
    <div>
      <div className='flex justify-between mb-[20px]'>
        <h3 className='text-[30px]'>Add Product</h3>
      </div>
      <form className="justify-center mx-auto" method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className=" mb-[10px]">
                            <label htmlFor="Category">Category</label>
                            <select {...register('category', { required: true })} >
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
                            <input multiple onChange={(e) => { previewImg(e.target.files) }} type="file" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            <label htmlFor="" className='flex pt-3'>
                                {files && files.map((item, index) => {
                                    return <img key={index} className='ml-5' src={URL.createObjectURL(item)} alt="" width={150} height={200} />
                                })}
                            </label>
                        </div>
        <span>Price </span><hr />
        <input type="number" {...register('price', { required: true })} /><hr />

        <span>Quantity </span><hr />
        <input type="number" {...register('quantity', { required: true })} /><hr />

        <span>Desc </span><hr />
        <input type="text" {...register('desc', { required: true })} /><hr />

        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Add
        </button>

      </form>
    </div>
  )
}

export default AddProduct