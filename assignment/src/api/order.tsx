import { OrderType } from "../types/order";
import instance from "./instance";

export const listProduct = () => {
    const url = `orders`;
    return instance.get(url); 
}
export const removeProduct = (id: any) => {
    const url = `orders/${id}`;
    return instance.delete(url); 
}
export const addProduct = (order : OrderType) =>{
    const url = "/orders";
    return instance.post(url,order)
};
export const updateProduct = (order: OrderType) => {
    const url = `/orders/${order._id}`;
    return instance.put(url, order);
}