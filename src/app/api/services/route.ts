import { NextResponse } from "next/server";
import { servicesData } from "@/data/services";

export async function GET() {
  try {
    // Return all services
    return NextResponse.json(servicesData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
