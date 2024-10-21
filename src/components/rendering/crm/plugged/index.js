import styles from './plugged.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import pluggedImg from "@/assets/images/webp/pluggedImg.webp";

export default function Plugged() {
    return (
        <section className={styles.plugged}>
            <div className={styles.container}>
                <div className={styles.pluggedDiv}>
                    <div className={styles.pluggedDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>The best marketing tool</span>
                            </button>
                        </div>
                        <h2>Plugged-in referral program</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className={styles.pluggedDivImg}>
                        <Image src={pluggedImg} alt="pluggedImg" />
                    </div>
                </div>
            </div>
        </section>
    )
}
