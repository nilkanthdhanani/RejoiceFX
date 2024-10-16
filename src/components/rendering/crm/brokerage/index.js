
import styles from './brokerage.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import brokerageImg from "@/assets/images/png/brokerageImg.png";
import ArrowSmallRight from "@/assets/images/svg/arrowSmallRight";

export default function Brokerage() {
    return (
        <section>
            <div className={styles.containerMax}>
                <div className={styles.brokerage}>
                    <div className={styles.brokerageHead}>
                        <h2>Building a brokerage from scratch will cost you $5 mln. Our fees? Divide that by a thousand</h2>
                        <div className={styles.StartedButton}>
                            <button><span>Get Started Now</span><ArrowSmallRight /></button>
                        </div>
                    </div>
                    <div className={styles.brokerageImgae}>
                        <Image src={brokerageImg} alt="brokerageImg" />
                    </div>
                    <div className={styles.contactBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                </div>
            </div>
        </section>
    );
}
