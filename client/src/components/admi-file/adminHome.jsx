import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import Articles from "./articles";
import InsertArticle from "./insertAticle";
import NavBar from "./navBar";
import CardA from "./cards";

class AdminHome extends Component {
  state = {
    client: { name: "dvklkjhghjklnbn,;" }
  };

  /* componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
      console.log(user);
    } catch (ex) {}
  }*/

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <NavBar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <h1>Wellcome to administrator page</h1>
              {this.state.user && <h1>M. {this.state.user.name} bonjour</h1>}
              <CardA name={"Client"} count={10} link={"/"} />
              <CardA name={"Article"} count={100} link={"/Article"} />
              <CardA name={"Commande"} count={200} link={"/"} />
              <CardA name={"Depot"} count={30} link={"/"} />
              <CardA name={"Facture"} count={50} link={"/"} />
              <CardA name={"Taux"} count={20} link={"/"} />
              <CardA name={"Rep"} count={40} link={"/"} />
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminHome;
