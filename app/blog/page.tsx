import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import BlogList from "@/components/BlogList";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <Card className="glass border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center">My Blog</CardTitle>
          </CardHeader>
        </Card>
        
        <BlogList />
      </div>
    </main>
  );
}