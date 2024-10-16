import styles from './contactInput.module.scss'

import ArrowSmallRight from "@/assets/images/svg/arrowSmallRight";

export default function ContactInput() {
    return (
        <section className={styles.contactInput}>
            <div className={styles.container}>
                <div className={styles.inputGrid}>
                    <div className={styles.inputGridDiv}>
                        <h2>We're Here to Help</h2>
                        <p>Need assistance? Get in touch with our team for any queries about our services.</p>
                    </div>
                    <form>
                        <div className={styles.formDivOne}>
                            <div className={styles.inputBox}>
                                <label>First Name</label>
                                <input type="text" placeholder="Enter your first name" required />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Last Name</label>
                                <input type="text" placeholder="Enter your last name" required />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email address" required />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Phone</label>
                                <input type="tel" placeholder="Enter your number" required />
                            </div>
                        </div>
                        <div className={styles.inputBox2}>
                            <label>Message</label>
                            <textarea rows="6" placeholder="Type your message here..."></textarea>
                        </div>
                        <div className={styles.contactButton}>
                            <button type="submit" ><span>Submit Now</span> <ArrowSmallRight /> </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
