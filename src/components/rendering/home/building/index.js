import styles from './building.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import buildingBanner from "@/assets/images/png/buildingBanner.png";

export default function Building() {
    return (
        <section className={styles.building}>
            <div className={styles.container}>
                <div className={styles.buildingDiv}>
                    <div className={styles.buildingDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>About Us</span>
                            </button>
                        </div>
                        <h2>Building Your Forex Business from the Ground Up</h2>
                        <p>Rejoicefx is a global forex technology provider, offering everything you need to establish and grow a successful forex brokerage. From company formation to licensing, and beyond, we are your trusted partner in creating world-class forex brokerage solutions. With extensive experience in forex technology, Rejoicefx provides seamless access to retail forex trading markets and cutting-edge tools.</p>
                        <p>At Rejoicefx, we deliver comprehensive forex technology solutions including company formation, broker licensing, web development, trader’s room setup, MT4 White Label, and CRM integration to help your brokerage thrive in the competitive market.</p>
                    </div>
                    <div className={styles.buildingDivImg}>
                        <Image src={buildingBanner} alt="buildingBanner" />
                    </div>
                </div>
            </div>
        </section>
    )
}
