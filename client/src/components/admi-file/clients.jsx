import React, { Component } from "react";
import axios from "axios";
class Clients extends Component {
  state = {
    clients: []
  };
  async componentDidMount() {
    axios.get("http://localhost:4000/gestions/getClient").then(res => {
      const clients = res.data;
      this.setState({ clients });
    });
    console.log(this.state.clients);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>numero client</th>
            <th>Nom client</th>
            <th>Taux Remise</th>
            <th>les commandes</th>
          </tr>
        </thead>
        <tbody>
          {this.state.clients.map(client => (
            <tr>
              <th>{client._id}</th>
              <th>{client.nom_client}</th>
              <th>{client.taux_remise}</th>
              <th>{client.commande.length}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Clients;
