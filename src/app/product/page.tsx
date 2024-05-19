"use client";
import { useRouter,useSearchParams } from 'next/navigation';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react"; // Corrected useState import
import axios from "axios";
import Link from "next/link"; // Corrected Link import
import ProductDetails from '@/components/productFinalLook/ProductDetails';
import { Product } from '@/components/Search';
import Appbar from '@/components/Appbar';
import { Button } from '@/components/ui/button';
const ProductSuggestion = () => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const searchTerm = searchParams.get('searchTerm')

    const [products, setProducts] = useState<Product[]>([]);
    const fetchData = async () => {
        try {
            const response = await axios.get<Product[]>('/api/user/product/getProduct');
            const results = response.data.filter((product) =>
                product.product_name.toLowerCase().includes(searchTerm?.toLowerCase()||"")
              );
              setProducts(results);
            
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm]);

    useEffect(()=>{
        console.log("hello");
        console.log(searchTerm);
    },[])

    return (
       <div className='bg-slate-200'>
          <Appbar/> 
          <div className="min-w-[1000px] max-w-[1100px]  h-full m-auto pt-4 bg-slate">
        {products &&
          products.map((product, key) => {
            return (
              <Link key={key} href={`/product/${product.id}`}>
                <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-2">
                  <div className="col-span-3 p-4 bg-white hover:bg-slate-50 trasition-all">
                    <img
                      className="m-auto max-h-[200px] hover:scale-110 transition-all"
                      src={product.image}
                      alt="Search result product"
                    />
                  </div>
                  <div className="col-span-9 bg-white border border-white hover:bg-gray-100 ">
                    <div className="font-medium text-black mt-4">
                    <div className="mb-1">
                      <div className="text-xl xl:text-2xl mb-1 font-semibold text-slate-800">
                        {product.product_name}
                      </div>
                      <div className="text-xs xl:text-sm font-bold mb-1 text-slate-500">
                        {product.Category.name}
                      </div>  
                    </div>
                      <div className="text-xl xl:text-2xl text-red-600 font-semibold mt-2">
                          Rs.{product.price}
                      </div>
                    </div>
            
                      <button className="bg-slate-800 w-[15%] h-10 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-black-500 rounded-md mt-3">
                          View More
                      </button>
                
                  </div>
                </div>
                <div className='bg-slate-200 h-[2px]'>

                </div>
              </Link>
            );
          })}
          <div className='h-[30px] bg-slate-200'>

          </div>
      </div>
    </div>
    );
};

export default ProductSuggestion;