"use client"
import { useDispatch, useSelector } from "react-redux";
import { setCartData, setOrderData, setUserData } from "@/redux/actions";
import { Cart, CartProduct, InitialState, Order, Product } from "@/redux/types"
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductDetails from "../productFinalLook/ProductDetails";


export const CheckOutPage = async () => {

    const userData = useSelector((state : InitialState) => state.userData);
    const [CartProduct , setCartProduct] = useState< Product | null >(null);
    
    useEffect(() => {
        const fetchingCartData = async () => {
            try{
                const CartResponse = await axios.post(`api/user/cart/get/[userId]/?userId=${userData.id}`);
                console.log(CartResponse);
                setCartProduct( CartResponse.data.products );
            }
            catch(e){
                console.log(e);
                
            }
        };
        fetchingCartData();
    } ,[])

  return (
    <div>
        <div className="h-screen bg-amazonclone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
                <div className="grid grid-cols-8 gap-10">
                {/* Products */}
                <div className="col-span-6 bg-white">
                    <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
                    {CartProduct && CartProduct.map((product : Product) => {
                    return (
                        <div>
                        <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                            <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                            <div className="col-span-2">
                                <Link href={`/`}>
                                    <img
                                        className="p-4 m-auto"
                                        src={product.image}
                                        alt="Checkout product"
                                    />
                                </Link>
                            </div>
                            <div className="col-span-6">
                                <div className="font-medium text-black mt-2">
                                <Link href={`/`}>
                                     
                                </Link>
                                </div>
                                <div>
                                <button
                                    className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1 cursor-pointer"
                                    
                                >
                                    Delete
                                </button>
                                </div>
                                <div className="grid grid-cols-3 w-20 text-center">
                                <div
                                    className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                                  
                                >
                                    -
                                </div>
                                <div className="text-lg xl:text-xl bg-gray-200">
                                    {product.quantity}
                                </div>
                                <div
                                    className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                                 
                                >
                                    +
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-span-2">
                            <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                                Rs.{product.price}
                            </div>
                            </div>
                        </div>
                        </div>
                    );
                    })}
                    {/* <div className="text-lg xl:text-xl text-right mb-4 mr-4">
                    Subtotal ({itemsNumber} items):{" "}
                    <span className="font-semibold">
                        {GB_CURRENCY.format(subtotal)}
                    </span>
                    </div> */}
                </div>
                {/* Checkout */}
                {/* <div className="col-span-2 bg-white rounded h-[250px] p-7">
                    <div className="text-xs xl:text-sm text-green-800 mb-2">
                    Your order qualifies for{" "}
                    <span className="font-bold">FREE DELIVERY</span>. Delivery Details
                    </div>
                    <div className="text-base xl:text-lg mb-4">
                    Subtotal ({itemsNumber} items):{" "}
                    <span className="font-semibold">
                        {GB_CURRENCY.format(subtotal)}
                    </span>
                    </div>
                    <button className="btn">Proceed to Checkout</button>
                </div> */}
                </div>
            </div>
            </div>
    </div>
  )
}
export default CheckOutPage;
