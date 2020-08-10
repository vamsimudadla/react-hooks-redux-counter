import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Counter from "./components/counter";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path={"/counter"} key={"Counter"} component={Counter} />
          <Route exact path={"/"} key={"Home"} component={Home} />
        </Router>
      </header>
    </div>
  );
}

export default App;
