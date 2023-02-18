import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <aside class="sidebar">
    <nav class="nav">
      <ul>
        <li class="active"><a href="#">Welcome</a></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/poems">Poems</Link></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Contact Me</a></li>
        <li></li>
      </ul>
    </nav>
  </aside>
  )
}

export default Navbar;