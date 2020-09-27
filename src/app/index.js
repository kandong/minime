import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/firestore";
import Input from "./Input";
import Display from "./Display";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
});
const db = firebase.firestore();
const baby = db.collection("babies").doc("1");

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/input">
          <Input baby={baby} />
        </Route>
        <Route path="/">
          <Display baby={baby} />
        </Route>
      </Switch>
    </Router>
  );
}
