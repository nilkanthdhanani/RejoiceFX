
import styles from './transform.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import transformIco1 from "@/assets/images/svg/transformIco1.svg";
import transformIco2 from "@/assets/images/svg/transformIco2.svg";
import transformIco3 from "@/assets/images/svg/transformIco3.svg";
import transformIco4 from "@/assets/images/svg/transformIco4.svg";

const powerfullDetail = [
    {
        image: transformIco1,
        title: "Improved Decision Making",
        desc: "Drive with the data to inform and drive business decisions that you make and reduce risks.",
    },
    {
        image: transformIco2,
        title: "Operational Efficiency",
        desc: "Automate routine work and streamline processes to let your team put focus on more valuable work and increase productivity overall.",
    },
    {
        image: transformIco3,
        title: "Customer Experience",
        desc: "Use AI and ML to create personalized touchpoints with your customers and deliver great service which in turn will help you increase overall customer satisfaction and loyalty.",
    },
    {
        image: transformIco4,
        title: "Competitive Advantage",
        desc: "Being innovative, and having the ability to quickly adapt to market changes and take advantage of emerging opportunities by leveraging new AI/ML technologies.",
    },
];

export default function Transform() {
    return (
        <section className={styles.transform}>
            <div className={styles.container}>
                <div className={styles.transformDetail}>
                    <div className={styles.headingBatch}>
                        <button type="button" >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>AI Services</span>
                        </button>
                    </div>
                    <h2>Transform Your Business with our AI & ML Solutions</h2>
                    <p>Rejoice FX, We are providing advanced AI and ML Solutions as per your business requirements.</p>
                </div>
                <div className={styles.transformGrid}>
                    {powerfullDetail.map((item, index) => (
                        <div key={index} className={styles.transformGridBox}>
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
