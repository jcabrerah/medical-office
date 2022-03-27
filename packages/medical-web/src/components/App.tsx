import React from 'react';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App" title="medical-app">
      {/* <header className="App-header">
        <p>medical app</p>
      </header> */}
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          {/* <Route component={PageNotFound} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
