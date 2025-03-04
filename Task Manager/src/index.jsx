import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/MyApp/App";
import styles from "./components/MyApp/dashboard.module.css";
import "./components/MyApp/globalBackground.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <div className={styles.appWrapper}>
      <App />
    </div>
  </Router>
);