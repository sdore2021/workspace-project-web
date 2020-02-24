import React, { Component } from "react";
import axios from "axios";
class Articles extends Component {
  state = {
    articles: []
  };
  async componentDidMount() {
    axios.get("http://localhost:4000/gestions/getArticle").then(res => {
      const articles = res.data;
      this.setState({ articles });
    });
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
          </tr>
        </thead>
        <tbody>
          {this.state.articles.map(article => (
            <tr>
              <th>{article._id}</th>
              <th>{article.prix_HT}</th>
              <th>{article.qts}</th>
              <th>{article.taux_tva}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Articles;
