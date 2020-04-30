import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './sass/App.scss';
import LandingPage from './Components/LandingPage/LandingPage';

class App extends React.Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    );
  }

}

export default App;
