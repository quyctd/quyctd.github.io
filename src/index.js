import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

library.add(faGithub, faLinkedin, faFacebookSquare);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
