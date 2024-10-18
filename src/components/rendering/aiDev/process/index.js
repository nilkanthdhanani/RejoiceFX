
import styles from './process.module.scss'
import Image from "next/image";

import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";

export default function Process() {
    return (
        <section className={styles.process}>
            <div className={styles.containerMax}>
                <div className={styles.processInner}>
                    <div className={styles.processLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.processLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.processDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>How It Work</span>
                            </button>
                        </div>
                        <h2>Our Work Process</h2>
                        <p>The systematic approach of Rejoice FX is worth an in-depth exploration, where expertise is combined for results that are beyond compare.</p>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.processDiv}>
                            <div className={styles.processDivBox}>
                                <div className={styles.tracker}>
                                    <div className={styles.trackerIcon}>01</div>
                                </div>
                                <div className={styles.processDivContent}>
                                    <h3>Requirement Analysis</h3>
                                    <p>We start by understanding your forex business needs, ensuring our solutions are perfectly aligned with your goals and challenges. This deep dive sets the foundation for a successful collaboration.</p>
                                </div>
                            </div>
                            <div className={styles.processDivBox}>
                                <div className={styles.tracker}>
                                    <div className={styles.trackerIcon}>02</div>
                                </div>
                                <div className={styles.processDivContent}>
                                    <h3>Design & Development</h3>
                                    <p>Our team crafts tailored forex solutions with a focus on innovation and functionality. From web platforms to AI bots, we design and develop to ensure seamless performance.</p>
                                </div>
                            </div>
                            <div className={styles.processDivBox}>
                                <div className={styles.tracker}>
                                    <div className={styles.trackerIcon}>03</div>
                                </div>
                                <div className={styles.processDivContent}>
                                    <h3>Testing & Quality Assurance</h3>
                                    <p>We rigorously test every solution to meet top industry standards. Our focus is on ensuring that your platforms operate smoothly and reliably in the fast-paced forex market.</p>
                                </div>
                            </div>
                            <div className={styles.processDivBox}>
                                <div className={styles.tracker}>
                                    <div className={styles.trackerIcon}>04</div>
                                </div>
                                <div className={styles.processDivContent}>
                                    <h3>Deployment & Support</h3>
                                    <p>After successful testing, we deploy the solution and offer continuous support. Whether it’s trading platforms or CRM systems, we ensure smooth operations post-launch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
