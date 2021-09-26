import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GrowerDashboardPage from "./GrowerDashboardPage";
import SplashPage from "./SplashPage";
import GrowerAddPlantPage from "./GrowerAddPlantPage";

//components

import Plant from "./components/Plant";

import ActivistPage from "./components/ActivistPage";
import Header from "./Header";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <SplashPage />
        </Route>
        <Route path="/growerDashboard" exact>
          <GrowerDashboardPage />
        </Route>
        <Route path="/growerAddPlant" exact>
          <GrowerAddPlantPage />
        </Route>
        <Route path="/plants/:id">
          <Plant />
        </Route>
        <Route path="/home">
          <ActivistPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
