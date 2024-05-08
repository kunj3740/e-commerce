import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST( req ) {
    try{
        const body = await req.json();
        const data = await prisma.order.create({
            data:body,
        });
        return NextResponse.json(data);
    }
    catch(e)
    {
        console.log(e);
        return new NextResponse("Internal error ", { status : 500 });
    }
}