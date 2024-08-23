"use client";
import React, { Suspense } from "react";
import styles from "./Results.module.scss";
import CountUp from "react-countup";
import { useRouter, useSearchParams } from "next/navigation";

function Search() {
    const searchParams = useSearchParams();
    const potatoSacks = searchParams?.get("potatoSacks");

    return (
        <span>
            <CountUp start={0} end={potatoSacks ? +potatoSacks : 0} />
        </span>
    );
}

const Results = () => {
    const router = useRouter();
    const onTitleClick = () => {
        router.push("/");
    };

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <div className={styles.containerResults}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Ты оцениваешься в <Search />
                    </h2>
                    <p className={styles.subTitle}>Мешков(-а) картошки</p>
                </div>
                <button onClick={onTitleClick} className={styles.button}>
                    РАССЧИТАТЬ ЕЩЁ РАЗ?
                </button>
            </div>
        </Suspense>
    );
};

export default Results;
