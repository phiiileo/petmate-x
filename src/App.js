import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './sass/App.scss';
import Header from "./petMate/Header";
import HomepageIntro from "./petMate/HomepageIntro";
import HomepagePets from "./petMate/HomepagePets";
import petData from "./petMate/PetData";
import Policy from "./petMate/Pages/Policy"
import About_us from './petMate/Pages/About-us';
import Contact_us from './petMate/Pages/Contact-us';
import PetList from './petMate/Pages/PetList';
import Sign_In from './petMate/Pages/Sign_In';
import Register from './petMate/Pages/Register';
import CurrentPet from './petMate/Pages/Current-pet';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      petData,
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/petmate-x" render={props => (
            <React.Fragment>
              <HomepageIntro />
              <HomepagePets details={this.state.petData} />
            </React.Fragment>
          )} />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <HomepageIntro />
              <HomepagePets details={this.state.petData}/>
            </React.Fragment>
          )} />
          <Route path="/policy" component={Policy} />
          <Route path="/about-us" component={About_us} />
          <Route path="/contact-us" component={Contact_us} />
          <Route path="/pet-list" component={PetList} />
          <Route path="/sign-in" component={Sign_In} />
          <Route path="/register" component={Register} />
          <Route path="/current-pet" component={CurrentPet} />
        </div>
      </Router>
    );
  }

}

export default App;
