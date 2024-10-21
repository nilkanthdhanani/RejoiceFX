import styles from './savings.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import savingImg from "@/assets/images/webp/savingImg.webp";
import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";

export default function Savings() {
    return (
        <section>
            <div className={styles.containerMax}>
                <div className={styles.savingsMain}>
                    <div className={styles.container}>
                        <div className={styles.savingsDiv}>
                            <div className={styles.savingsDetail}>
                                <div className={styles.savingsDetailHead}>
                                    <div className={styles.headingBatch}>
                                        <button type="button" >
                                            <Image src={buttonFx} alt="buttonFx" />
                                            <span>fund retention</span>
                                        </button>
                                    </div>
                                    <h2>Savings</h2>
                                    <p>Create your saving program where your clients can invest funds to earn interest</p>
                                </div>
                                <div className={styles.savingsBoxContent}>
                                    <div className={styles.savingsBoxContent1}>
                                        <h4>Fixed savings</h4>
                                        <p>Fixed savings</p>
                                        <p>Person commits particular amount of funds and receives %</p>
                                        <p>Broker can configure various plans per customer</p>
                                        <p>Broker can apply fees such as participation or redeem</p>
                                    </div>
                                    <div className={styles.savingsBoxContent1}>
                                        <h4>Flexible savings</h4>
                                        <p>Unlimited top-ups of the program</p>
                                        <p>Broker can apply tiers to attract more funds</p>
                                        <p>Percentage can be adjusted by the broker depending on the demand</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.savingsDivImg}>
                                <Image src={savingImg} alt="savingImg" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                </div>
            </div>
        </section>
    )
}
