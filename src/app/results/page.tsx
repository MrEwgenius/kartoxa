"use client";
import React from "react";
import styles from "./Results.module.scss";

import CountUp from "react-countup";
import { useRouter, useSearchParams } from "next/navigation";

const Results = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const onTitleClick = () => {
        router.push("/");
    };

    const potatoSacks = searchParams?.get("potatoSacks");

    return (
        <div className={styles.containerResults}>
            <div className={styles.textContent}>
                <h2 className={styles.title}>
                    Ты оцениваешься в
                    {potatoSacks && (
                        <span>
                            <CountUp start={0} end={+potatoSacks} />
                        </span>
                    )}
                </h2>
                <p className={styles.subTitle}>Мешков(-а) картошки</p>
            </div>
            <button onClick={onTitleClick} className={styles.button}>
                РАССЧИТАТЬ ЕЩЁ РАЗ?
            </button>
        </div>
    );
};
export default Results;
