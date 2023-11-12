import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Main</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2023</footer>
    </>
  );
};

export default Layout;
