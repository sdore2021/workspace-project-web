import React, { Component } from "react";
import axios from "axios";
import { auth } from "./auth";
import { Route } from "react-router-dom";
/** <Route path="/add" component={InsertArticle} /> */
class Articles extends Component {
  state = {
    articles: []
  };
  async componentDidMount() {
    auth();

    axios.get("http://localhost:4000/gestions/getArticle").then(res => {
      const articles = res.data;
      this.setState({ articles });
    });
  }

  handleDelete(article) {
    var url = "http://localhost:4000/gestions/deleteArticle/" + article._id;
    console.log(url);
    axios.delete(url).then(res => {
      console.log(res);
      console.log(res.data);
    });

    window.location.reload(false);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>numero d'article</th>
            <th>Prix</th>
            <th>Quantite</th>
            <th>Taux de TVA</th>
            <th>
              <button className="btn btn-primary btn-sm">Add</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.articles.map(article => (
            <tr>
              <th>{article._id}</th>
              <th>{article.prix_HT}</th>
              <th>{article.qts}</th>
              <th>{article.taux_tva}</th>
              <th>
                <button
                  onClick={() => this.handleDelete(article)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Articles;
