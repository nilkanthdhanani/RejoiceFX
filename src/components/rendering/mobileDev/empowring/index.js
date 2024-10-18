
import styles from './empowring.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import listIcon from "@/assets/images/svg/listIcon.svg";
import empowringImg from "@/assets/images/png/empowringImg.png";

export default function Empowring() {
    return (
        <section className={styles.empowring}>
            <div className={styles.container}>
                <div className={styles.empowringDetail}>
                    <div className={styles.headingBatch}>
                        <button type="button" >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Mobile & Web</span>
                        </button>
                    </div>
                    <h2>Empowering Your Business Through Digital Solutions</h2>
                </div>
                <div className={styles.empowringGrid}>
                    <div className={styles.empowringGridList}>
                        <h3>Benefits of Mobile Development:</h3>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Wider Customer Reach</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Enhanced User Engagement</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Real-Time Communication</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Monetization Opportunities</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Offline Access</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Brand Visibility</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Improved Efficiency</p>
                        </div>
                    </div>
                    <div className={styles.empowringGridImage}>
                        <Image src={empowringImg} alt="empowringImg" />
                    </div>
                    <div className={styles.empowringGridList}>
                        <h3>Benefits of Web Development:</h3>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Broader Online Presence</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Responsive Design</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>SEO & Traffic Growth</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Easy Updates & Scalability</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>E-Commerce Integration</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Cost-Effective Marketing</p>
                        </div>
                        <div className={styles.empowringGridListIco}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Data Analytics & Insights</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
