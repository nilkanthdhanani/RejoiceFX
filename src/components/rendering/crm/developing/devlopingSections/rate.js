import styles from './devlopingSections.module.scss'
import Image from "next/image";

import buttonFxWhite from "@/assets/images/svg/buttonFxWhite.svg";

export default function Rate() {
    return (
        <>
            <div className={styles.brokerageHead}>
                <div className={styles.headingBatchWhite}>
                    <button type="button" >
                        <Image src={buttonFxWhite} alt="buttonFx" />
                        <span>Rate</span>
                    </button>
                </div>
                <h2>Costs start at $200k per month, excluding taxes, infrastructure, equipment, and licenses. Total for 2 years: $5 million</h2>
            </div>
            <div className={styles.rateDiv}>
                <div className={styles.rateDivBox}>
                    <h4>Developers</h4>
                    <p>Average salary for a software developer is around $100,000 per year</p>
                </div>
                <div className={styles.rateDivBoxLine}></div>
                <div className={styles.rateDivBox}>
                    <h4>Servers and hosting</h4>
                    <p>Cloud hosting can cost between $10,000 to $50,000 annually, depending on usage requirements</p>
                </div>
                <div className={styles.rateDivBoxLine}></div>
                <div className={styles.rateDivBox}>
                    <h4>Development time</h4>
                    <p>Building a CRM system from scratch can take 12-24 months</p>
                </div>
                <div className={styles.rateDivBoxLine}></div>
                <div className={styles.rateDivBox}>
                    <h4>Bugs and fixes</h4>
                    <p>Unanticipated bugs and fixes can add 20-30% to the total development cost</p>
                </div>
            </div>
        </>
    )
}
