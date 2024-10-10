
import Image from "next/image";
import bannerBottomLines from "@/assets/crmpageImage/bannerBottomLines.svg";
import leftLayer from "@/assets/crmpageImage/leftLayer.svg";
import rightLayer from "@/assets/crmpageImage/rightLayer.svg";
import buttonFx from "@/assets/crmpageImage/buttonFx.svg";
import styles from './contactBanner.module.scss'
import Link from "next/link";

export default function ContactBanner() {
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
                        <span>Get in Touch with Rejoicefx</span>
                    </Link>
                    <h2>Reach Out for Any Inquiries or Support</h2>
                    <p>Simply fill out the form below, and we’ll get back to you as soon as possible.</p>
                </div>
            </div>
        </section>
    );
}
