import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <StyledBtn>Styled btn</StyledBtn>
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            News Letter
          </NavLink>
        </div>
      </div>
    </nav>
  )
};
export default Navbar;
