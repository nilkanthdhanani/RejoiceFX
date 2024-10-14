import React from "react";
import styles from "./home.module.scss";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <div className={styles.homepage}>
                <h1>Home page</h1>
                <Link href={"/contactus"}>contactus</Link>
                <Link href={"/forexcrm"}>forexcrm</Link>
                <Link href={"/forexlicencemauritius"}>forexlicencemauritius</Link>
                <Link href={"/forexlicencemvincent"}>forexlicencemvincent</Link>
            </div>
        </>
    );
}
