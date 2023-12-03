import { Suspense } from "react";
import {
  Link,
  useNavigate,
  useLoaderData,
  Await,
  useAsyncValue,
} from "react-router-dom";

const Post = () => {
  const post = useAsyncValue();
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue();

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((com) => (
        <>
          <h3>{com.email}</h3>
          <h4>{com.name}</h4>
          <p>{com.body}</p>
        </>
      ))}
    </div>
  );
};

const SinglePage = () => {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <div>Post number - {id}</div>
      <button onClick={goBack}>Go back</button>
      <Suspense fallback={<h2>Post is loading</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <Suspense fallback={<h2>Post is loading</h2>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
      <p>
        <Link to={`/posts/${id}/edit`}>Edit post</Link>
      </p>
    </>
  );
};

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function getCommentsById(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.json();
}

export const postLoader = async ({ params }) => {
  const id = params.id;

  return {
    post: await getPostById(id),
    id,
    comments: getCommentsById(id),
  };
};

export default SinglePage;
