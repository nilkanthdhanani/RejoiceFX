import styles from "./projects.module.scss"
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import projectBg1 from "@/assets/images/png/projectBg1.png";

export default function Projects1() {
    return (
        <section className={styles.projectDiv}>
            <div className={styles.container}>
                <div className={styles.projectDivHead}>
                    <div className={styles.headingBatch}>
                        <button type="button" >
                            <Image src={buttonFx} alt="buttonFx" />
                            <span>Work Process</span>
                        </button>
                    </div>
                    <h2>Unmatched frontend</h2>
                </div>
                <div className={styles.projectFaq}>
                    <div className={styles.projectFaqDivMain}>
                        <div className={styles.projectFaqDiv}>
                        </div>
                    </div>
                    <Image src={projectBg1} alt="projectBg1" />
                </div>
            </div>
        </section>
    )
}
