import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

// The params object should be properly typed and handled
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // No need to await params - it's passed directly in the object parameter
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