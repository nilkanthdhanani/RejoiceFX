
import styles from './crmBanner.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";
import heroBanner from "@/assets/images/webp/heroBanner.webp";

export default function CrmBanner() {
    return (
        <section className={styles.crmBanner}>
            <div className={styles.containerMax}>
                <div className={styles.crmBannerinner}>
                    <div className={styles.crmBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                    <div className={styles.crmBannerLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.crmBannerLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.crmBannerDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Forex CRM</span>
                            </button>
                        </div>
                        <h1>Transform Client Management with Forex CRM</h1>
                        <p>This highlights the core purpose of the CRM while making it clear that it's tailored for Forex brokers.</p>
                    </div>
                    <div className={styles.crmBannerImgDiv}>
                        <div className={styles.crmBannerImg}>
                            <Image src={heroBanner} alt="heroBanner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
