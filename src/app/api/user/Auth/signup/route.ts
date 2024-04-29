import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import  jwt  from 'jsonwebtoken';
import { signupInput } from "@/schemas/signupInputs";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "@/app/config";

export async function POST(req:Request) {
    const prisma = new PrismaClient({
        datasources: {
          db: {
            url: process.env.DATABASE_URL, 
          },
        },
      });
    const body = await req.json();
    const { success } = signupInput.safeParse(body);
    if( !success ){
        return Response.json({
            message : "Inputs not correct "
        },
        { status : 400 }    
    );
    }
    try{
        const user = await prisma.user.create({
            data:{
                email : body.email,
                password : body.password,
                username : body.username,
            }
        })
        const jwt = sign( { id : user.id } , JWT_SECRET);
        return Response.json({
            jwt : jwt
        },
        { status : 200 }
    )
    }
    catch(e){
        return Response.json({
            message : "you are already logged in:"
        },
        { status : 400 }
    )
    }
    
}