import React, { Component } from "react";
import axios from "axios";
class ReactBook extends Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    // const results = await axios.get(
    //   "https://cors-anywhere.herokuapp.com/api.randomuser.me/?nat=US&results=1"
    // );
    // let res = await fetch(
    //   "https://cors-anywhere.herokuapp.com/api.randomuser.me/?nat=US&results=1"
    // );
    // console.log("res", res.json());
    // let results = res.json();
    // console.log(results);
    // console.log("data", results.data.results[0]);
  }
  getPeople = (count) =>
    new Promise((resolves, rejects) => {
      const api = `https://api.randomuser.me/?nat=US&results=${count}`;
      const request = new XMLHttpRequest();
      request.open("GET", api);
      request.onload = () =>
        request.status === 200
          ? resolves(JSON.parse(request.response).results)
          : rejects(Error(request.statusText));
      request.onerror = (err) => rejects(err);
      request.send();
    });

  render() {
    this.getPeople();
    return <div></div>;
  }
}
export default ReactBook;
