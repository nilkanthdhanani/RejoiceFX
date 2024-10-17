
import styles from './licenseProgress.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import globalIcon from "@/assets/images/svg/globalIcon.svg";
import applyIcon from "@/assets/images/svg/applyIcon.svg";
import currencyIco from "@/assets/images/svg/currencyIco.svg";
import bookIcon from "@/assets/images/svg/bookIcon.svg";

export default function LicenseProgress({ progressHead, proccesFirst, proccesSecond, proccesThird, proccesFourth, proccesFifth }) {
    return (
        <section className={styles.licenseProgress}>
            <div className={styles.container}>
                <div className={styles.licenseProgressDetail}>
                    <div className={styles.headingBatch}>
                        <button type="button" >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Process</span>
                        </button>
                    </div>
                    <h2>{progressHead}</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className={styles.progressGrid}>
                    <div className={styles.progressGridBox}>
                        <div className={styles.progressGridBoxImg}>
                            <Image src={globalIcon} alt="globalIcon" />
                        </div>
                        <h3>{proccesFirst}</h3>
                        <div className={styles.progressGridNumber}>01</div>
                    </div>
                    <div className={styles.progressGridBox}>
                        <div className={styles.progressGridBoxImg}>
                            <Image src={applyIcon} alt="applyIcon" />
                        </div>
                        <h3>{proccesSecond}</h3>
                        <div className={styles.progressGridNumber}>02</div>
                    </div>
                    <div className={styles.progressGridBox}>
                        <div className={styles.progressGridBoxImg}>
                            <Image src={currencyIco} alt="currencyIco" />
                        </div>
                        <h3>{proccesThird}</h3>
                        <div className={styles.progressGridNumber}>03</div>
                    </div>
                    <div className={styles.progressGridBox}>
                        <div className={styles.progressGridBoxImg}>
                            <Image src={bookIcon} alt="bookIcon" />
                        </div>
                        <h3>{proccesFourth}</h3>
                        <div className={styles.progressGridNumber}>04</div>
                    </div>
                    <div className={styles.progressGridBoxLast}>
                        <span>Time Frame</span>
                        <h4>{proccesFifth}</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
