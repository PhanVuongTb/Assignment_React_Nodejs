import { categoryType } from "../pages/types/categoryType";
import instance from "./instance";

export const listcategory = () =>{
    const url = "/category";
    return instance.get(url)
};
export const read = (id : any) =>{
    const url = `/category/${id}`;
    return instance.get(url)
};
export const removecatgory = (id :any) =>{
    const url = `/category/${id}`;
    return instance.delete(url)
};
export const addcategory = (category : categoryType) =>{
    const url = "/categorys";
    return instance.post(url,category)
};
export const updatecategory = (category : categoryType) =>{
    const url = `/category/${category._id}`;
    return instance.put(url,category)
};