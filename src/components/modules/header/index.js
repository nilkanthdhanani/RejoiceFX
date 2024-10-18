"use client";

import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/images/svg/logo.svg';
import angleDown from '@/assets/images/svg/angleDown.svg';
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

import Drop1 from './drop1';
import Drop2 from './drop2';
import Drop3 from './drop3';
import Sidebar from '../sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSidebarOpen]);

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
                <Link href={"/forex-crm"}>
                  <div className={styles.menuLink}>Forex CRM</div>
                </Link>
              </div>
              <div className={styles.menuDiv}>
                <div className={styles.menuLink}>Forex Licenses
                  <Image src={angleDown} alt="angleDown" />
                </div>
                <Drop1 />
              </div>
              <div className={styles.menuDiv}>
                <div className={styles.menuLink}>Algo Bot & Strategies
                  <Image src={angleDown} alt="angleDown" />
                </div>
                <Drop2 />
              </div>
              <div className={styles.menuDiv}>
                <div className={styles.menuLink}>Forex Services
                  <Image src={angleDown} alt="angleDown" />
                </div>
                <Drop3 />
              </div>
            </div>
            <div className={styles.contactMenu}>
              <div className={styles.contactButton}>
                <Link href={"/contactus"}>
                  <button type="submit"><span>Contact Us</span><ArrowSmallRight /></button>
                </Link>
              </div>
              <div className={styles.menuIcon} onClick={toggleSidebar}>
                <svg
                  className={`${styles.ham} ${styles.ham2} ${isSidebarOpen ? styles.active : ''}`}
                  viewBox="0 0 100 100"
                  width="60">
                  <path
                    className={`${styles.line} ${styles.top}`}
                    d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"/>
                  <path className={`${styles.line} ${styles.middle}`} d="m 30,50 h 40" />
                  <path
                    className={`${styles.line} ${styles.bottom}`}
                    d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </header>
    </>
  );
}
