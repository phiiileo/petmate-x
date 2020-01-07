import React from 'react';
import './sass/App.scss';
import Header from "./petMate/Header";
import HomepageIntro from "./petMate/HomepageIntro";
import HomepagePets from "./petMate/HomepagePets";
import petData from "./petMate/PetData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      petData,
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <HomepageIntro />
        <HomepagePets details={this.state.petData} />
      </div>
    );
  }

}

export default App;
