"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

type Blog = {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  category: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading blogs...</div>;
  }

  if (blogs.length === 0) {
    return <div className="text-center py-10">No blogs found.</div>;
  }

  return (
    <div className="space-y-6">
      {blogs.map((blog, index) => (
        <Card
          key={blog.id}
          className={cn("glass card-hover overflow-hidden", fadeInUp(index * 100 + 500))}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              {blog.category && (
                <Badge variant="secondary" className="ml-2">
                  {blog.category}
                </Badge>
              )}
            </div>
            <CardTitle className="text-2xl mb-4">{blog.title}</CardTitle>
            <div className="text-muted-foreground line-clamp-3 mb-4">
              {blog.content.substring(0, 200)}
              {blog.content.length > 200 ? "..." : ""}
            </div>
            <Link href={`/blog/${blog.id}`}>
              <Button variant="outline" className="group">
                Read More
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}