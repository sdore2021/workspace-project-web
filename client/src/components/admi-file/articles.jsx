import React, { Component } from "react";
import axios from "axios";
import { auth } from "./auth";
import { Route } from "react-router-dom";

import InsertArticle from "./insertArticle";

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
      <div>
      <Route path="/add" component={InsertArticle} />
      <table className="table">
        <thead>
          <tr>
            <th>Numéro d'article</th>
            <th>Nom de l'article</th>
            <th>Description</th>
            <th>Prix</th>
            <th>
              <a href="http://localhost:3000/add" className="btn btn-primary btn-sm">Ajouter</a>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.articles.map(article => (
            <tr>
              <th>{article.identificateur}</th>
              <th>{article.title}</th>
              <th>{article.desc}</th>
              <th>{article.price}</th>
              <th>
                <button
                  onClick={() => this.handleDelete(article)}
                  className="btn btn-danger btn-sm"
                >
                  Supprimer
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Articles;
