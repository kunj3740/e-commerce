import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import jwt from "jsonwebtoken";
import { signupInput } from "@/schemas/signupInputs";
// var bcrypt = require("bcryptjs");

export  async function POST(req:Request){
    const body = await req.json();
    const { email, password, username } = body;

    const { success } = signupInput.safeParse(body);
    if (!success) {
        return NextResponse.json(
          { 
              message: 'Inputs not correct'
          },
          { status: 400 }
      );
    }

      try {
        const user = await prisma.user.findUnique({
          where: { email },
        });
    
        // const hashedPassword = await bcrypt.hash(password, 10);
    
        if (!user) {
          const newUser = await prisma.user.create({
            data: {
              email,
              password,
              username,
            },
          });
          const token = jwt.sign({
            id:newUser.id , username:newUser.username , email : newUser.email
          },process.env.JWT_SECRET || "kunj");
          
          return NextResponse.json(token);
        // const token = jwt.sign(
        //   { userId: newUser.id, username: newUser.username, email: newUser.email }, 
        //   process.env.JWT_SECRET || "",
        //   {
        //     expiresIn: "1d",
        //   }
        // );

        // const response = new NextResponse(
        //   JSON.stringify({
        //     message: "Successfully Account Created",
        //     id: newUser.id,
        //   })
        // );
  
        // response.headers.set(
        //   "Set-Cookie",
        //   `token=${token}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}`
        // );
        // return response;
      }else{
        return new NextResponse("User Already Exists", { status: 403 });
      }
      } catch(e){
        return Response.json(
            { 
              message:"Internal Error"
            },
            { status: 500  }
        );
      }

}