import React from "react";
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
      <h1 className={"text-yellow-500"}>Static Blogs</h1>
      {blogs.map((blog) => (
        <div className={"mt-3"} key={blog.id}>
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

export const getStaticProps = async () => {
  let response = null;
  let data = null;

  try {
    response = await fetch("https://swapi.dev/api/people");
    data = await response.json();
  } catch (e) {
    console.error(e);

    return {
      notFound: true,
    };
  }

  const blogs = data.results.map((result: any, index: number) => ({
    id: index + 1,
    title: result.name,
    body: `Height: ${result.height} cm`,
  }));

  return { props: { blogs } };
};

export default StaticBlog;
