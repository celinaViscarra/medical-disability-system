import React from 'react';
import './App.scss';
import Routing from './Components/Routing';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Routing/>
      <ToastContainer/>
      
    </div>
  );
}

export default App;