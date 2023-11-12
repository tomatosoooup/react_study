import { Link, useMatch } from "react-router-dom";

// const toggleClass = ({ isActive }) => (isActive ? "active-link" : "");

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({ path: to, end: to.length === 1 });
  // console.log(match);

  return (
    <Link to={to} {...props} style={{ color: match ? "blue" : "red" }}>
      {children}
    </Link>
  );
};

export default CustomLink;
