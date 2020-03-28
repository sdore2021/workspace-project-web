import jwtDecode from "jwt-decode";
import axios from "axios";
import React, { Component } from "react";
import NavBar from "./navBar";
import CardA from "./cards";
import { auth } from "./auth";

class AdminHome extends Component {
  state = {
    user: "",
    article: "0",
    client: "0",
    commande: "0",
    depot: "0"
  };

  componentDidMount() {
    // ineficace mais pour le moment c bon je ferai apres dans app.js
    this.setState({ user: auth() });

    axios.get("http://localhost:4000/gestions/getArticle").then(res => {
      const article = res.data.length;
      this.setState({ article });
    });
  }

  render() {
    const { article, commande, depot, client, user } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <NavBar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
<<<<<<< HEAD
              <h1
                style={{
                  padding: "30px 10px"
                }}
              >
                Wellcome to administrator page (M. ou Mme) {user && user.name}
              </h1>
              <CardA name={"Client"} count={client} link={"/"} />
              <CardA name={"Article"} count={article} link={"/Article"} />
              <CardA name={"Commande"} count={commande} link={"/"} />
              <CardA name={"Depot"} count={depot} link={"/"} />
              <CardA name={"Facture"} count={50} link={"/"} />
=======
              <h1>Welcome to administrator page</h1>
              {this.state.user && <h1>M. {this.state.user.name} bonjour</h1>}
              <CardA name={"Clients"} count={client} link={"/Client"} />
              <CardA name={"Articles"} count={article} link={"/Article"} />
              <CardA name={"Commandes"} count={commande} link={"/Commande"} />
              <CardA name={"Dépôts"} count={depot} link={"/Depot"} />
              <CardA name={"Factures"} count={50} link={"/Facture"} />
>>>>>>> c9b4618282b0fc8e4689ee03719e4428ce3a45a2
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
