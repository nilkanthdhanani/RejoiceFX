import styles from './devlopingSections.module.scss'
import Image from "next/image";

import buttonFxWhite from "@/assets/images/svg/buttonFxWhite.svg";
import brokeListIco from "@/assets/images/svg/brokeListIco.svg";
import brokerageIco1 from "@/assets/images/svg/brokerageIco1.svg";
import brokerageIco2 from "@/assets/images/svg/brokerageIco2.svg";
import brokerageIco3 from "@/assets/images/svg/brokerageIco3.svg";

export default function CrmSystem() {
    return (
        <>
            <div className={styles.brokerageHead}>
                <div className={styles.headingBatchWhite}>
                    <button type="button" >
                        <Image src={buttonFxWhite} alt="buttonFx" />
                        <span>CRM System</span>
                    </button>
                </div>
                <h2>Developing an in-house CRM system typically takes at least 25 people and 2 years</h2>
            </div>
            <div className={styles.crmSystem}>
                <div className={styles.crmSystemBox}>
                    <div className={styles.crmSystemIcon}>
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
                <div className={styles.crmSystemBox}>
                    <div className={styles.crmSystemIcon}>
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
                            <p>System administrator/ DevOps engineer</p>
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
                <div className={styles.crmSystemBox}>
                    <div className={styles.crmSystemIcon}>
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
        </>
    )
}
