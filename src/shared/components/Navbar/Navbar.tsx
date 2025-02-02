import Link from 'next/link';
import React from 'react';
import styles from "./Navbar.module.css"

const Navbar = () => {

    console.log()

  return (
    <nav className={styles.nav}>
        <div className={styles.title}>
            Welcome
        </div>
        <div className={styles.items}>
            <Link href={'/'}>aaaaaaaaaaaaa</Link>
            <Link href={'/'}>bbbbbbbbbbbbb</Link>
        </div>
    </nav>
  )
}

export default Navbar