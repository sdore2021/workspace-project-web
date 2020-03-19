import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          Admin
        </Link>

        <ul className="right">
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
            <Link to="/">Create new Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
