import React from 'react'
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/svg/logo.svg';
import angleDown from '@/assets/images/svg/angleDown.svg';
import Link from 'next/link';
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerDiv}>
            <div className={styles.logo}>
              <Link href={"/"} >
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDiv}>
                <Link href={"/forexcrm"}>Forex CRM</Link>
              </div>
              <div className={styles.menuDiv}>
                <Link href={"/forexcrm"}>Forex CRM
                <Image src={angleDown} alt="angleDown" />
                </Link>
              </div>
            </div>
            <div className={styles.contactButton}>
              <button type="submit" ><span>Contact Us</span><ArrowSmallRight /> </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
