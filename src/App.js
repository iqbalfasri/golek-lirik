import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Pages component
import Homepage from './pages/homepage';

import "./App.css";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Fragment>
  );
}

export default App;
