
import styles from './realTime.module.scss'
import Image from "next/image";

import leftLayerWhite from "@/assets/images/webp/leftLayerWhite.webp";
import rightLayerWhite from "@/assets/images/webp/rightLayerWhite.webp";
import buttonFxWhite from "@/assets/images/svg/buttonFxWhite.svg";

export default function RealTime() {
    return (
        <section >
            <div className={styles.containerMax}>
                <div className={styles.brokerage}>
                    <div className={styles.crmBannerLineRight}>
                        <Image src={rightLayerWhite} alt="rightLayerWhite" />
                    </div>
                    <div className={styles.crmBannerLineLeft}>
                        <Image src={leftLayerWhite} alt="leftLayerWhite" />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.brokerageHead}>
                            <div className={styles.headingBatchWhite}>
                                <button type="button" >
                                    <Image src={buttonFxWhite} alt="buttonFx" />
                                    <span>AI Solution</span>
                                </button>
                            </div>
                            <h2>Real-Time Data</h2>
                            <p>Here is the real-time data to identify and understand impact on the business when businesses are moving into AI/ML solutions:</p>
                        </div>
                        <div className={styles.rateDiv}>
                            <div className={styles.rateDivBox}>
                                <h3>85%</h3>
                                <p>of companies report that AI and ML has provided them with a competitive advantage in the market.</p>
                            </div>
                            <div className={styles.rateDivBoxLine}></div>
                            <div className={styles.rateDivBox}>
                                <h3>80%</h3>
                                <p>of enterprises are investing in AI and Machine Learning with the aim of increasing their productivity.</p>
                            </div>
                            <div className={styles.rateDivBoxLine}></div>
                            <div className={styles.rateDivBox}>
                                <h3>76%</h3>
                                <p>of companies increased their ability to provide great customer experience with AI and ML based personalization.</p>
                            </div>
                            <div className={styles.rateDivBoxLine}></div>
                            <div className={styles.rateDivBox}>
                                <h3>70%</h3>
                                <p>of businesses have already realized benefits to decision-making and enhancements to their business processes from leveraging AI and ML insights.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
