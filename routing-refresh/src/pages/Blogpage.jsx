import {
  Link,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";
import { Suspense } from "react";

const BlogPage = () => {
  const { posts } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";

  const latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  return (
    <>
      <h1>Blog page</h1>

      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="/posts/new">Add new post</Link>
      <Suspense fallback={<p>Loading</p>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <>
              {resolvedPosts
                .filter(
                  (post) =>
                    post.title.includes(postQuery) && post.id >= startsFrom
                )
                .map((post) => (
                  <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                  </Link>
                ))}
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
}

export const blogLoader = async ({ request, params }) => {
  return defer({
    posts: getPosts(),
  });
};

export default BlogPage;
