
import styles from './licenseInput.module.scss'
import Link from "next/link";
import Image from "next/image";

import ArrowSmallRight from "@/assets/images/svg/arrowSmallRight";
import buttonFx from "@/assets/images/svg/buttonFx.svg";

export default function LicenseInput() {
    return (
        <section className={styles.mauritiusInput}>
            <div className={styles.container}>
                <div className={styles.inputGrid}>
                    <div className={styles.inputGridDiv}>
                        <Link href={"/"} >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Overview</span>
                        </Link>
                        <h2>Why Choose Mauritius Your Forex Brokerage?</h2>
                        <p>Rejoicefx offers a complete setup for establishing an unregulated Forex Company in St. Vincent and the Grenadines. While St. Vincent is an unregulated jurisdiction, we ensure your documents are prepared to allow smooth operation of your Forex brokerage. This makes St. Vincent an affordable and efficient solution for starting a Forex brokerage from a broker’s perspective.
                            St. Vincent is recognized by the Organization for Economic Co-operation and Development (OECD) as a stable, independent, and politically free island. </p>
                    </div>
                    <form>
                        <div className={styles.formDivOne}>
                            <div className={styles.inputBox}>
                                <label>First Name</label>
                                <input type="text" placeholder="Enter your first name" required />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email address" required />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Phone</label>
                                <input type="tel" placeholder="Enter your number" required />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Country</label>
                                <select>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>Japan</option>
                                    <option>UAE</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label>Message</label>
                            <textarea rows="6" placeholder="Type your message here..."></textarea>
                        </div>
                        <div className={styles.inputBoxButton}>
                            <button type="submit" >Submit Now <ArrowSmallRight /> </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
