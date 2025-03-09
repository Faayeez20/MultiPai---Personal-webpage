import BlogPost from "@/components/BlogPost";

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const id = parseInt(params.id);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <BlogPost id={id} />
      </div>
    </main>
  );
}