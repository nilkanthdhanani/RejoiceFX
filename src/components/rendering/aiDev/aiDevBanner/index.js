
import styles from './aiDevBanner.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";

export default function AiDevBanner() {
    return (
        <section className={styles.aiDevBanner}>
            <div className={styles.containerMax}>
                <div className={styles.aiDevBannerinner}>
                    <div className={styles.aiDevBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                    <div className={styles.aiDevBannerLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.aiDevBannerLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.aiDevBannerDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>AI Development</span>
                            </button>
                        </div>
                        <h1>AI/ML Development Services: Empowering Your Business</h1>
                        <p>Drive innovation and efficiency in your business with expert AI & ML services by Rejoice FX.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
