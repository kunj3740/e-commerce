' use client'
import prisma from "@/lib/prismadb";
import { useParams } from "next/navigation";
import { NextResponse } from "next/server";
import { date } from "zod";

export async function GET(
    req : Request , 
    context : { params : { orderid : string }}
) {
    try{
        const data = await prisma.order.findFirst({
            where:{
                id : context.params.orderid,
            },
        })
        if( data ){
            return NextResponse.json(data);
        }else{
            return new NextResponse("Order Not Found" , { status : 200 });
        }
    }
    catch(e){
        console.log(e);
        return new NextResponse("Internal Error :" , { status : 500 });
    }
}