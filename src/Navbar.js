import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

function Navbar () 
{ return (<div className={styles}>
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/todo'>To do</Link></li>
     
    </ul>
  </nav>
</div>

)}


export default Navbar