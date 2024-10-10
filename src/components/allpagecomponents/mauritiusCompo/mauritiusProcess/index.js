
import Image from "next/image";
import buttonFx from "@/assets/crmpageImage/buttonFx.svg";
import mauritiusLicenseImg from "@/assets/crmpageImage/mauritiusLicenseImg.png";
import listIcon from "@/assets/crmpageImage/listIcon.svg";
import styles from './mauritiusProcess.module.scss'
import Link from "next/link";

export default function MauritiusProcess({ processHead, processPera }) {
    return (
        <section className={styles.mauritiusProcess}>
            <div className={styles.container}>
                <div className={styles.mauritiusProcessDetail}>
                    <Link href={"/"} >
                        <Image src={buttonFx} alt="buttonFx" />
                        <span>Minimum Paid-up Capital Required</span>
                    </Link>
                    <h2>Mauritius Forex License Requirements</h2>
                </div>
            </div>
            <div className={styles.ProcessDiv}>
                <div className={styles.container}>
                    <div className={styles.ProcessDivGird}>
                        <div className={styles.ProcessContent}>
                            <h3>{processHead}</h3>
                            <span>License Renewal Cost</span>
                            <div className={styles.ProcessContentPera}>
                                <p><span>Note:</span> {processPera}</p>
                            </div>
                            <h4>Documents Required :</h4>
                            <div className={styles.ProcessContentList}>
                                <div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={listIcon} alt="listIcon" />
                                        <p>Notarized Passport copy (Should be notarized in English - 2 copies)</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={listIcon} alt="listIcon" />
                                        <p>Last 3 months Utility Bill (Should be notarized in English - 2 copies with original)</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={listIcon} alt="listIcon" />
                                        <p>Director/Shareholder's Bank Reference Letter</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={listIcon} alt="listIcon" />
                                        <p>Director/Shareholder's CV</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={listIcon} alt="listIcon" />
                                        <p>Formed and verified corporate documents</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={listIcon} alt="listIcon" />
                                        <p>Certificate of Incumbency</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={listIcon} alt="listIcon" />
                                        <p>Bank Application Forms</p>
                                    </div>
                                    <div className={styles.ProcessContentListDiv}>
                                        <Image src={listIcon} alt="listIcon" />
                                        <p>AML Procedures</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ProcessDivGirdImg}>
                            <Image src={mauritiusLicenseImg} alt="mauritiusLicenseImg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
