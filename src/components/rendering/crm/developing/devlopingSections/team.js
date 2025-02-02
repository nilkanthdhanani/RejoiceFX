import styles from './devlopingSections.module.scss'
import Image from "next/image";

import buttonFxWhite from "@/assets/images/svg/buttonFxWhite.svg";

export default function Team() {
    return (
        <>
            <div className={styles.teamDiv}>
                <h2>Our team works tirelessly to improve Rejoice FX</h2>
                <div className={styles.teamDivList}>
                    <div className={styles.teamDivListBox}>
                        <h3>70+</h3>
                        <p>Engineers working full-time</p>
                    </div>
                    <div className={styles.teamDivListBox}>
                        <h3>30+</h3>
                        <p>Continuous Development</p>
                    </div>
                    <div className={styles.teamDivListBox}>
                        <h3>160+</h3>
                        <p>Clients using Rejoice FX</p>
                    </div>
                </div>
            </div>
        </>
    )
}
