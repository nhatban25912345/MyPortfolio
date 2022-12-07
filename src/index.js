import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Globle from "./components/GlobleStyles/GlobleStyles";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
    <Globle>
      <App />
    </Globle>
  // </StrictMode>
);

reportWebVitals();
