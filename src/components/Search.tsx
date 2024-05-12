import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import axios from "axios";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

interface Product {
    id: string;
    product_name: string;
    product_description ?: string;
    price: number; 
    stock : number;
    image : string;
    createdAt ?: Date         
    updatedAt ?: Date    
    category: String;              
  }
  
const Search = () => {
    const [suggestions , setSuggestions ] = useState<string[]>([]);
    const [ searchTerm , setSearchTerm ] = useState<string>();
    const navigate = useRouter();
    useEffect(() => {
        const AllProduct = async () => {
            const response = await axios.post<Product[]>(`api/user/product/getProduct`);
            const names = response.data.map( products => products.product_name);
            setSuggestions(names);
            console.log("Names:",names);
        }
        AllProduct();
    },[]);

  return(
        <div className="w-[900px]">
            <div className="flex">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <select className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-slate-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                    <option className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Trending Now
                    </option>
                    <option className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Deals
                    </option>
                    <option className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Fashion
                    </option>
                    <option className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Electronics
                    </option>  
                </select>
                <div className="relative w-full">
                    <input type="text" id="search-dropdown" 
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }} value={searchTerm}
                    className="block h-[40px] p-2.5 w-full z-20 text-md font-semibold text-gray-950 bg-slate-100 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search What you Want.." required />
                    <button type="submit" onClick={() => {
                        navigate.push(`product`);
                    }} className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white">
                        <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
                    </button>
                    {
                        suggestions && (
                    <div className="bg-slate-200 rounded-lg text-black w-full z-40 absolute">
                        {suggestions
                            .filter((suggestion) => {
                                const currentSearchTerm = searchTerm?.toLowerCase();
                                const title = suggestion.toLowerCase();
                                return (
                                currentSearchTerm &&
                                title.startsWith(currentSearchTerm) &&
                                title !== currentSearchTerm
                                );
                            })
                            .slice(0, 10)
                            .map((suggestion) => (
                          
                                    <div
                                    key={suggestion}
                                    onClick={() => setSearchTerm(suggestion)}
                                    className="rounded-lg h-[33px]">
                                        <div className="h-[3px] bg-slate-950">
                                            
                                        </div>
                                        <div className="ml-5 mt-1 h-[29px]">
                                            {suggestion}
                                        </div>
                                        
                                    </div>
                                    
                            ))}
                    </div> 
                )
                    }
                </div>
            </div>
        </div>

  )
}
export default Search;