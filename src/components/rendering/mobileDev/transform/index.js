
import styles from './transform.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import digitalIco1 from "@/assets/images/svg/digitalIco1.svg";
import digitalIco2 from "@/assets/images/svg/digitalIco2.svg";
import digitalIco3 from "@/assets/images/svg/digitalIco3.svg";
import digitalIco4 from "@/assets/images/svg/digitalIco4.svg";

const powerfullDetail = [
    {
        image: digitalIco1,
        title: "Cloud Solutions",
        desc: "Implementing cloud services for scalable and secure data storage and management.",
    },
    {
        image: digitalIco2,
        title: "Responsive Web Design",
        desc: "Creating adaptable websites that offer a seamless user experience across all devices.",
    },
    {
        image: digitalIco3,
        title: "E-Commerce Solutions",
        desc: "Developing secure online stores with integrated payment gateways for smooth transactions.",
    },
    {
        image: digitalIco4,
        title: "API Integration Services",
        desc: "Connecting third-party services to enhance functionality and streamline business processes.",
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
                            <span>Digital Development</span>
                        </button>
                    </div>
                    <h2>Comprehensive Solutions for Modern Businesses</h2>
                </div>
                <div className={styles.transformGrid}>
                    {powerfullDetail.map((item, index) => (
                        <div key={index} className={styles.transformGridBox}>
                            <div className={styles.progressGridBoxImg}>
                                <Image src={item.image} alt="digitalIco" />
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
