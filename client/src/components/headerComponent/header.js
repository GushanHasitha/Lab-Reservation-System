import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

			<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			  <a class="navbar-brand" href="#"></a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarColor01">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item">
			        <Link to='/'>Home</Link>
			      </li>
			      <li class="nav-item">
                     <Link to='/reserve'>Reserve</Link>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Blog</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Contact</a>
			      </li>
			      <li class="nav-item">
			        <Link to='/signup'>Sign Up</Link>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Login</a>
			      </li>
			    </ul>
			    <form class="form-inline my-2 my-lg-0">
			      <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
			      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
			    </form>
			  </div>
			</nav>

      </header>
    );
  }
}

export default Header;
