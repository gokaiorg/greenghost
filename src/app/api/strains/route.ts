import { NextResponse } from "next/server";
import { getStrains } from "@/lib/strains";

export async function GET() {
  try {
    const strains = await getStrains();
    return NextResponse.json(strains);
  } catch (error) {
    console.error("Error generating strains API response:", error);
    return NextResponse.json(
      { error: "Failed to fetch strains" },
      { status: 500 },
    );
  }
}
