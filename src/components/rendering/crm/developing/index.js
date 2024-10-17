
import styles from './developing.module.scss'
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import CrmSystem from './devlopingSections/crmSystem';
import Rate from './devlopingSections/rate';
import Team from './devlopingSections/team';

export default function Developing() {
    return (
        <section >
            <div className={styles.containerMax}>
                <div className={styles.brokerage}>
                    <div className={styles.container}>
                        <CrmSystem />
                        <Rate />
                        <Team />
                        <div className={styles.contactBannerbottom}>
                            <Image src={bannerBottomLines} alt="bannerBottomLines" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
