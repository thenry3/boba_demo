import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route } from "react-router-dom";

import Demo_Page from "./pages/Demo_Page";
import DemoGalleryPage from "./pages/DemoGalleryPage";

export default class App extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Route exact path="/" component={Demo_Page} />
          <Route path="/gallery" component={DemoGalleryPage} />
        </HashRouter>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
