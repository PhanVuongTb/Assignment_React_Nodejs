import { ProductType } from "../types/products";
import instance from "./instance";

export const listProduct = () => {
    const url = `products`;
    return instance.get(url); 
}
export const removeProduct = (id: any) => {
    const url = `products/${id}`;
    return instance.delete(url); 
}
export const addProduct = (product : ProductType) =>{
    const url = "/products";
    return instance.post(url,product)
};
export const updateProduct = (product: ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}
export const readProduct = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const NamePro = (keyword : any) =>{
    const url=`/products?name=${keyword}`;
    return instance.get(url)
};
export const productCate = (id : any) =>{
    const url=`/products/ct=${id}`;
    return instance.get(url)
};
export const likeNamePro = (keyword : any) =>{
    const url=`/products?name=${keyword}`;
    return instance.get(url)
};
