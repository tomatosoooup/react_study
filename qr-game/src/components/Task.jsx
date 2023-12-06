import { useParams } from "react-router-dom";

const Task = () => {
  const task_id = useParams();
  return <div>Task # - {task_id}</div>;
};

export default Task;
