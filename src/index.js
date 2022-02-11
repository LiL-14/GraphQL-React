import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./App";
import  {ApolloProvider} from "@apollo/client";
import client from "./services/index";
import Header from "./Components/Header";

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <Header/>
        <App/>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);



