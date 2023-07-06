import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/new'>New</Link></li>
        <li><Link to='/pokemon/:id'>Detail</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
