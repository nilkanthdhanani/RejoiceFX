
import styles from './services.module.scss'
import Link from 'next/link';
import Image from "next/image";

import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";
import services1 from "@/assets/images/webp/services1.webp";
import services2 from "@/assets/images/webp/services2.webp";
import services3 from "@/assets/images/webp/services3.webp";

export default function Services() {
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
                    <div className={styles.container}>
                        <div className={styles.servicesDetail}>
                            <div className={styles.headingBatch}>
                                <button type="button" >
                                    <Image src={buttonFx} alt="buttonFx" />
                                    <span>Services</span>
                                </button>
                            </div>
                            <h2>Services Tailored for Forex Success</h2>
                            <p>Unlock comprehensive solutions to enhance your Forex brokerage with cutting-edge technology and expert support.</p>
                        </div>
                        <div className={styles.servicesGrid}>
                            <Link href={"/forex-crm"}>
                                <div className={styles.servicesGridBox}>
                                    <div className={styles.servicesGridBox1}>
                                        <span>01</span>
                                        <h3>CRM</h3>
                                        <p>Manage clients and streamline operations with a CRM designed specifically for Forex businesses.</p>
                                    </div>
                                    <div className={styles.servicesGridBoxImg}>
                                        <Image src={services1} alt="services1" />
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/forex-licence-mauritius"}>
                                <div className={styles.servicesGridBox}>
                                    <div className={styles.servicesGridBox1}>
                                        <span>02</span>
                                        <h3>Licenses</h3>
                                        <p>Obtain your Forex broker license seamlessly in jurisdictions like Mauritius and St. Lucia with our expert guidance.</p>
                                    </div>
                                    <div className={styles.servicesGridBoxImg}>
                                        <Image src={services2} alt="services2" />
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/algo-bot"}>
                                <div className={styles.servicesGridBox}>
                                    <div className={styles.servicesGridBox1}>
                                        <span>03</span>
                                        <h3>Algo Bot</h3>
                                        <p>Automate your trading strategies using intelligent bots that execute trades based on real-time market analysis.</p>
                                    </div>
                                    <div className={styles.servicesGridBoxImg}>
                                        <Image src={services3} alt="services3" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
