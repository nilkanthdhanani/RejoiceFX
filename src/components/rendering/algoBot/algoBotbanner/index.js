
import styles from './algoBotBanner.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";
import algoBotBanner from "@/assets/images/webp/algoBotBanner.webp";

export default function AlgoBotBanner() {
    return (
        <section className={styles.AlgoBotBanner}>
            <div className={styles.containerMax}>
                <div className={styles.AlgoBotBannerinner}>
                    <div className={styles.AlgoBotBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                    <div className={styles.AlgoBotBannerLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.AlgoBotBannerLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.AlgoBotBannerDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Algo Bot</span>
                            </button>
                        </div>
                        <h1>Fast, Smart, and Tailored Algo Trading</h1>
                        <p>Rejoice FX’s Algo Trading empowers you to automate strategies with precision, transforming your trading into a seamless experience.</p>
                    </div>
                    <div className={styles.AlgoBotBannerImgDiv}>
                        <div className={styles.AlgoBotBannerImg}>
                            <Image src={algoBotBanner} alt="algoBotBanner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
