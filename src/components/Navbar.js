import { NavLink } from 'react-router-dom';

// The Navbar component shows the app name and page navigation links
const Navbar = () => {
  const navLinkColor = ({ isActive }) => {
    return {
      color: isActive ? 'var(--pink)' : 'var(--yellow)'
    };
  };
  
  return(
    <nav>
      <h1>Spacestagram</h1>
      <pre className='nav-links'>
        <NavLink
          style={navLinkColor}
          to='/'
        >
          Home
        </NavLink>  •{'  '}
        <NavLink
          style={navLinkColor}
          to='/developer'
        >
          Developer
        </NavLink>
      </pre>
    </nav>
  );
};

export default Navbar;