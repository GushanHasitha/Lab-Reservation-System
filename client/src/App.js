import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Signpage from './components/pages/signupPage';
import Reservepage from './components/pages/reservePage';
import Home_page1 from './components/bodyComponent/homepage1'

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">

          <Header />

          <Route exact path='/' component={Homepage}/>
      <Route exact path='/signup' component={Signpage}/>
      <Route exact path='/reserve' component={Reservepage}/>

      <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
