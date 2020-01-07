import React from 'react';
import './sass/App.scss';
import Header from "./petMate/Header";
import HomepageIntro from "./petMate/HomepageIntro";
import HomepagePets from "./petMate/HomepagePets";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Phileo"
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <HomepageIntro />
        <HomepagePets />
      </div>
    );
  }

}

export default App;
