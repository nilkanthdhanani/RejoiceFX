
import styles from './heroBanner.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";
import heroBanner from "@/assets/images/png/heroBanner.png";
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

export default function HeroBanner() {
    return (
        <section className={styles.heroBanner}>
            <div className={styles.containerMax}>
                <div className={styles.heroBannerinner}>
                    <div className={styles.heroBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                    <div className={styles.heroBannerLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.heroBannerLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.heroBannerDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Forex Trading Simplified</span>
                            </button>
                        </div>
                        <h2>Optimize Operations with Our CRM</h2>
                        <p>Streamline your client management and enhance efficiency with our tailored CRM solutions. Designed specifically for Forex brokers to help you stay organized and boost performance.</p>
                        <div className={styles.contactButton2}>
                            <button><span>Get Started</span><ArrowSmallRight /></button>
                            <button><span>Try For Free</span><ArrowSmallRight /></button>
                        </div>
                    </div>
                    <div className={styles.heroBannerImg}>
                        <Image src={heroBanner} alt="heroBanner" />
                    </div>
                </div>
            </div>
        </section>
    );
}
