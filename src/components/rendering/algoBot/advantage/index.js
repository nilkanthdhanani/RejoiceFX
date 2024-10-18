
import styles from './advantage.module.scss'
import Image from "next/image";

import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";
import tradingIco1 from "@/assets/images/svg/tradingIco1.svg";
import tradingIco2 from "@/assets/images/svg/tradingIco2.svg";
import tradingIco3 from "@/assets/images/svg/tradingIco3.svg";
import tradingIco4 from "@/assets/images/svg/tradingIco4.svg";
import tradingIco5 from "@/assets/images/svg/tradingIco5.svg";
import tradingIco6 from "@/assets/images/svg/tradingIco6.svg";

const tradingDetail = [
  {
    image: tradingIco1,
    title: "Fast Execution of Orders",
    desc: "Experience lightning-speed trading with high-frequency algorithms, executing thousands of trades per second for optimal performance.",
  }, 
  {
    image: tradingIco2,
    title: "Automation",
    desc: "Enjoy seamless, automated trading with pre-programmed algorithms that handle everything from monitoring to execution, eliminating the need for human intervention.",
  }, 
  {
    image: tradingIco3,
    title: "Risk Management",
    desc: "Algo trading integrates strategic risk management by automating entry/exit points, stop-loss, and fund rebalancing, reducing emotional trading decisions.",
  }, 
  {
    image: tradingIco4,
    title: "Human Error Reduction",
    desc: "Avoid costly mistakes like wrong inputs or forgotten stop-losses, as algo trading ensures precise, flawless execution without human error.",
  }, 
  {
    image: tradingIco5,
    title: "Cost Reduction",
    desc: "While setup costs can be high, algorithmic trading cuts long-term operational expenses and reduces transaction costs for efficient trading.",
  }, 
  {
    image: tradingIco6,
    title: "Free Algo Trading Software",
    desc: "Stay agile with free algo trading software that allows you to modify algorithms in real-time, adapting to changing market conditions.",
  }, 
];

export default function Advantage() {
    return (
        <section className={styles.advantage}>
            <div className={styles.containerMax}>
                <div className={styles.advantageInner}>
                    <div className={styles.advantageLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.advantageLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.advantageDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Algo Advantages</span>
                            </button>
                        </div>
                        <h2>Advantages of Algo Trading</h2>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.advantageGrid}>
                            {tradingDetail.map((item, index) => (
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
                </div>
            </div>
        </section>
    );
}
