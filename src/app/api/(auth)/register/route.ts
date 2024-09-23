import User from "@/models/userModel";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: "user" | "admin";
};

export const POST = async (request: NextRequest) => {
  await connectDB();
  try {
    const { fullName, email, password, passwordConfirm, role }: RequestBody =
      await request.json();

    // validate a user
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    await User.create({
      fullName,
      email,
      password,
      passwordConfirm,
      role,
    });

    return NextResponse.json(
      { message: "User created successfully", status: "success" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong", message: "Failed to register a user" },
      { status: 500 }
    );
  }
};
