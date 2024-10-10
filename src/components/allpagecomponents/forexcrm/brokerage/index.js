
import Image from "next/image";
import bannerBottomLines from "@/assets/crmpageImage/bannerBottomLines.svg";
import brokerageImg from "@/assets/crmpageImage/brokerageImg.png";
import ArrowSmallRight from "@/assets/crmpageImage/arrowSmallRight";
import styles from './brokerage.module.scss'

export default function Brokerage() {
    return (
        <section className={styles.brokerage}>
            <div className={styles.brokerageHead}>
                <h2>Building a brokerage from scratch will cost you $5 mln. Our fees? Divide that by a thousand</h2>
                <div className={styles.inputBoxButton}>
                    <button type="submit" >Get Started Now <ArrowSmallRight /> </button>
                </div>
            </div>
            <div className={styles.brokerageImgae}>
                <Image src={brokerageImg} alt="brokerageImg" />
            </div>
            <div className={styles.contactBannerbottom}>
                <Image src={bannerBottomLines} alt="bannerBottomLines" />
            </div>
        </section>
    );
}
