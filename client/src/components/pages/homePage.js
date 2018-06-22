import React, { Component } from 'react';
import Home_page1 from '../../components/bodyComponent/homepage1';
import Home_page2 from '../../components/bodyComponent/homepage2';

class Homepage extends Component {
  render() {
    return (
      
    	<div className='container-fluid'>

    	<h1>Home Page Content</h1>


		  <Home_page1 />
          <Home_page2 />

    	</div>
    );
  }
}

export default Homepage;
