import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const CreatePost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div>Create post</div>
      <button onClick={() => signout(() => navigate("/", { replace: true }))}>
        Log out
      </button>
    </>
  );
};

export default CreatePost;
