import "./App.css";

import {
  BrowserRouter,
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
} from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Home from "./components/Home";
import Login from "./components/Login.js";

// import Loader from "./components/loaders/Loaders";

// const Login = lazy(() => import("./components/Login.js"));

function Routes() {
//   const appLoader = Loader();
  return (
    <Router>
      {/* <Suspense fallback={appLoader}> */}
        <Switch>
           <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={Home} />
          {/* <Redirect from="*" to="/" /> */}
          </Switch>
      {/* </Suspense> */}
    </Router>
  );
}


export default {
  Routes,
  ProtectedRoutes,
};