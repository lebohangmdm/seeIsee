import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Create a new response
    const response = NextResponse.json(
      { message: "Logged out successfully", status: "success" },
      { status: 200 }
    );

    // Clear the JWT cookie
    response.cookies.set("jwt", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      expires: new Date(0), // Set expiration to the past
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { message: "Logout failed", status: "error" },
      { status: 500 }
    );
  }
}
