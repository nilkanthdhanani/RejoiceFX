
import styles from './marquee.module.scss'
import Image from "next/image";

import marqueelogo1 from "@/assets/images/svg/marqueelogo1.svg";
import marqueelogo2 from "@/assets/images/svg/marqueelogo2.svg";
import marqueelogo3 from "@/assets/images/svg/marqueelogo3.svg";
import marqueelogo4 from "@/assets/images/svg/marqueelogo4.svg";
import marqueelogo5 from "@/assets/images/svg/marqueelogo5.svg";

export default function Marquee() {
    return (
        <section className={styles.marqueeDiv}>
            <div className={styles.marqueeDivHead}>
                <h2>Trusted Partners</h2>
            </div>
            <div className={styles.marqueeDivMain}>
                <div className={styles.marqueeDivMainList}>
                    <Image src={marqueelogo1} alt="marqueelogo1" />
                    <Image src={marqueelogo2} alt="marqueelogo2" />
                    <Image src={marqueelogo3} alt="marqueelogo3" />
                    <Image src={marqueelogo4} alt="marqueelogo4" />
                    <Image src={marqueelogo5} alt="marqueelogo5" />
                    <Image src={marqueelogo1} alt="marqueelogo1" />
                    <Image src={marqueelogo2} alt="marqueelogo2" />
                    <Image src={marqueelogo3} alt="marqueelogo3" />
                    <Image src={marqueelogo4} alt="marqueelogo4" />
                    <Image src={marqueelogo5} alt="marqueelogo5" />
                    <Image src={marqueelogo1} alt="marqueelogo1" />
                    <Image src={marqueelogo2} alt="marqueelogo2" />
                    <Image src={marqueelogo3} alt="marqueelogo3" />
                    <Image src={marqueelogo4} alt="marqueelogo4" />
                    <Image src={marqueelogo5} alt="marqueelogo5" />
                </div>
            </div>
        </section>
    )
}
