import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="col-md-2">
      <div className="flex-column bg-secondary" style={{ height: "100" }}>
        <ul className="nav flex-column">
          <Link to="/CreateNewAdmin">Create new Admin</Link>
          <Link to="/LogoutAdmin">Logout</Link>
          <Link to="/LogoutAdmin">Logout</Link>
          <Link to="/LogoutAdmin">Logout</Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

/*


 <nav className="col-md-2">
      <div className="flex-column bg-secondary" style={{ height: "100" }}>
        <ul className="nav flex-column">
          <Link to="/CreateNewAdmin">Create new Admin</Link>
          <Link to="/LogoutAdmin">Logout</Link>
          <Link to="/LogoutAdmin">Logout</Link>
          <Link to="/LogoutAdmin">Logout</Link>
        </ul>
      </div>
    </nav>
 <nav className="flex-column col-md-2">
      <div className="bg-secondary" style={{ height: "100" }}>
        <ul className="nav flex-column">
          <Link to="/CreateNewAdmin">Create new Admin</Link>
          <Link to="/LogoutAdmin">Logout</Link>
          <Link to="/LogoutAdmin">Logout</Link>
          <Link to="/LogoutAdmin">Logout</Link>
        </ul>
      </div>
    </nav>


<Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
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
