import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Pages component
import Homepage from "./pages/homepage";
import Lyricpage from "./pages/lyricpage";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/lyric/:track_id" component={Lyricpage} />
      </Switch>
    </Fragment>
  );
}

export default App;
