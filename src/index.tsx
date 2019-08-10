import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>what's up</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
