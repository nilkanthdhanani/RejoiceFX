import styles from './hire.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import hireImg from "@/assets/images/png/hireImg.png";
import hireIco1 from "@/assets/images/svg/hireIco1.svg";
import hireIco2 from "@/assets/images/svg/hireIco2.svg";
import hireIco3 from "@/assets/images/svg/hireIco3.svg";

const hireDetail = [
    {
        image: hireIco1,
        title: "Ideal For",
        details: "Ongoing projects, continuous development, or expanding your in-house technical team.",
    },
    {
        image: hireIco2,
        title: "How It Works",
        details: "Leverage a dedicated team of our expert developers, fully integrated into your workflow, to deliver consistent, high-quality results tailored to your project needs.",
    },
    {
        image: hireIco3,
        title: "When To Choose",
        details: "Select this model when you need a long-term, committed team for complex and evolving projects requiring sustained development efforts.",
    },
]
export default function Hire() {
    return (
        <section>
            <div className={styles.containerMax}>
                <div className={styles.hireMain}>
                    <div className={styles.container}>
                        <div className={styles.hireDiv}>
                            <div className={styles.hireDivMain}>
                                <div className={styles.headingBatch}>
                                    <button type="button" >
                                        <Image src={buttonFx} alt="buttonFx" />
                                        <span>Models</span>
                                    </button>
                                </div>
                                <h2>Hire Dedicated Developer</h2>
                                {hireDetail.map((item, index) => (
                                    <div className={styles.hireDetail} key={index}>
                                        <div className={styles.hireDetailIconDiv}>
                                            <div className={styles.hireDetailIcon}>
                                                <Image src={item.image} alt="hireIcon" />
                                            </div>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <p>{item.details}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.hireDivImg}>
                                <Image src={hireImg} alt="hireImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
