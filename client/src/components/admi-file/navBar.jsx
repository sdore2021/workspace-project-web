import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="col-md-2 light-blue sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <Link to="/CreateNewAdmin">Create new Admin</Link>
          <Link to="/LogoutAdmin">Logout</Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

/*
<!--nav classNameName="light-blue lighten-1" role="navigation">
      <div classNameName="nav-wrapper container">
        <Link to="/" classNameName="brand-logo">
          Admin
        </Link>

        <ul classNameName="right">
          <li>
            <Link to="/">Admin</Link>
          </li>
          <li>
            <Link to="/">Article</Link>
          </li>
          <li>
            <Link to="/">Commande</Link>
          </li>
          <li>
            <Link to="/">Client</Link>
          </li>
          <li>
            <Link to="/">Representant</Link>
          </li>
          <li>
            <Link to="/CreateNewAdmin">Create new Admin</Link>
          </li>
        </ul>
      </div>
    </nav -->
*/
