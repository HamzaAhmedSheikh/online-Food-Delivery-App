import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Restaurant from './components/Restaurants'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
   <Router> 
    <div className="App">
      <Route exact path='/' component={Header} />
      <Route path='/restaurant' component={Restaurant} />   
    </div>
   </Router> 
  );
}

export default App;






/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='btn btn-warning'>warning</button>
      </header> */