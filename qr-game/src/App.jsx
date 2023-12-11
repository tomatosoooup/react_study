import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddTask from "./components/AddTask";
import Task from "./components/Task";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <h2>error!</h2>,
  },
  {
    path: "/task/:id",
    element: <Task />,
    errorElement: <h2>error 22!</h2>,
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
