"use client";
import React from "react";
import styles from "./Contacts.module.scss";
import Button from "../../components/Button/Button";
import instagram from "../../../public/assets/icons/instagram.svg";
import tg from "../../../public/assets/icons/telegram.svg";
import github from "../../../public/assets/icons/github.svg";
import email from "../../../public/assets/icons/email.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Contacts = () => {
    const router = useRouter();
    const ClickOnHome = () => {
        router.push("/");
    };
    return (
        <div className={styles.containerContacts}>
            <div className={styles.containerWrapper}>
                <div className={styles.groupContacts}>
                    <div>
                        <Link
                            href={"https://www.instagram.com/mr.ewgenius/"}
                            target="blank"
                        >
                            <Image src={instagram} alt="instagram" />
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={"https://www.instagram.com/mr.ewgenius/"}
                            target="blank"
                        >
                            Mr.Ewgenius
                        </Link>
                    </div>
                </div>

                <div className={styles.groupContacts}>
                    <div>
                        <Link href={""}>
                            <Image src={email} alt="email" />
                        </Link>
                    </div>
                    <div>
                        <Link href={""}>ebolynskii@mail.ru</Link>
                    </div>
                </div>

                <div className={styles.groupContacts}>
                    <div>
                        <Link
                            target="blank"
                            href="https://github.com/MrEwgenius"
                        >
                            <Image src={github} alt="github" />
                        </Link>
                    </div>
                    <div>
                        <Link
                            target="blank"
                            href="https://github.com/MrEwgenius"
                        >
                            MrEwgenius
                        </Link>
                    </div>
                </div>

                <div className={styles.groupContacts}>
                    <div>
                        <Link target="blank" href="https://t.me/Badiiis">
                            <Image src={tg} alt="tg" />
                        </Link>
                    </div>
                    <div>
                        <Link target="blank" href="https://t.me/Badiiis">
                            @Badiiis
                        </Link>
                    </div>
                </div>
                <button onClick={ClickOnHome} className={styles.buttonHome}>
                    Вернуться к калькулятору
                </button>
            </div>
        </div>
    );
};

export default Contacts;
