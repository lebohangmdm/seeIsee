import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import Service from "@/models/serviceModel"; // Assuming this is a TypeScript module

// import data
dotenv.config({ path: "./.env.local" });

const connectDB = async (): Promise<void> => {
  if (!process.env.MONGO_URI) {
    throw new Error("Database connection string is missing.");
  }

  console.log(process.env.MONGO_URI);
  console.log("DB connection successful!");

  await mongoose.connect(
    process.env.MONGO_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  );
};

const importData = async () => {
  try {
    await connectDB();

    const services = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), "src/data/services.json"),
        "utf-8"
      )
    );

    await Service.create(services);
    console.log("Data successfully loaded!");
    return NextResponse.json(
      { message: "Data successfully loaded!" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error loading data" }, { status: 500 });
  } finally {
    await mongoose.connection.close();
  }
};

const deleteData = async () => {
  try {
    await connectDB();

    await Service.deleteMany();
    console.log("Data successfully deleted!");
    return NextResponse.json(
      { message: "Data successfully deleted!" },
      { status: 204 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error deleting data" }, { status: 500 });
  } finally {
    await mongoose.connection.close();
  }
};

export async function GET(req: NextRequest) {
  const action = req.nextUrl.searchParams.get("action");

  if (action === "import") {
    return await importData();
  } else if (action === "delete") {
    return NextResponse.json(
      { error: "Delete action not allowed with GET" },
      { status: 400 }
    );
  } else {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }
}
