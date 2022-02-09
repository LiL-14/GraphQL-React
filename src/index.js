import React from "react";
import ReactDom from "react-dom";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import  {ApolloProvider} from "@apollo/client";
import client from "./services/index";

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

