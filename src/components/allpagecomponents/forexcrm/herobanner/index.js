
import Image from "next/image";
import bannerBottomLines from "@/assets/crmpageImage/bannerBottomLines.svg";
import leftLayer from "@/assets/crmpageImage/leftLayer.svg";
import rightLayer from "@/assets/crmpageImage/rightLayer.svg";
import buttonFx from "@/assets/crmpageImage/buttonFx.svg";
import crmBanner from "@/assets/crmpageImage/crmBanner.gif";
import styles from './crmBanner.module.scss'
import Link from "next/link";

export default function CrmBanner() {
    return (
        <section className={styles.contactBanner}>
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
                    <Link href={"/"} >
                        <Image src={buttonFx} alt="buttonFx" />
                        <span>Forex CRM</span>
                    </Link>
                    <h2>Transform Client Management with Forex CRM</h2>
                    <p>This highlights the core purpose of the CRM while making it clear that it's tailored for Forex brokers.</p>
                </div>
                <div className={styles.contactBannerImg}>
                    <Image src={crmBanner} alt="crmBanner" />
                </div>
            </div>
        </section>
    );
}
