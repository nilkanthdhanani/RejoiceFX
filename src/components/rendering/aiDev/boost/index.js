import styles from './boost.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";

export default function Boost() {
    return (
        <section className={styles.boost}>
            <div className={styles.container}>
                <div className={styles.boostDiv}>
                    <div className={styles.boostDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Boost to Your Business</span>
                            </button>
                        </div>
                        <h2>Get Significant Boost to Your Business with AI/ML Devleopment Services</h2>
                        <p>Gives information about how Rejoice FX has grown and what they have achieved since the year 2019 which clearly portrays our commitment to quality and client satisfaction.</p>
                    </div>
                    <div className={styles.boostGrid}>
                        <div className={styles.boostGridBox}>
                            <h3>810+</h3>
                            <p>Remarkable Project</p>
                        </div>
                        <div className={styles.boostGridBox}>
                            <h3>500+</h3>
                            <p>Happy customers</p>
                        </div>
                        <div className={styles.boostGridBox}>
                            <h3>120+</h3>
                            <p>Strong Team</p>
                        </div>
                        <div className={styles.boostGridBox}>
                            <h3>90+</h3>
                            <p>Repeat Business Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
