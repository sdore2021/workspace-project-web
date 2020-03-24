import React, { Component } from "react";
import axios from "axios";
/**
 * id_article 5e4e9f35456475519cdddfa9
 */
class InsertArticle extends Component {
  state = {
    identificateur: 0,
    title: "",
    desc: "",
    price: 0.0
  };

  handleIdentificateur = event => {
    this.setState({ identificateur: parseInt(event.target.value) });
  };

  handleTitle = event => {
    this.setState({ title: event.target.value });
  };

  handleDesc = event => {
    this.setState({ desc: event.target.value });
  };

  handlePrice = event => {
    this.setState({ price: parseFloat(event.target.value) });
  };

  handleSubmit = event => {
    event.preventDefault();

    const article = {
      identificateur: this.state.identificateur,
      title: this.state.title,
      desc: this.state.desc,
      price: this.state.price
    };

    axios
      .post("http://localhost:4000/gestions/createArticle", article)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    /*this.render(){<Toast>
        <Toast.Header>
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>}*/
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          
          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-sm">
              Identificateur
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                min="1"
                value="1"
                name="prix_HT"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="col-form-label-sm"
                onChange={this.handlePrix_HT}
              />
            </div>
          </div>
          
          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-sm">
              Nom
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="prix_HT"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="col-form-label-sm"
                onChange={this.handlePrix_HT}
              />
            </div>
          </div>
          
          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-sm">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="prix_HT"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="col-form-label-sm"
                onChange={this.handlePrix_HT}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-sm">
              Prix Hors Taxe
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                min="0.1"
                step="0.1"
                value="1.0"
                name="prix_HT"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="col-form-label-sm"
                onChange={this.handlePrix_HT}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            Insert new Article
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default InsertArticle;
