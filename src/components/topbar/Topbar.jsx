import React from 'react'
import styles from './topbar.module.scss';
import Image from 'next/image';
import logo from "../../assets/images/png/navLogo.png";
import Router from 'next/router';
import Link from 'next/link';

const Topbar = () => {
    return (
        <div className={styles.topBar}>
            <Link href="/">
                <Image src={logo} alt='' />
            </Link>
        </div>
    )
}

export default Topbar;
