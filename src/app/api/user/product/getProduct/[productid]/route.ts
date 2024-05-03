import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
export async function GET(
    req : Request,
    context : { params : { productId : string }}
) {
    try{
        console.log( req.url );
        const product = await prisma.product.findUnique({
            where:{
                id : context.params.productId
            }
        });
        if( product ){
            return NextResponse.json(product)
        }else{
            return new NextResponse("product Not Found" , { status : 404 });
        }
    }catch(e){
        console.log(e);
        return new NextResponse("Internal error " , {  status : 500});
    }
    
}