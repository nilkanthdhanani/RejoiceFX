import Link from "next/link";
import styles from "./sidebar.module.scss";

import logo from '@/assets/images/svg/logo.svg';
import angleDown from '@/assets/images/svg/angleDown.svg';
import Image from "next/image";
import { useState } from "react";
import ArrowSmallRight from "@/assets/images/svg/arrowSmallRight";

export default function Sidebar({ isOpen, closeSidebar }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(prevSection => (prevSection === section ? null : section));
  };

  const handleLinkClick = () => {
    closeSidebar();
  };

  return (
    <aside className={`${styles.aside} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarDiv}>
        <div className={styles.logo}>
          <Link href={"/"} onClick={handleLinkClick}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <div className={styles.linkDiv}>
          <div className={styles.sidebarDivLink1}>
            <Link href={"/forex-crm"} onClick={handleLinkClick}><span>Forex CRM</span></Link>
          </div>

          <div className={styles.linkDivMain} onClick={() => toggleSection('forexLicense')}>
            <div className={styles.sidebarDivLink}>
              <h2>Forex Licence</h2>
              <Image
                src={angleDown}
                alt="angleDown"
                className={`${openSection === 'forexLicense' ? styles.rotated : ''}`}
              />
            </div>
            <div className={`${styles.sidebarDivLinkInner} ${openSection === 'forexLicense' ? styles.open : ''}`}>
              <Link href={"/forex-licence-mauritius"} onClick={handleLinkClick}><span>Mauritius Forex License</span></Link>
              <Link href={"/forex-licence-vincent"} onClick={handleLinkClick}><span>St. Vincent Forex License</span></Link>
            </div>
          </div>

          <div className={styles.linkDivMain} onClick={() => toggleSection('algoBot')}>
            <div className={styles.sidebarDivLink}>
              <h2>Algo Bot & Strategies</h2>
              <Image
                src={angleDown}
                alt="angleDown"
                className={`${openSection === 'algoBot' ? styles.rotated : ''}`}
              />
            </div>
            <div className={`${styles.sidebarDivLinkInner} ${openSection === 'algoBot' ? styles.open : ''}`}>
              <Link href={"/algo-bot"} onClick={handleLinkClick}><span>AI bot development</span></Link>
              <Link href={"/algo-bot"} onClick={handleLinkClick}><span>Strategies</span></Link>
            </div>
          </div>

          <div className={styles.linkDivMain} onClick={() => toggleSection('forexServices')}>
            <div className={styles.sidebarDivLink}>
              <h2>Forex Services</h2>
              <Image
                src={angleDown}
                alt="angleDown"
                className={`${openSection === 'forexServices' ? styles.rotated : ''}`}
              />
            </div>
            <div className={`${styles.sidebarDivLinkInner} ${openSection === 'forexServices' ? styles.open : ''}`}>
              <Link href={"/ai-development"} onClick={handleLinkClick}><span>AI Web/ Mobile Development</span></Link>
              <Link href={"/mobile-development"} onClick={handleLinkClick}><span>AI Development</span></Link>
            </div>
          </div>

          <div className={styles.contactButton}>
            <Link href={"/contactus"}>
              <button type="submit"><span>Contact Us</span><ArrowSmallRight /></button>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
