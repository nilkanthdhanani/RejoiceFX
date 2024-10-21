import styles from './building.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import buildingImg2 from "@/assets/images/webp/buildingImg2.webp";
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

export default function Building() {
    return (
        <section className={styles.building}>
            <div className={styles.container}>
                <div className={styles.buildingDiv}>
                    <div className={styles.buildingDivImg}>
                        <Image src={buildingImg2} alt="buildingImg2" />
                    </div>
                    <div className={styles.buildingDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Innovative Digital Solutions</span>
                            </button>
                        </div>
                        <h2>Why Rejoice FX for Mobile & Web Development?</h2>
                        <p>At Rejoice FX, we don’t just build mobile apps and websites—we craft digital experiences that empower your business. Our team combines technical expertise, creative design, and a deep understanding of industry trends to deliver cutting-edge solutions that drive growth.</p>
                        <div className={styles.contactButton}>
                            <button><span>Get Started</span><ArrowSmallRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
