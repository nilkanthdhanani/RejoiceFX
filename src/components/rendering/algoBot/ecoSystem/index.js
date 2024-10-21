import styles from "./ecoSystem.module.scss"
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";

const tracker = [
    { title: "Connect" },
    { title: "Select Secret Strategy" },
    { title: "Back Test & Deploy" },
];

const tracker2 = [
    { title: "Sit & Relax" },
    { title: "Language Outlin" },
    { title: "Translate Language" },
];

export default function EcoSystem() {
    return (
        <section className={styles.ecoSystem}>
            <div className={styles.container}>
                <div className={styles.ecoSystemDetail}>
                    <div className={styles.headingBatch}>
                        <button type="button" >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Algo Process</span>
                        </button>
                    </div>
                    <h2>Our Algo Trading eco System</h2>
                </div>
                <div className={styles.ecoSystemProcess}>
                    <div className={styles.pathImage}>
                        <div className={styles.pathImageLineTop}></div>
                        <div className={styles.pathImageLine}></div>
                    </div>
                    <div className={styles.ecoProcessBox}>
                        <div className={styles.ecoProcessBox1}>
                            <h3><span>01.</span> Trader Connects with <br /> RoboTrader</h3>
                            <div className={styles.tradingTracker}>
                                {tracker.map((item, index) => (
                                    <div className={styles.tradingTrackerBox} key={index}>
                                        <div className={styles.tracker}>
                                            <div className={styles.trackerIcon}></div>
                                        </div>
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.ecoProcessBox1}>
                            <h3><span>02.</span> End to End Automation - <br /> Sending orders to Exchange</h3>
                            <div className={styles.tradingTracker}>
                                {tracker2.map((item, index) => (
                                    <div className={styles.tradingTrackerBox} key={index}>
                                        <div className={styles.tracker}>
                                            <div className={styles.trackerIcon}></div>
                                        </div>
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
