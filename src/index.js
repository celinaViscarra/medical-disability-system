import React from 'react';
import * as ReactDom from 'react-dom';
import './index.scss';
import App from './App';
import './Firebase'
import 'bootswatch/dist/litera/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css"

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

