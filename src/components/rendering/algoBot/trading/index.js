import styles from './trading.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import tradingImg from "@/assets/images/webp/tradingImg.webp";

export default function Trading() {
    return (
        <section className={styles.trading}>
            <div className={styles.container}>
                <div className={styles.tradingDiv}>
                    <div className={styles.tradingDivImg}>
                        <Image src={tradingImg} alt="tradingImg" />
                    </div>
                    <div className={styles.tradingDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>What Is Algo?</span>
                            </button>
                        </div>
                        <h2>Algo Trading</h2>
                        <p>Algo trading harnesses advanced algorithms to execute trading strategies with unparalleled precision, catering to traders seeking to customise their approach for a tailored trading experience. This innovative trading form allows individuals to leverage broker-provided API keys, granting access to automated operations that transform complex strategies into seamless actions. Algo trading, gaining momentum for its ability to simplify trading through technology, enables even those without programming skills to participate effectively. Traders can back-test strategies confidently, ensuring their moves are both smart and strategic. As Algo trading becomes increasingly popular, it represents the future of trading, offering a platform where strategies are not just executed but optimised, marking a significant shift in how trading success is achieved and redefining opportunities in the financial markets.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
