import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'


export const Home = () => {
  

  

  return (
    <div className={`${styles.vertical_center} ${styles.horizontal_rigth} animate__animated animate__fadeInRight  animate__delay-1s`}>
      <div>
        <h1 className={styles.title}>
          
            Decision<br/>Helper
           
        </h1>
        <p className={styles.descr}>Get help for organizing and analyzing your tough decisions</p>
        <Link to="/new" className={styles.btn}>Start</Link>
        <Link to="/about" className={styles.about}>How it works?</Link>
        </div>      
    </div>
  )
}
