import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-list">
        <NavLink to="/brasil-natividade">Natividade</NavLink>
      </div>
      <div className="navbar-list">
        <NavLink to="/brasil-geral">Itaperuna</NavLink>
      </div>
      <div className="navbar-list">
        <NavLink to="/circular">
          Circular <span>(Natividade)</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
