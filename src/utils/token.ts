import jwt from "jsonwebtoken";

export const generateToken = async (id: string): Promise<string> => {
  if (!process.env.JWT_SECRET) {
    throw new Error(
      "JWT_SECRET and JWT_EXPIRES_IN must be defined in environment variables."
    );
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = async (token: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be defined in environment variables.");
  }
  return jwt.verify(token, process.env.JWT_SECRET);
};
