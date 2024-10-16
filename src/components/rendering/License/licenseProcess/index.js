
import styles from './licenseProcess.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import mauritiusLicenseImg from "@/assets/images/png/mauritiusLicenseImg.png";
import listIcon from "@/assets/images/svg/listIcon.svg";

export default function LicenseProcess({ processHead, processPera }) {
    return (
        <section className={styles.mauritiusProcess}>
            <div className={styles.containerMax}>
                <div className={styles.mauritiusProcessDetail}>
                    <div className={styles.headingBatch}>
                        <button type="button" >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Minimum Paid-up Capital Required</span>
                        </button>
                    </div>
                    <h2>Mauritius Forex License Requirements</h2>
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
            </div>
        </section>
    );
}
