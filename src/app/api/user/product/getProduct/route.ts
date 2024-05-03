import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try{
        const product = await prisma.product.findMany({
            include : {
                Category : true,
            },
        })
    }
    catch(e){
        console.log(e);
        return new NextResponse("Internal Error:" , { status : 500})
    }
}