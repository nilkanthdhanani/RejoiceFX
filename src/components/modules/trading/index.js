"use client";
import { usePathname } from 'next/navigation';
import styles from './trading.module.scss'
import buttonFxWhite from "@/assets/images/svg/buttonFxWhite.svg";
import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import tradingLine from "@/assets/images/png/tradingLine.png";
import Link from 'next/link';
import Image from 'next/image';
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

export default function Trading() {
    const pathname = usePathname();
    const isContactPage = pathname === '/contactus';

    return (
        <>
            {isContactPage ? null : (
                <section className={styles.trading}>
                    <div className={styles.containerMax}>
                        <div className={styles.tradingDiv}>
                            <div className={styles.tradingLine}>
                                <Image src={tradingLine} alt="tradingLine" />
                            </div>
                            <div className={styles.container}>
                                <div className={styles.tradingDivMain}>
                                    <div className={styles.tradingHead}>
                                        <div className={styles.headingBatch}>
                                            <Link href={"/"} >
                                                <Image src={buttonFxWhite} alt="buttonFxWhite" />
                                                <span>Take the Next Step</span>
                                            </Link>
                                        </div>
                                        <h2>Start Trading Smarter with Rejoicefx</h2>
                                        <p>Ready to elevate your Forex trading or brokerage operations? Whether you're looking to automate your trades, secure a broker license, or streamline client management, Rejoicefx has the tools and expertise to help you succeed. Don’t wait—unlock your trading potential today.</p>
                                    </div>
                                    <div className={styles.StartedButton}>
                                        <button><span>Get Started Now</span><ArrowSmallRight /></button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contactBannerbottom}>
                                <Image src={bannerBottomLines} alt="bannerBottomLines" />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
