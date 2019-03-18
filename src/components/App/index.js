import React, { Component } from "react";
import ListItem from "../ListItem";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Item"]
    };
  }

  makeList = list => {
    this.setState(state => ({
      list: [...state.list, list]
    }));
  };

  render() {
    return (
      <>
        <ListItem /> {this.state.list};
        <ListItem />
      </>
    );
  }
}

export default App;
