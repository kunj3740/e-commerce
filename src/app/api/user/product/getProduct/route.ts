import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try{
        const products = await prisma.product.findMany({
            include : {
                Category : true,
            },
        })
        if(products){
            return NextResponse.json(products)
        }else{
            return new NextResponse("Product NOT FOUND" , { status : 404})
        }
    }
    catch(e){
        console.log(e);
        return new NextResponse("Internal Error:" , { status : 500})
    }
}