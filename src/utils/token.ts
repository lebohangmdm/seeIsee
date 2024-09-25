import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
export async function generateToken(id: string): Promise<string> {
  if (!process.env.NEXT_PUBLIC_JWT_EXPIRES_IN) {
    throw new Error(
      "JWT_SECRET and JWT_EXPIRES_IN must be defined in environment variables."
    );
  }
  try {
    const token = await new SignJWT({ id })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(process.env.NEXT_PUBLIC_JWT_EXPIRES_IN)
      .sign(secret);

    return token;
  } catch (error) {
    throw new Error("Error signing JWT: " + error);
  }
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload; // Return the decoded payload if verification succeeds
  } catch (error) {
    throw new Error("Invalid or expired token: " + error);
  }
}
