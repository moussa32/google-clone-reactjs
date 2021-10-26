import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "./components/Loading";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

import "./global.css";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <ResultContextProvider>
      <Router>
        <App />
      </Router>
    </ResultContextProvider>
  </Suspense>,
  document.getElementById("root")
);
