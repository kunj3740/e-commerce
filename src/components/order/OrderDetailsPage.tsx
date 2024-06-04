"use client"

import dateFormaterHandler from "@/lib/DateFormatter";
import { InitialState, Order, OrderProduct, Product } from "@/redux/types";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";



const OrderDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const orderData = useSelector((state: InitialState) => state.orders);
  const param = useParams();
  const router = useRouter();
  const userData = useSelector((state: InitialState) => state.userData);

  return (
    <section className="w-full h-[90vh] flex justify-center items-center">
      {!loading && orderData.length > 0 && (
        <section className="mx-auto py-8 md:container w-[90%] md:w-[75%] md:min-h-[50vh] rounded-md border px-4 flex flex-col gap-8">
          {orderData.map((order: Order , orderIndex:number) => (
          
           order.id === param.orderId && <div key={orderIndex} className="flex justify-evenly items-center flex-col-reverse md:flex-row">
              <div>
                <p className="bg-[#272e3f] inline-block text-white px-2 py-1 mb-2 text-xs font-medium rounded tracking-wider">
                  {order.status}
                </p>
                <p className="my-3 text-slate-700">
                  Your order has been placed and will soon reach to you!
                </p>
                <div className="w-full flex justify-start items-start mt-6 mb-4 border-b pb-2">
                  <p className="w-3/4 font-semibold text-sm md:text-base">
                    Product
                  </p>
                  <p className="w-1/4 font-semibold text-sm md:text-base">Total</p>
                </div>
                {order && order.products.map((item: OrderProduct) => (
                  <div key={item.id} className="w-full flex justify-start items-start my-2">
                    <p className="w-3/4 cursor-pointer text-xs md:text-sm">
                      <Link href={`/product/${item.id}`} target="_blank">
                        {item.product_name}
                      </Link>
                    </p>
                    <p className="w-1/4 text-xs md:text-sm">
                      {item.quantity} x ₹{item.price}
                    </p>
                  </div>
                ))}
                <div className="w-full flex justify-start items-start mt-4 mb-4">
                  <p className="w-3/4 font-semibold text-sm md:text-base">
                    Subtotal
                  </p>
                  <p className="w-1/4 font-semibold text-sm md:text-base">
                    {order.total}
                  </p>
                </div>
                <p className="mt-6 mb-2 text-sm md:text-base">
                  <span className="font-semibold">Order Placed:</span>{" "}
                  {/* {order.createdAt} */}
                </p>
              </div>
              <div className="flex justify-center items-center mb-8 md:mb-0">
                <img
                  src="../images/deliveryTruck.png"
                  alt="Delivery Truck"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          ))}
        </section>
      )}
    </section>
  );
};

export default OrderDetailsPage;

// "use client";

// import dateFormaterHandler from "@/lib/DateFormatter";
// import { InitialState } from "@/redux/types";
// import axios from "axios";
// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useSelector } from "react-redux";

// type OrderData = {
//   id: string;
//   status: string;
//   createdAt: string;
//   updatedAt: string;
//   userId: string;
//   total: number;
//   products: [];
// };

// const OrderDetailsPage = () => {
//   const [loading, setLoading] = useState(true);
//   const orderData = useSelector((state: InitialState) => state.orders);
//   const param = useParams();
//   const router = useRouter();
//   const userData = useSelector((state: InitialState) => state.userData);
//   useEffect(() => {
    
      
//   }, []);

//   return (
//     <section className="w-full h-[90vh] flex justify-center items-center">
//       {!loading && orderData.id !== "" && (
//         <section className="mx-auto py-8 md:container w-[90%] md:w-[75%] md:min-h-[50vh] rounded-md border px-4 flex justify-evenly items-center flex-col-reverse md:flex-row">
//           <div>
//             <p className="bg-[#272e3f] inline-block text-white px-2 py-1 mb-2 text-xs font-medium rounded tracking-wider">
//               {orderData.status}
//             </p>
//             <p className="my-3 text-slate-700">
//               Your order has been placed and will soon reach to you!
//             </p>
//             <div className="w-full flex justify-start items-start mt-6 mb-4 border-b pb-2">
//               <p className="w-3/4 font-semibold text-sm md:text-base">
//                 Product
//               </p>
//               <p className="w-1/4 font-semibold text-sm md:text-base">Total</p>
//             </div>
//             {orderData &&
//               orderData.products.map((item: any) => {
//                 return (
//                   <div
//                     key={item.productId}
//                     className="w-full flex justify-start items-start my-2"
//                   >
//                     <p className="w-3/4 cursor-pointer text-xs md:text-sm">
//                       <Link href={`/product/${item.productId}`} target="_blank">
//                         {item.name}
//                       </Link>
//                     </p>
//                     <p className="w-1/4 text-xs md:text-sm">
//                       {item.quantity} x ₹{item.price}
//                     </p>
//                   </div>
//                 );
//               })}
//             <div className="w-full flex justify-start items-start mt-4 mb-4">
//               <p className="w-3/4 font-semibold text-sm md:text-base">
//                 Subtotal
//               </p>
//               <p className="w-1/4 font-semibold text-sm md:text-base">
//                 {orderData.total}
//               </p>
//             </div>
//             <p className="mt-6 mb-2 text-sm md:text-base">
//               <span className="font-semibold">Order Placed:</span>{" "}
//               {orderData.createdAt}
//             </p>
//           </div>
//           <div className="flex justify-center items-center mb-8 md:mb-0">
//             <img
//               src="../images/deliveryTruck.png"
//               alt="Delivery Truck"
//               width={400}
//               height={300}
//             />
//           </div>
//         </section>
//       )}
//     </section>
//   );
// };

// export default OrderDetailsPage;
// "use client"
// import { useParams } from "next/navigation";

// export const OrderDetailsPage = () => {
//     const param = useParams();
//     const orderId = param.orderId;
//   return (
//     <div>
        
//     </div>
//   )
// }
