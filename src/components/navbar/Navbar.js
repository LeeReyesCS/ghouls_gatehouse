import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <aside class="sidebar">
    <nav class="nav">
      <ul>
        <li class="active"><a href="#">Welcome</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Poems</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Contact Me</a></li>
        <li></li>
      </ul>
    </nav>
  </aside>
  )
}

export default Navbar;