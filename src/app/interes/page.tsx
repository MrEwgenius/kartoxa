import React from "react";
import style from "./Interes.module.scss";
import fon from "../../../public/assets/img/fon.webp";
import Image from "next/image";
import { facts } from "@/mock/facts";

const Interes = () => {
    return (
        <div className={style.containerInteres}>
            {facts.map((el) => (
                <div key={el.id} className={style.content}>
                    <h2>{el.title}</h2>
                    <p>{el.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Interes;
