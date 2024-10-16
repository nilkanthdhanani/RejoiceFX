import { useState } from "react";
import styles from "./calculator.module.scss";
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import angleDown from "@/assets/images/svg/angleDown.svg";
import TadingDiv1 from "./tadingDiv/tadingDiv1";
import TadingDiv2 from "./tadingDiv/tadingDiv2";
import TadingDiv3 from "./tadingDiv/tadingDiv3";
import TadingDiv4 from "./tadingDiv/tadingDiv4";
import TadingDiv5 from "./tadingDiv/tadingDiv5";
import TadingDiv6 from "./tadingDiv/tadingDiv6";
import TadingDiv7 from "./tadingDiv/tadingDiv7";
import TadingDiv8 from "./tadingDiv/tadingDiv8";
import TadingDiv9 from "./tadingDiv/tadingDiv9";
import TadingDiv10 from "./tadingDiv/tadingDiv10";
import TadingDiv11 from "./tadingDiv/tadingDiv11";
import ArrowSmallRight from "@/assets/images/svg/arrowSmallRight";

const tracker = [
    { title: "Compliance" },
    { title: "Logo" },
    { title: "Website" },
    { title: "Trading Platform" },
    { title: "CRM & Trader’s Room" },
    { title: "Cabinet Mobile App" },
    { title: "CRM Mobile App" },
    { title: "Risk Management System" },
    { title: "Liquidity" },
    { title: "Copy Trading" },
    { title: "PAMM" },
];

export default function Calculator() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const tadingDivs = [
        <TadingDiv1 />,
        <TadingDiv2 />,
        <TadingDiv3 />,
        <TadingDiv4 />,
        <TadingDiv5 />,
        <TadingDiv6 />,
        <TadingDiv7 />,
        <TadingDiv8 />,
        <TadingDiv9 />,
        <TadingDiv10 />,
        <TadingDiv11 />
    ];

    const handleTrackerClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < tadingDivs.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className={styles.calculator}>
            <div className={styles.container}>
                <div className={styles.calculatorHead}>
                    <div className={styles.headingBatch}>
                        <button type="button">
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Calculator</span>
                        </button>
                    </div>
                    <h2>Forex Calculator</h2>
                </div>
                <div className={styles.tradingTracker}>
                    {tracker.map((item, index) => (
                        <div
                            className={`${styles.tradingTrackerBox} ${index <= currentIndex ? styles.active : ""}`}
                            key={index}>
                            <div className={styles.tracker}>
                                <div className={styles.trackerIcon}></div>
                            </div>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
                {tadingDivs[currentIndex]}
                <div className={styles.trackingButton}>
                    <div
                        className={`${styles.trackingButtonLeft} ${currentIndex === 0 ? styles.disabled : ""}`}
                        onClick={handlePrev}>
                        <Image src={angleDown} alt="angleDown" />
                    </div>
                    <div
                        className={`${styles.trackingButtonRight} ${currentIndex === tadingDivs.length - 1 ? styles.disabled : ""}`}
                        onClick={handleNext}>
                        <Image src={angleDown} alt="angleDown" />
                    </div>
                </div>
                <div className={styles.totalAmount}>
                    <p>Total Amount</p>
                    <div className={styles.totalAmountTitle}>
                        <h6>$ 6,000.00</h6>
                        <div className={styles.contactButton}>
                            <button><span>Proceed</span><ArrowSmallRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
