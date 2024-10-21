import styles from './clockWork.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import clockWork1 from "@/assets/images/webp/clockWork1.webp";
import clockWork2 from "@/assets/images/webp/clockWork2.webp";
import clockWork3 from "@/assets/images/webp/clockWork3.webp";
import clockWorkIco1 from "@/assets/images/svg/clockWorkIco1.svg";
import clockWorkIco2 from "@/assets/images/svg/clockWorkIco2.svg";
import clockWorkIco3 from "@/assets/images/svg/clockWorkIco3.svg";
import clockWorkIco4 from "@/assets/images/svg/clockWorkIco4.svg";
import clockWorkIco5 from "@/assets/images/svg/clockWorkIco5.svg";
import clockWorkIco6 from "@/assets/images/svg/clockWorkIco6.svg";


export default function ClockWork() {
    return (

        <section className={styles.clockWork}>
            <div className={styles.container}>
                <div className={styles.clockWorkDetail}>
                    <div className={styles.headingBatch}>
                        <button type="button" >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Work Process</span>
                        </button>
                    </div>
                    <h2>Works like a clock</h2>
                </div>
                <div className={styles.clockWorkBox}>
                    <div className={styles.clockWorkBoxDetail}>
                        <h3><span>01</span>Quality-oriented</h3>
                        <p>Our robust technology stack helps produce the highest-quality solution on the market</p>
                        <div className={styles.clockWorkBoxContent}>
                            <div className={styles.clockWorkBoxContent1}>
                                <div className={styles.clockWorkBoxImg}>
                                    <Image src={clockWorkIco1} alt="clockWorkIco1" />
                                </div>
                                <h4>Seamless Data Integration with Web API</h4>
                                <p>Powerful Web API allows getting direct data retrieval from trading platforms through our system for various reporting purposes</p>
                            </div>
                            <div className={styles.clockWorkBoxContent1}>
                                <div className={styles.clockWorkBoxImg}>
                                    <Image src={clockWorkIco2} alt="clockWorkIco2" />
                                </div>
                                <h4>Interface Design with React and Angular</h4>
                                <p>Cutting-edge design frameworks like React and Angular get you the most of your interface</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.clockWorkBoxImg}>
                        <Image src={clockWork1} alt="clockWork1" />
                    </div>
                </div>
                <div className={styles.clockWorkBox2}>
                    <div className={styles.clockWorkBoxImg}>
                        <Image src={clockWork2} alt="clockWork2" />
                    </div>
                    <div className={styles.clockWorkBoxDetail}>
                        <h3><span>02</span>Reliable</h3>
                        <p>Not just a word to us. Meticulous testing and well-thought architecture are highly prioritised</p>
                        <div className={styles.clockWorkBoxContent}>
                            <div className={styles.clockWorkBoxContent1}>
                                <div className={styles.clockWorkBoxImg}>
                                    <Image src={clockWorkIco3} alt="clockWorkIco3" />
                                </div>
                                <h4>Client-Focused Solutions Since 2014</h4>
                                <p>Client-oriented since 2014.We offer user-friendly solutions with helpful guides and educational sessions to easily work with our products</p>
                            </div>
                            <div className={styles.clockWorkBoxContent1}>
                                <div className={styles.clockWorkBoxImg}>
                                    <Image src={clockWorkIco4} alt="clockWorkIco4" />
                                </div>
                                <h4>Advanced Architecture</h4>
                                <p>Experience unparalleled stabilitywith our product. By leveraging Docker, microservices, and advanced architecture, we deliver seamless integration and reliable performance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.clockWorkBox3}>
                    <div className={styles.clockWorkBoxDetail}>
                        <h3><span>03</span>Secure</h3>
                        <p>We value our reputation &long-term relations. Your funds aresafe with us</p>
                        <div className={styles.clockWorkBoxContent}>
                            <div className={styles.clockWorkBoxContent1}>
                                <div className={styles.clockWorkBoxImg}>
                                    <Image src={clockWorkIco5} alt="clockWorkIco5" />
                                </div>
                                <h4>Automated Monitoring</h4>
                                <p>Each client's setup has adedicated server with fully automated monitoring systemtotrack the uptime of your production environment</p>
                            </div>
                            <div className={styles.clockWorkBoxContent1}>
                                <div className={styles.clockWorkBoxImg}>
                                    <Image src={clockWorkIco6} alt="clockWorkIco6" />
                                </div>
                                <h4>2FA and User Management</h4>
                                <p>Our support department monitors any potential errorsand resolves them quickly andeffectively</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.clockWorkBoxImg}>
                        <Image src={clockWork3} alt="clockWork3" />
                    </div>
                </div>
            </div>
        </section>
    )
}
