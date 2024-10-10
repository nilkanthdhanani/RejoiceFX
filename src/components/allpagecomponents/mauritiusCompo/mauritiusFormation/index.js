
import Image from "next/image";
import styles from './mauritiusFormation.module.scss'
import ArrowSmallRight from "@/assets/crmpageImage/arrowSmallRight";
import Link from "next/link";
import buttonFx from "@/assets/crmpageImage/buttonFx.svg";

export default function MauritiusFormation({ startImage, startButton, startTitle, startSubTitle }) {
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
                            <button type="submit" >Yes, I Want To Incorporate <ArrowSmallRight /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
