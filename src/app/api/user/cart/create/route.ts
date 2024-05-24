import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export default async function POST(req) {
    try{
        const body = await req.json();
        console.log(body);
        const data = await prisma.cart.create({
            data: body,
        });
        return NextResponse.json({
            id : data.id
        });
    }
    catch(e){
        return new NextResponse( "Error In Creating Cart " , { status : 500 } );
    }
}