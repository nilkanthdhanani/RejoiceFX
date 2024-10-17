import { useState } from "react";
import styles from "./projects.module.scss";
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import projectBg2 from "@/assets/images/png/projectBg2.png";
import angleDown from "@/assets/images/svg/angleDown.svg";

const faqDetail = [
    {
        title: "Clients",
        desc: "Access a comprehensive table displaying key information about all clients for efficient management.",
    },
    {
        title: "Accounts",
        desc: "Manage and monitor client accounts with ease, including account balances, statuses, and types.",
    },
    {
        title: "Transactions",
        desc: "Track all financial transactions in real-time, offering transparency and control over deposits and withdrawals.",
    },
    {
        title: "Permissions",
        desc: "Define and manage user roles and permissions to ensure secure and restricted access to key features.",
    },
    {
        title: "Reports",
        desc: "Generate detailed reports on client activity, transactions, and performance metrics to inform decision-making.",
    },
    {
        title: "Requests",
        desc: "Manage client requests efficiently, tracking approvals, denials, and any necessary follow-ups.",
    },
    {
        title: "Bonuses",
        desc: "Track and manage bonus programs, ensuring proper allocation and usage of promotional offers for clients.",
    },
];

export default function Projects2() {
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
                    <h2>Back office of dreams</h2>
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
                        <Image src={projectBg2} alt="projectBg2" />
                    </div>
                </div>
            </div>
        </section>
    );
}
