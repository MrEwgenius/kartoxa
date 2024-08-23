'use client';
import React, { FC, ReactNode } from "react";
import styles from "./ContainerHuman.module.scss";
import Image from "next/image";
type ContainerHumanProps = {
    onclick?: () => void;
    img: any;
};

const ContainerHuman: FC<ContainerHumanProps> = ({ onclick, img }) => {
    return (
        <div onClick={onclick} className={styles.containerHuman}>
            <Image src={img} alt="#!" />
            <div className={styles.text}>Сколько картохи ты стоишь?</div>
        </div>
    );
};

export default ContainerHuman;
