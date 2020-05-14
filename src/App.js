import React from "react";
import CoverTaco from "./components/CoverTaco";
import Taco from "./components/Taco";
import "./App.css";

import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Tacos 🌮</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/taco-list">Taco Shop</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/taco-list">
          <Taco />
        </Route>
        <Route path="/">
          <CoverTaco />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
