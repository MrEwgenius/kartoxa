import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapContainer}>
                    <Link  className={styles.logo} href={"/"}>
                        КАРТОХА
                    </Link>
                    <div className={styles.navigation}>
                        <Link href={"/main"}>Новости</Link>
                        <Link  href={"/interes"}>Интересное</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
