import { useState } from "react";
import styles from "./projects.module.scss";
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import projectBg1 from "@/assets/images/png/projectBg1.png";
import angleDown from "@/assets/images/svg/angleDown.svg";

const faqDetail = [
    {
        title: "Powerful dashboard",
        desc: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard.",
    },
    {
        title: "Deposit management",
        desc: "Easily manage deposits, view transaction history, and ensure secure handling of client funds in real time.",
    },
    {
        title: "Profile Page",
        desc: "Allow users to customize their profiles, manage personal details, and review account settings effortlessly.",
    },
    {
        title: "Trading platforms",
        desc: "Seamlessly integrate with multiple trading platforms, providing clients with the tools they need to trade efficiently.",
    },
    {
        title: "Balances",
        desc: "Monitor and manage account balances across multiple currencies with real-time updates and detailed tracking.",
    },
    {
        title: "Helpdesk",
        desc: "Provide excellent customer support with a built-in helpdesk, allowing users to raise queries and track their resolutions.",
    },
    {
        title: "Bonuses",
        desc: "Offer and manage client bonuses efficiently, ensuring proper allocation and tracking of bonus programs.",
    },
];

export default function Projects1() {
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className={styles.projectDiv}>
            <div className={styles.container}>
                <div className={styles.projectDivHead}>
                    <div className={styles.headingBatch}>
                        <button type="button">
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Projects</span>
                        </button>
                    </div>
                    <h2>Unmatched frontend</h2>
                </div>
                <div className={styles.projectFaq}>
                    <div className={styles.projectFaqDivMain}>
                        {faqDetail.map((item, index) => (
                            <div
                                className={`${styles.projectFaqDiv} ${openFaqIndex === index
                                    ? styles.openFaq
                                    : ""
                                    }`}
                                key={index}
                                onClick={() => toggleFaq(index)}>
                                <div className={styles.projectFaqDivHead}>
                                    <h2>{item.title}</h2>
                                    <Image
                                        src={angleDown}
                                        alt="angleDown"
                                        className={
                                            openFaqIndex === index
                                                ? styles.rotateIcon
                                                : ""
                                        } />
                                </div>
                                <div
                                    className={`${styles.faqContent} ${openFaqIndex === index
                                        ? styles.faqContentOpen
                                        : ""
                                        }`}>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.projectFaqImg}>
                        <Image src={projectBg1} alt="projectBg1" />
                    </div>
                </div>
            </div>
        </section>
    );
}
