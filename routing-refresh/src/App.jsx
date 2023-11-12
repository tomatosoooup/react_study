import { Routes, Route } from "react-router-dom";

import BlogPage from "./pages/Blogpage";
import AboutPage from "./pages/Aboutpage";
import NotFoundPage from "./pages/Notfoundpage";
import HomePage from "./pages/Homepage";

import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/Createpost";
import EditPost from "./pages/Editpost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/new" element={<CreatePost />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
