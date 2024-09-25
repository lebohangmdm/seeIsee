import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./utils/token";

// This function can be marked `async` if using `await` inside

const protectedRoutes = ["/dashboard"];
const publicRoutesForLoggedUsers = ["/login", "/register"]; // Define public routes for non-authenticated users

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("jwt")?.value;
  console.log(token);

  // If the route is protected (e.g., /dashboard)
  if (protectedRoutes.includes(path)) {
    if (!token) {
      // If no token, redirect to login page
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Verify the token
    const decoded = await verifyToken(token);
    console.log("auth", decoded);

    if (!decoded) {
      // If token is invalid, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // If token is valid, allow the user to proceed to the protected route
    return NextResponse.next();
  }

  // If the route is a public route like /login or /register
  if (publicRoutesForLoggedUsers.includes(path)) {
    if (token) {
      // Verify the token
      const decoded = await verifyToken(token);
      console.log("public", decoded);

      if (decoded) {
        // If token is valid, redirect authenticated user to dashboard (or home)
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }

    // If token is missing or invalid, allow access to /login or /register
    return NextResponse.next();
  }

  // Allow access to all other routes
  return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/dashboard", "/login", "/register"],
};
