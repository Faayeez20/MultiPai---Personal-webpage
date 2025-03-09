import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Add this line for static export
export const dynamic = 'force-dynamic';

// Update to handle async params
export async function GET(request: NextRequest, context: any) {
  // Await the params object
  const params = context.params;
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid blog ID" },
      { status: 400 }
    );
  }

  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}