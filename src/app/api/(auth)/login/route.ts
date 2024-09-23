import User from "@/models/userModel";
import connectDB from "@/utils/db";
import { generateToken } from "@/utils/token";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  email: string;
  password: string;
};

type CookieOptions = {
  httpOnly: boolean;
  secure: boolean;
  sameSite: string;
  maxAge: number; // 30 days
  path: string;
};

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();

    const { email, password }: RequestBody = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please provide both email and password" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!(await user.comparePassword(password))) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = await generateToken(user._id);

    const response = NextResponse.json(
      { message: "Login successfully", status: "success" },
      { status: 200 }
    );

    const cookieOptions: CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    };

    response.cookies.set("jwt", token, cookieOptions);
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong. Please try later" },
      { status: 500 }
    );
  }
};
