import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import BlogPage, { blogLoader } from "./pages/BlogPage";
import AboutPage from "./pages/Aboutpage";
import NotFoundPage from "./pages/Notfoundpage";
import HomePage from "./pages/Homepage";

import Layout from "./components/Layout";
import SinglePage, { postLoader } from "./pages/SinglePage";
import CreatePost from "./pages/Createpost";
import EditPost from "./pages/Editpost";

import LoginPage from "./pages/LoginPage";

import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />}>
        <Route path="contacts" element={<p>Our contacts</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Route>
      <Route path="about-us" element={<Navigate to="/about" replace />} />
      <Route path="posts" element={<BlogPage />} loader={blogLoader} />
      <Route path="posts/:id" element={<SinglePage />} loader={postLoader} />
      <Route path="posts/:id/edit" element={<EditPost />} />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        }
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
