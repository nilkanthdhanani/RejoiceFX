
import styles from './services.module.scss'
import Image from "next/image";

import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";
import success1 from "@/assets/images/png/success1.png";
import success2 from "@/assets/images/png/success2.png";
import success3 from "@/assets/images/png/success3.png";

export default function Success() {
    return (
        <section className={styles.services}>
            <div className={styles.containerMax}>
                <div className={styles.servicesInner}>
                    <div className={styles.servicesLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.servicesLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.servicesDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Digital Solutions for Every Device</span>
                            </button>
                        </div>
                        <h2>Mobile & Web Development for Your Success</h2>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.servicesGrid}>
                            <div className={styles.servicesGridBox}>
                                <div className={styles.servicesGridBox1}>
                                    <span>01</span>
                                    <h3>Custom App Development</h3>
                                    <p>We create tailored mobile applications for iOS and Android, designed to meet your business needs and engage your users.</p>
                                </div>
                                <Image src={success1} alt="success1" />
                            </div>
                            <div className={styles.servicesGridBox}>
                                <div className={styles.servicesGridBox1}>
                                    <span>02</span>
                                    <h3>Responsive Web Design</h3>
                                    <p>Create visually appealing, high-performance websites that deliver a seamless experience across all devices.</p>
                                </div>
                                <Image src={success2} alt="success2" />
                            </div>
                            <div className={styles.servicesGridBox}>
                                <div className={styles.servicesGridBox1}>
                                    <span>03</span>
                                    <h3>E-Commerce Integration</h3>
                                    <p>Develop secure and scalable e-commerce platforms with integrated payment gateways and CRM systems for streamlined operations.</p>
                                </div>
                                <Image src={success3} alt="success3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
