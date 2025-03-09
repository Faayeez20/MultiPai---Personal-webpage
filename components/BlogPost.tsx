"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

type BlogPostProps = {
  id: number;
};

type Blog = {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  category: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function BlogPost({ id }: BlogPostProps) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center py-10">Blog not found.</div>;
  }

  return (
    <Card className={cn("glass border-none shadow-xl", fadeInUp())}>
      <CardHeader>
        <Link href="/blog">
          <Button variant="ghost" className="w-fit p-0 mb-4 hover:bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blogs
          </Button>
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="w-4 h-4" />
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          {blog.category && (
            <Badge variant="secondary" className="ml-2">
              {blog.category}
            </Badge>
          )}
        </div>
        <CardTitle className="text-3xl">{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Display content as formatted text/markdown */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </CardContent>
    </Card>
  );
}