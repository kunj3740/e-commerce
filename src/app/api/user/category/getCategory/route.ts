import prisma from "@/lib/prismadb";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST( req : NextRequest ) {
    try{
        const category = await prisma.category.findMany({
            include:{
                product : true,
            }
        })
        return NextResponse.json(category);
    }
    catch(e){
        console.log(e);
        return new NextResponse("Internal Error " , { status : 500})
    }
}