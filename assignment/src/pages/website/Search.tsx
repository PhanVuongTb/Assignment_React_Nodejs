import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { searchProduct } from '../../api/products';
import { ProductType } from '../../types/products';

type Props = {}

const Search = (props: Props) => {
    const { key } = useParams();

    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await searchProduct(key);
            console.log(data);
            setProducts(data);
        }
        getProduct();
    }, [])
    return (
        <div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="my-20">
                        <div className="flex flex-row justify-between my-5">
                            <a href="/listproductnew"><h2 className="text-3xl">Sản phẩm tìm kiếm</h2></a>
                        </div>
                        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                            {products?.map((item: ProductType, index) => {
                                return <div key={index}>
                                    <div className="shadow-lg rounded-lg">
                                        <a href={`/productdetail/${item._id}`}>
                                            <img src={item.img} className="rounded-tl-lg rounded-tr-lg" />
                                        </a>
                                        <div className="p-5">
                                            <h3><a href="/products/${product.id}">{item.name}</a></h3>
                                            <div className="flex flex-col xl:flex-row justify-between">
                                                <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href={`/productdetail/${item._id}`}>
                                                    Xem sản phẩm
                                                </a>
                                                <a href="/products/${product.id}">
                                                    <p className="text-sm text-sky-700">{item.price}.000 VND</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Search