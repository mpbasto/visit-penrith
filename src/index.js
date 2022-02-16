/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
// pages
import Home from "./views/Home.js";
import History from "./views/History.js";
import Eat from "./views/Eat.js";
import Sleep from "./views/Sleep.js";
import Explore from "./views/Explore.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" render={(props) => <Home {...props} />} />
      <Route
        path="/history"
        render={(props) => <History {...props} />}
      />
      <Route
        path="/eat"
        render={(props) => <Eat {...props} />}
      />
      <Route
        path="/sleep"
        render={(props) => <Sleep {...props} />}
      />
      <Route
        path="/explore"
        render={(props) => <Explore {...props} />}
      />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
