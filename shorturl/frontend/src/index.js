import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Correct import for React 18
import App from "./app.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
