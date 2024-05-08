import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET( req ) {
    try{
        const { userId } = await req.json();
        const data = await prisma.order.findMany({
            where:{
                userId,
            },
            orderBy :{
                createdAt : "desc",
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