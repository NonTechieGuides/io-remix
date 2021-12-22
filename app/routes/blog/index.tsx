import { Link, useLoaderData } from '@remix-run/react'
import { getClient } from '~/lib/sanity/getClient'

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
    <div className="mt-12">
      <h1>Blog Posts:</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug.current}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}