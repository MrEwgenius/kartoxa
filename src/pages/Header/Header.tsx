import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapContainer}>
                    <Link  className={styles.logo} href={"/"}>
                        КАРТОХА
                    </Link>
                    <div className={styles.navigation}>
                        <Link href={"/main"}>Новости</Link>
                        <Link href={"/"}>Интересное</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
