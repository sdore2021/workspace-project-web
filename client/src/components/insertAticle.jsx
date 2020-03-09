import React, { Component } from "react";
import axios from "axios";
/**
 * id_article 5e4e9f35456475519cdddfa9
 */
class InsertArticle extends Component {
  state = {
    prix_HT: "",
    qts: "",
    taux_tva: ""
  };
  handlePrix_HT = event => {
    this.setState({ prix_HT: event.target.value });
  };

  handleQst = event => {
    this.setState({ qts: event.target.value });
  };

  handleTauxTVA = event => {
    this.setState({ taux_tva: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const article = {
      prix_HT: parseInt(this.state.prix_HT),
      qts: parseInt(this.state.qts),
      taux_tva: this.state.taux_tva
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
              Prix-HT
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
              qts
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="qts"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="col-form-label-sm"
                onChange={this.handleQst}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-sm">
              taux_tva
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="taux_tva"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="col-form-label-sm"
                onChange={this.handleTauxTVA}
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
