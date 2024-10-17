import { useState } from "react";
import styles from "./faq.module.scss";
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import angleDown from "@/assets/images/svg/angleDown.svg";

const faqDetail = [
    {
        number: "01.",
        title: "What is a Forex CRM?",
        desc: "A Customer Relationship Management platform helps businesses manage everything related to their customers, from contact information and customer support inquiries to financial data and payment processing.",
    },
    {
        number: "02.",
        title: "How does a Forex CRM work?",
        desc: "A Forex CRM integrates with trading platforms, allowing brokers to manage their client accounts, track interactions, automate sales processes, and handle customer onboarding and KYC verification.",
    },
    {
        number: "03.",
        title: "Why is a Forex CRM important?",
        desc: "It ensures better customer service, improves lead generation, helps manage client information, automates tasks, and enhances communication between clients and brokers.",
    },
    {
        number: "04.",
        title: "What are the benefits of using a Forex CRM?",
        desc: "The benefits include improved client retention, efficient lead management, personalized communication, integrated reporting, and seamless handling of payments and withdrawals.",
    },
    {
        number: "05.",
        title: "How to choose the right Forex CRM?",
        desc: "When choosing a Forex CRM, consider features like integration with trading platforms, scalability, automation options, data security, and the ability to customize for your brokerage’s needs.",
    },
];

export default function FAQ() {
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className={styles.faqDiv}>
            <div className={styles.containerFaq}>
                <div className={styles.faqDivHead}>
                    <div className={styles.headingBatch}>
                        <button type="button">
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>FAQ</span>
                        </button>
                    </div>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className={styles.faqDivMain}>
                    {faqDetail.map((item, index) => (
                        <div
                            className={styles.faqDivBox}
                            key={index}
                            onClick={() => toggleFaq(index)}>
                            <div className={styles.faqDivBoxHead}>
                                <h2><span>{item.number}</span>{item.title}</h2>
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
            </div>
        </section>
    );
}
