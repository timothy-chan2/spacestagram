import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <nav>
      <h1>Spacestagram</h1>
      <Link to="/developer">Developer</Link>
    </nav>
  );
};

export default Navbar;