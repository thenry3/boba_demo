import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route } from "react-router-dom";

import Demo_Page from "./pages/Demo_Page";

export default class App extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Route exact path="/" component={Demo_Page} />
        </HashRouter>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
