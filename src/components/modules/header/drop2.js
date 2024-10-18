
import styles from './header.module.scss';
import Link from 'next/link';
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

const botDropBox = [
    {
        name: "AI bot development",
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: "/algo-bot",
    },
    {
        name: "Strategies",
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: "/algo-bot",
    },
];

export default function Drop2() {
    return (
        <>
            <div className={styles.submenuDiv}>
                <div className="container">
                    <div className={styles.submenuDivGrid}>
                        {botDropBox.map((item, index) => (
                            <div className={styles.submenuDivGridContent} key={index}>
                                <h2>{item.name}</h2>
                                <p>{item.details}</p>
                                <Link href={item.link} >See Solution<ArrowSmallRight /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
