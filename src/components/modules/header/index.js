import React from 'react'
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/svg/logo.svg';
import angleDown from '@/assets/images/svg/angleDown.svg';
import Link from 'next/link';
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

const licenceDropBox = [
  {
    name: "Mauritius Forex License",
    details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/forexlicencemauritius",
  },
  {
    name: "St. Vincent Forex License",
    details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/forexlicencemvincent",
  },
];

const botDropBox = [
  {
    name: "AI bot development",
    details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/",
  },
  {
    name: "Strategies",
    details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/",
  },
];

const serviceDropBox = [
  {
    name: "AI Web/ Mobile Development",
    details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/",
  },
  {
    name: "AI Web/ Mobile Development",
    details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/",
  },
];

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
                <Link href={"/forexcrm"}>
                  <div className={styles.menuLink}>Forex CRM</div>
                </Link>
              </div>
              <div className={styles.menuDiv}>
                <div className={styles.menuLink}>Forex Licenses
                  <Image src={angleDown} alt="angleDown" />
                </div>
                <div className={styles.submenuDiv}>
                  <div className="container">
                    <div className={styles.submenuDivGrid}>
                      {licenceDropBox.map((item, index) => (
                        <div className={styles.submenuDivGridContent} key={index}>
                          <h2>{item.name}</h2>
                          <p>{item.details}</p>
                          <Link href={item.link} >See Solution<ArrowSmallRight /></Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.menuDiv}>
                <div className={styles.menuLink}>Algo Bot & Strategies
                  <Image src={angleDown} alt="angleDown" />
                </div>
                <div className={styles.submenuDiv}>
                  <div className="container">
                    <div className={styles.submenuDivGrid}>
                      {botDropBox.map((item, index) => (
                        <div className={styles.submenuDivGridContent} key={index}>
                          <h2>{item.name}</h2>
                          <p>{item.details}</p>
                          <Link href={item.link} >See Solution<ArrowSmallRight /></Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.menuDiv}>
                <div className={styles.menuLink}>Forex Services
                  <Image src={angleDown} alt="angleDown" />
                </div>
                <div className={styles.submenuDiv}>
                  <div className="container">
                    <div className={styles.submenuDivGrid}>
                      {serviceDropBox.map((item, index) => (
                        <div className={styles.submenuDivGridContent} key={index}>
                          <h2>{item.name}</h2>
                          <p>{item.details}</p>
                          <Link href={item.link} >See Solution<ArrowSmallRight /></Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
