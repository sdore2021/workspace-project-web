import React, { Component } from "react";
import Articles from "./articles";
import InsertArticle from "./insertAticle";

class AdminHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        </nav>
        <div className="row">
          <div className="col-2">
            Article
            <br />
            TauxTVA
            <br />
            Commande
            <br />
            Facture
            <br />
            Client
            <br />
            Representant
          </div>
          <div className="col">
            <Articles />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminHome;
