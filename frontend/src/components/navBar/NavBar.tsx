import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
        <div><a href='/' className='logo'>Logo</a></div>
        <nav>
            <Link to='/'>Main</Link>
            <Link to='/projects'>Our Works</Link>
            <Link to='/contacts'>Contacts</Link> 
        </nav>
    </header>
  )
}
