
import styles from './developing.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import buttonFxWhite from "@/assets/images/svg/buttonFxWhite.svg";
import brokeListIco from "@/assets/images/svg/brokeListIco.svg";
import brokerageIco1 from "@/assets/images/svg/brokerageIco1.svg";
import brokerageIco2 from "@/assets/images/svg/brokerageIco2.svg";
import brokerageIco3 from "@/assets/images/svg/brokerageIco3.svg";

export default function Developing() {
    return (
        <section >
            <div className={styles.containerMax}>
                <div className={styles.brokerage}>
                    <div className={styles.container}>
                        <div className={styles.brokerageHead}>
                            <div className={styles.headingBatchWhite}>
                                <button type="button" >
                                    <Image src={buttonFxWhite} alt="buttonFx" />
                                    <span>CRM System</span>
                                </button>
                            </div>
                            <h2>Developing an in-house CRM system typically takes at least 25 people and 2 years</h2>
                        </div>
                        <div className={styles.brokerageGrid}>
                            <div className={styles.brokerageGridBox}>
                                <div className={styles.brokerageGridIcon}>
                                    <div className={styles.clockWorkBoxImg}>
                                        <Image src={brokerageIco1} alt="brokerageIco1" />
                                    </div>
                                    <h3>Business</h3>
                                </div>
                                <div className={styles.ProcessContentList}>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Project manager</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Product manager</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Business & Data analyst</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Solution architector</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.brokerageGridBox}>
                                <div className={styles.brokerageGridIcon}>
                                    <div className={styles.clockWorkBoxImg}>
                                        <Image src={brokerageIco2} alt="brokerageIco2" />
                                    </div>
                                    <h3>Developers</h3>
                                </div>
                                <div className={styles.ProcessContentList}>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>QA testers</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Android Developers</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>iOS Developers</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>System administrator/DevOps engineer</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Sdet</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Front-end developer</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Back-end developers</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.brokerageGridBox}>
                                <div className={styles.brokerageGridIcon}>
                                    <div className={styles.clockWorkBoxImg}>
                                        <Image src={brokerageIco3} alt="brokerageIco3" />
                                    </div>
                                    <h3>Business</h3>
                                </div>
                                <div className={styles.ProcessContentList}>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Support & training staff</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Security specialist</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Tech writer</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>Database administrator</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={brokeListIco} alt="brokeListIco" />
                                        <p>UI/UX designers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.brokerageHead}>
                            <div className={styles.headingBatchWhite}>
                                <button type="button" >
                                    <Image src={buttonFxWhite} alt="buttonFx" />
                                    <span>Rate</span>
                                </button>
                            </div>
                            <h2>Costs start at $200k per month, excluding taxes, infrastructure, equipment, and licenses. Total for 2 years: $5 million</h2>
                        </div>
                        <div className={styles.brokerageGrid2}>
                            <div className={styles.brokerageGrid2Box}>
                                <h4>Developers</h4>
                                <p>Average salary for a software developer is around $100,000 per year</p>
                            </div>
                            <div className={styles.brokerageGrid2BoxLine}></div>
                            <div className={styles.brokerageGrid2Box}>
                                <h4>Servers and hosting</h4>
                                <p>Cloud hosting can cost between $10,000 to $50,000 annually, depending on usage requirements</p>
                            </div>
                            <div className={styles.brokerageGrid2BoxLine}></div>
                            <div className={styles.brokerageGrid2Box}>
                                <h4>Development time</h4>
                                <p>Building a CRM system from scratch can take 12-24 months</p>
                            </div>
                            <div className={styles.brokerageGrid2BoxLine}></div>
                            <div className={styles.brokerageGrid2Box}>
                                <h4>Bugs and fixes</h4>
                                <p>Unanticipated bugs and fixes can add 20-30% to the total development cost</p>
                            </div>
                        </div>
                        <div className={styles.contactBannerbottom}>
                            <Image src={bannerBottomLines} alt="bannerBottomLines" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
