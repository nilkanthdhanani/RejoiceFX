
import styles from './powerfull.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import powerfullIco1 from "@/assets/images/svg/powerfullIco1.svg";
import powerfullIco2 from "@/assets/images/svg/powerfullIco2.svg";
import powerfullIco3 from "@/assets/images/svg/powerfullIco3.svg";
import powerfullIco4 from "@/assets/images/svg/powerfullIco4.svg";

const powerfullDetail = [
    {
        image: powerfullIco1,
        title: "Best trading strategies",
        desc: "When it comes to trading strategies, there are thousands of trade systems are available on the internet and they all work on specific market conditions.",
    },
    {
        image: powerfullIco2,
        title: "Backtesting",
        desc: "Algorithmic trading is a form of automated investing that lets you test out strategies before putting real money on the line. This gives traders invaluable insight into whether or not their strategy will work.",
    },
    {
        image: powerfullIco3,
        title: "Elimination of Emotions",
        desc: "To minimize the emotional strain on traders, automated trading systems keep their emotions in check and allow them to follow a strategy more easily.",
    },
    {
        image: powerfullIco4,
        title: "Plug and Play",
        desc: "Automated trading is programmed to conduct trades on your behalf according to predetermined conditions by EA’s and automatically updated in real-time.",
    },
];

export default function Powerfull() {
    return (
        <section className={styles.advantage}>
            <div className={styles.container}>
                <div className={styles.advantageDetail}>
                    <div className={styles.headingBatch}>
                        <button type="button" >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Powerful Algorithms</span>
                        </button>
                    </div>
                    <h2>Simply Connect Your Trading with Powerful Algorithms</h2>
                </div>
                <div className={styles.advantageGrid}>
                    {powerfullDetail.map((item, index) => (
                        <div key={index} className={styles.advantageGridBox}>
                            <div className={styles.progressGridBoxImg}>
                                <Image src={item.image} alt={item.image} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
