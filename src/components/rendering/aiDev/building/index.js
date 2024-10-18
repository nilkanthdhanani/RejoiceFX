import styles from './building.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import buildingImg from "@/assets/images/png/buildingImg.png";
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

export default function Building() {
    return (
        <section className={styles.building}>
            <div className={styles.container}>
                <div className={styles.buildingDiv}>
                    <div className={styles.buildingDivImg}>
                        <Image src={buildingImg} alt="buildingImg" />
                    </div>
                    <div className={styles.buildingDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>What Is AI Development?</span>
                            </button>
                        </div>
                        <h2>Building Intelligent Systems for Automation and Innovation</h2>
                        <p>AI development involves creating intelligent systems that can perform tasks typically requiring human intelligence, such as decision-making, problem-solving, and learning. By leveraging machine learning, data analysis, and automation, AI solutions streamline operations and boost business efficiency. From chatbots to predictive analytics, AI transforms how businesses operate and grow.</p>
                        <div className={styles.contactButton}>
                            <button><span>Get Started</span><ArrowSmallRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
