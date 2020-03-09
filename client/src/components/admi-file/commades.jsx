import React, { Component } from "react";
import axios from "axios";
class Commandes extends Component {
  state = {
    commandes: []
  };
  async componentDidMount() {
    axios.get("http://localhost:4000/gestions/getCommande").then(res => {
      const commandes = res.data;
      this.setState({ commandes });
    });
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>numero commande</th>
            <th>Date commande</th>
            <th>Articles</th>
          </tr>
        </thead>
        <tbody>
          {this.state.commandes.map(commande => (
            <tr>
              <th>{commande._id}</th>
              <th>{commande.date_commande}</th>
              <th>{commande.articles.length}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Commandes;
