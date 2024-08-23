"use client";
import React from "react";

import styles from "./Footer.module.scss";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();

    const onClickContacts = () => {
        router.push("/contacts");
    };
    return (
        <footer className={styles.containerFooter}>
            <div className={styles.containerWrapper}>
                <div>Политика конфиденциальности</div>
                <div onClick={onClickContacts} className={styles.link}>
                    Контакты
                </div>
            </div>
        </footer>
    );
};

export default Footer;
