import { Link, useNavigate, useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const { post, id } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <div>Post number - {id}</div>
      <button onClick={goBack}>Go back</button>
      <p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link to={`/posts/${id}/edit`}>Edit post</Link>
      </p>
    </>
  );
};

export const postLoader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const post = await res.json();

  return { post, id };
};

export default SinglePage;
