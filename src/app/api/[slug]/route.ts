import Service from "@/models/serviceModel";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    await connectDB();
    const service = await Service.findOne({ slug: params.slug });

    if (!service) {
      return NextResponse.json(
        { message: "This service is not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ service }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch the service" },
      { status: 500 }
    );
  }
};
