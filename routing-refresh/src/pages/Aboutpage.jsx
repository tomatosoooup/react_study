import { Outlet, Link } from "react-router-dom";
// Route, Routes,
const AboutPage = () => {
  return (
    <>
      <h1>About us</h1>
      <p>This is react router dom library test</p>

      <ul style={{ display: "flex", gap: 20 }}>
        <Link to="contacts">Our contacts</Link>
        <Link to="team">Our team</Link>
      </ul>
      <Outlet />
      {/* <Routes>
        <Route path="contacts" element={<p>Our contacts</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Routes> */}
    </>
  );
};

export default AboutPage;
