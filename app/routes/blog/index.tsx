import { Link, useLoaderData } from "@remix-run/react";
import { getClient } from "~/lib/sanity/getClient";

export type Post = {
  slug: string;
  title: string;
};

export async function loader() {
  const posts = await getClient().fetch(
    `*[_type == "post"]{ _id, title, slug }`
  );
  return posts;
}

export default function Posts() {
  let posts = useLoaderData<Post[]>();
  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 sm:px-6 h-screen mt-12">
      <div className="m-auto text-center">
        <h1 className="font-black text-4xl uppercase">Blog</h1>
      </div>{" "}
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug.current}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
