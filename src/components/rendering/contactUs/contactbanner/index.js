
import styles from './contactBanner.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";

export default function ContactBanner() {
    return (
        <section className={styles.contactBanner}>
            <div className={styles.containerMax}>
                <div className={styles.contactBannerinner}>
                    <div className={styles.contactBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                    <div className={styles.contactBannerLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.contactBannerLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.contactBannerDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Get in Touch with Rejoicefx</span>
                            </button>
                        </div>
                        <h2>Reach Out for Any Inquiries or Support</h2>
                        <p>Simply fill out the form below, and we’ll get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
