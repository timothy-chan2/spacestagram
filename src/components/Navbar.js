import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <nav>
      <h1>Spacestagram</h1>
      <pre className='nav-links'>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "var(--pink)" : "var(--yellow)",
            };
          }}
          to="/"
        >
          Home
        </NavLink>  •{"  "}
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "var(--pink)" : "var(--yellow)",
            };
          }}
          to="/developer"
        >
          Developer
        </NavLink>
      </pre>
    </nav>
  );
};

export default Navbar;