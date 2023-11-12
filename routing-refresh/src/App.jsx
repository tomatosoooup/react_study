import { Routes, Route, Navigate } from "react-router-dom";

import BlogPage from "./pages/Blogpage";
import AboutPage from "./pages/Aboutpage";
import NotFoundPage from "./pages/Notfoundpage";
import HomePage from "./pages/Homepage";

import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/Createpost";
import EditPost from "./pages/Editpost";

import LoginPage from "./pages/LoginPage";

import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about-us" element={<Navigate to="/about" replace />} />
            <Route path="posts" element={<BlogPage />} />
            <Route path="posts/:id" element={<SinglePage />} />
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
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
