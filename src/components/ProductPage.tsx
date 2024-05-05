import Appbar from "./Appbar";
import Link from "next/link";
import ProductDetails from "./ProductDetails";
import { Button } from "./ui/button";
// import { GB_CURRENCY } from "../utils/constants";
// import { callAPI } from "../utils/CallApi";
// import { addToCart } from "../redux/cartSlice";

  export const ProductPage = () => {

  return (
      <div className="bg-slate-200">
        <Appbar/>
        <div className="bg-slate-200 mt-10">
            <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
            <div className="grid grid-cols-10 gap-2 border-2">
                {/* Left */}
                <div className="col-span-3 p-8 rounded bg-white m-auto">
                <img className="max-h-[300px]" src="../images/product_1.jpg" alt="Main product" />
                </div>
                {/* Middle */}
                <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                <div className="mb-3">
                    <ProductDetails/>
                </div>
                <div className="text-base xl:text-lg mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui possimus praesentium magnam similique quis laudantium. Sint, labore laborum eius ullam quae non animi voluptatibus optio similique ratione et at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab repellat quaerat, repellendus aut soluta fuga reiciendis facilis accusantium consequuntur tenetur ea. Nesciunt, temporibus unde ad asperiores itaque accusantium quam. Corporis.
                </div>
                </div>
                {/* Right */}
                <div className="col-span-2 p-4 rounded bg-white">
                    <div className="text-xl xl:text-2xl text-red-700  font-semibold">
                        Rs.100
                    </div>
                    <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                        FREE Returns
                    </div>
                    <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                        FREE Delivery
                    </div>
                    <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                        In Stock
                    </div>
                    <div className="text-base xl:text-lg mt-1">
                        Quantity:
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <Link href={"/checkout"} className="flex flex-col" >
                        <button className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 border border-black w-[50%] rounded-md mt-3">
                            Buy Now
                        </button>
                        <button className="bg-yellow-500 w-[50%] hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-black-500 rounded-md mt-3">
                            Add to Cart
                        </button>
                    </Link>
                    </div>
            </div>
            </div>
        </div>
      </div>

  )
}
export default ProductPage;
