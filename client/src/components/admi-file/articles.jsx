import React, { Component } from "react";
import axios from "axios";
import { auth } from "./auth";
<<<<<<< HEAD
import AddArticle from "./AddArticle";
=======
import { Route } from "react-router-dom";

import InsertArticle from "./insertArticle";
>>>>>>> c9b4618282b0fc8e4689ee03719e4428ce3a45a2

class Articles extends Component {
  state = {
    articles: [],
    addModalShow: false
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
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div>
<<<<<<< HEAD
        <table className="table">
          <thead>
            <tr>
              <th>ID_Article</th>
              <th>Title</th>
              <th>Price</th>
              <th>ID_Depot</th>
=======
      <Route path="/add" component={InsertArticle} />
      <table className="table">
        <thead>
          <tr>
            <th>Numéro d'article</th>
            <th>Nom de l'article</th>
            <th>Description</th>
            <th>Prix</th>
            <th>
              <a href="http://localhost:3000/addArticle" className="btn btn-primary btn-sm">Ajouter</a>
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
>>>>>>> c9b4618282b0fc8e4689ee03719e4428ce3a45a2
              <th>
                <button
                  onClick={() => this.setState({ addModalShow: true })}
                  className="btn btn-primary btn-sm"
                >
<<<<<<< HEAD
                  Ajoute
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.articles.map(article => (
              <tr key={article._id}>
                <th>{article._id}</th>
                <th>{article.title}</th>
                <th>{article.price}</th>
                <th>{article.depot}</th>
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
        <AddArticle show={this.state.addModalShow} onHide={addModalClose} />
=======
                  Supprimer
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <InsertArticle/>
>>>>>>> c9b4618282b0fc8e4689ee03719e4428ce3a45a2
      </div>
    );
  }
}

export default Articles;
