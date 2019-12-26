import React from 'react';
import Navbar from './Navbar';
import styles from "./Home.module.css";

function Home () 
{
  return (<div>
     <div><Navbar /></div>
     <div className={styles.responsive}>
     <img src='./todoImage.jpg' className={styles.responsive} alt='todo-list' width='1000' height='800'/>
  
    </div>
  </div>)

}

export default Home