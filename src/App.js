import { Menu } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Men from "./pages/Men";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/men" component={Men} />

          {/* <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
