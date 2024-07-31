import React from "react";
import ReactDOM from "react-dom";
import { RecipesProvider } from "./context/RecipesContext.js";
import App from "./App.js"


import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <RecipesProvider>
      <App />
    </RecipesProvider>
    
    
  </React.StrictMode>,
  document.getElementById("root")
);
