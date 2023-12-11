import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddTask from "./components/AddTask";
import Task from "./components/Task";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <h2>error!</h2>,
    children: [
      { path: "/tasks/add", element: <AddTask /> },
      {
        path: "/task/:id",
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
