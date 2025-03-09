import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete existing records
  await prisma.blog.deleteMany({});

  // Create sample blog posts
  await prisma.blog.create({
    data: {
      title: 'Getting Started with Next.js',
      content: `
        <p>Next.js is a React framework that enables you to build server-side rendered and statically generated web applications.</p>
        
        <h2>Why Next.js?</h2>
        <p>Next.js provides an excellent developer experience with features like:</p>
        <ul>
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
          <li>Built-in CSS support</li>
          <li>Fast refresh</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>To start a new Next.js project, run:</p>
        <pre><code>npx create-next-app@latest my-next-app</code></pre>
        
        <p>This will set up a new Next.js project with a default template.</p>
      `,
      category: 'Web Development',
    },
  });

  await prisma.blog.create({
    data: {
      title: 'Introduction to Machine Learning',
      content: `
        <p>Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to "learn" from data, without being explicitly programmed.</p>
        
        <h2>Types of Machine Learning</h2>
        <ul>
          <li><strong>Supervised Learning:</strong> The algorithm learns from labeled training data.</li>
          <li><strong>Unsupervised Learning:</strong> The algorithm finds patterns in unlabeled data.</li>
          <li><strong>Reinforcement Learning:</strong> The algorithm learns by interacting with an environment.</li>
        </ul>
        
        <h2>Common Algorithms</h2>
        <p>Some popular machine learning algorithms include:</p>
        <ul>
          <li>Linear Regression</li>
          <li>Logistic Regression</li>
          <li>Decision Trees</li>
          <li>Random Forests</li>
          <li>Support Vector Machines</li>
          <li>Neural Networks</li>
        </ul>
        
        <p>Machine learning is transforming industries from healthcare to finance and beyond.</p>
      `,
      category: 'AI & ML',
    },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });