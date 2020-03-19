import React, { Component } from "react";
import Articles from "./articles";
import InsertArticle from "./insertAticle";
import NavBar from "./navBar";

class AdminHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default AdminHome;
