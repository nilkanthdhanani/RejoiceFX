
import styles from './developing.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayerWhite from "@/assets/images/png/leftLayerWhite.png";
import rightLayerWhite from "@/assets/images/png/rightLayerWhite.png";
import CrmSystem from './devlopingSections/crmSystem';
import Rate from './devlopingSections/rate';
import Team from './devlopingSections/team';

export default function Developing() {
    return (
        <section >
            <div className={styles.containerMax}>
                <div className={styles.brokerage}>
                    <div className={styles.crmBannerLineRight}>
                        <Image src={rightLayerWhite} alt="rightLayerWhite" />
                    </div>
                    <div className={styles.crmBannerLineLeft}>
                        <Image src={leftLayerWhite} alt="leftLayerWhite" />
                    </div>
                    <div className={styles.container}>
                        <CrmSystem />
                        <Rate />
                        <Team />
                    </div>
                    <div className={styles.contactBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                </div>
            </div>
        </section>
    );
}
