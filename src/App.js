import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login.js"
import ScheduleCreator from "./ScheduleCreator"
import Schedule from "./Schedule"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Login/>
        </Route>
        <Route path = "/userInteract">
          <ScheduleCreator/>
        </Route>
        <Route path = "/schedules">
          <Schedule/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
