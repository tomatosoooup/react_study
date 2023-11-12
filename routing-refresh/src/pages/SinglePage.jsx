import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);

  const goHome = () => navigate("/", { replace: true });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  return (
    <>
      <div>Post number - {id}</div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button>
      <p>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${id}/edit`}>Edit post</Link>
          </>
        )}
      </p>
    </>
  );
};

export default SinglePage;
