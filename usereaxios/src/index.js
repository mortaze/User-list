// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom/client"; // استفاده از متد جدید createRoot
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById("root")); // تعریف root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

