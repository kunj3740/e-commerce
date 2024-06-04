import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
) {
  try {
    const orderId = req.nextUrl.searchParams.get("orderId");
    if (orderId === null) {
      return new NextResponse("orderId parameter is missing", { status: 400 });
    }

    const order = await prisma.order.findUnique({
      where: {
        id:orderId ,
      },
    });
    console.log(order);
    if (order) {
      return NextResponse.json(order);
    } else {
      return new NextResponse("Order not found", { status: 402 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}