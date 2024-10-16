import styles from './licenseFormation.module.scss'
import Link from "next/link";
import Image from "next/image";

import ArrowSmallRight from "@/assets/images/svg/arrowSmallRight";
import buttonFx from "@/assets/images/svg/buttonFx.svg";

export default function LicenseFormation({ startImage, startButton, startTitle, startSubTitle }) {
    return (
        <section className={styles.mauritiusFormation}>
            <div className={styles.container}>
                <div className={styles.formationGrid}>
                    <div className={styles.formationGridImg}>
                        <Image src={startImage} alt="mauritiusFormation" />
                    </div>
                    <div className={styles.formationGridDiv}>
                        <Link href={"/"} >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>{startButton}</span>
                        </Link>
                        <h2>{startTitle}</h2>
                        <p>{startSubTitle}</p>
                        <div className={styles.formationBoxButton}>
                            <button type="submit">Yes, I Want To Incorporate <ArrowSmallRight /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
