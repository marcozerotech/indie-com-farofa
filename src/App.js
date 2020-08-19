import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/novidades" component={""} />
        <Route path="/" component={""} />
      </Switch>
      {/*
        home {
          Presentation
          * Player *
          Recent Launches
          Artists
          Events => Event Page + *RSVP => BackEnd needed => Send Emails*
        }
        */}
    </div>
  );
}

export default App;
