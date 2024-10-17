import styles from "./whyChoose.module.scss";
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import listIcon from "@/assets/images/svg/listIcon.svg";

export default function WhyChoose() {

    return (
        <section className={styles.whyChoose}>
            <div className={styles.container}>
                <div className={styles.whyChooseHead}>
                    <div className={styles.headingBatch}>
                        <button type="button">
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Fx Crm</span>
                        </button>
                    </div>
                    <h2>Why choose PheasanTech Forex CRM?</h2>
                </div>
                <div className={styles.whyChooseGrid}>
                    <div className={styles.whyChooseGridBox}>
                        <div className={styles.whyChooseBoxHead}>
                            <span>01</span>
                            <h3>Amazing Features</h3>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Allows your sales teams to execute the tasks digitally</p>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Integrates widgets and tools as per the requirements</p>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Prepares the foundation for automation with RPA & AI</p>
                        </div>
                    </div>
                    <div className={styles.whyChooseGridBox}>
                        <div className={styles.whyChooseBoxHead}>
                            <span>02</span>
                            <h3>Total Customization</h3>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Customized CRM as per the scale and target audience</p>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Easy upgrades/ updates to finetune the functionalities</p>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Constant insights & reports to monitor the performance</p>
                        </div>
                    </div>
                    <div className={styles.whyChooseGridBox}>
                        <div className={styles.whyChooseBoxHead}>
                            <span>03</span>
                            <h3>Ease of Using</h3>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Simple and straight forward user interface for the team</p>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Designed to save the time and efforts of the sales teams</p>
                        </div>
                        <div className={styles.whyChooseBoxList}>
                            <Image src={listIcon} alt="listIcon" />
                            <p>Easy to learn processes; and easier to use on daily basis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
