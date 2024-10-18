
import styles from './header.module.scss';
import Link from 'next/link';
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

const serviceDropBox = [
    {
        name: "AI Web/ Mobile Development",
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: "/mobile-development",
    },
    {
        name: "AI Development",
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: "/ai-development",
    },
];

export default function Drop3() {
    return (
        <>
            <div className={styles.submenuDiv}>
                <div className="container">
                    <div className={styles.submenuDivGrid}>
                        {serviceDropBox.map((item, index) => (
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
