
import styles from './header.module.scss';
import Link from 'next/link';
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

const licenceDropBox = [
    {
        name: "Mauritius Forex License",
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: "/forex-licence-mauritius",
    },
    {
        name: "St. Vincent Forex License",
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: "/forex-licence-vincent",
    },
];

export default function Drop1() {
    return (
        <>
            <div className={styles.submenuDiv}>
                <div className="container">
                    <div className={styles.submenuDivGrid}>
                        {licenceDropBox.map((item, index) => (
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
