import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddTask from "./components/AddTask";
import Task from "./components/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddTask />,
    children: [
      {
        path: "task/:task_id",
        element: <Task />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
