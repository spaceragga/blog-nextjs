import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  body: string;
}

interface StaticBlogProps {
  blogs: Blog[];
}

const StaticBlog: React.FC<StaticBlogProps> = ({ blogs }) => {
  return (
    <div>
      <h1>Static Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();

  const blogs = data.results.map((result: any, index: number) => ({
    id: index + 1,
    title: result.name,
    body: `Height: ${result.height} cm`,
  }));

  return { props: { blogs } };
};

export default StaticBlog;
