import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    context: { params: { orderid: string } }
)
{
    try{
        return NextResponse.json({
            "msg" : "dhursha"
        })
    }
    catch(e){
        console.log(e);
        return NextResponse.json({
            "msg" : "dhursha"
        })
    }
}