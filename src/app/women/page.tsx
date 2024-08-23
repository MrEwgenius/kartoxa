"use client";
import React, { useRef, useState } from "react";
import styles from "./Women.module.scss";
import Ranges from "../../components/Range/Ranges";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import arrow from "../../../public/assets/icons/arrow-back.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { calculateTotalPotatoesWomen } from "@/utils/potatoCalculationsWomen";

interface IFormInput {
    valuesAge: number;
    valuesHeight: number;
    hairColor: string;
    haircut: string;
    eyesColor: string;
    boobs: string;
    body: string;
}

const Women = () => {
    const router = useRouter();

    const { handleSubmit, watch, setValue } = useForm<IFormInput>({
        defaultValues: {
            hairColor: "блондинка",
            haircut: "длиные",
            eyesColor: "зелёный",
            boobs: "boobs1",
            body: "худая",
            valuesAge: 18,
            valuesHeight: 165,
        },
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const potatoSacks = calculateTotalPotatoesWomen(
            data.valuesAge,
            data.valuesHeight,
            data.hairColor,
            data.eyesColor,
            data.haircut,
            data.boobs,
            data.body
        );
        console.log(data);

        router.push(`/results?potatoSacks=${potatoSacks}`);
    };

    return (
        <div className={styles.containerWomen}>
            <div className={styles.breadcrumb}>
                <Link href={"/"}>
                    <Image src={arrow} alt="←" />
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.row}>
                    <div className={styles.descrRow}>
                        Возраст <span>{watch("valuesAge")}</span>
                    </div>
                    <div className={styles.ranges}>
                        <Ranges
                            min={14}
                            max={65}
                            value={watch("valuesAge")}
                            onChange={(newValue) =>
                                setValue("valuesAge", newValue)
                            }
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.descrRow}>
                        Рост(см)<span>{watch("valuesHeight")}</span>
                    </div>
                    <div className={styles.ranges}>
                        <Ranges
                            min={130}
                            max={225}
                            value={watch("valuesHeight")}
                            onChange={(newValue) =>
                                setValue("valuesHeight", newValue)
                            }
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.descrRow}>Цвет волос</div>
                    <select
                        onChange={(e) => setValue("hairColor", e.target.value)}
                        name="hairColor"
                        className={styles.select}
                    >
                        {[
                            "блондинка",
                            "брюнетка",
                            "рыжий",
                            "серые",
                            "русый",
                            "цветной",
                        ].map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.row}>
                    <div className={styles.descrRow}>Стрижка</div>
                    <div className={styles.radioButtons}>
                        {["длиные", "лысая", "короткие", "каре"].map(
                            (haircut) => (
                                <RadioButton
                                    onChange={(id) => setValue("haircut", id)}
                                    name="radio-button"
                                    key={haircut}
                                    id={haircut}
                                    text={haircut}
                                />
                            )
                        )}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.descrRow}>Цвет глаз</div>
                    <select
                        onChange={(e) => setValue("eyesColor", e.target.value)}
                        name="Eyes"
                        className={styles.select}
                    >
                        {[
                            "зелёный",
                            "карий",
                            "голубой",
                            "серый",
                            "гетерохромия",
                        ].map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.row}>
                    <div className={styles.descrRow}>Размер груди</div>
                    <div className={styles.radioButtonsBoobs}>
                        {["boobs-a", "boobs-b", "boobs-c", "boobs-d"].map(
                            (boobs) => (
                                <RadioButton
                                    onChange={(id) => setValue("boobs", id)}
                                    name="boobs"
                                    key={boobs}
                                    id={boobs}
                                    text={
                                        <Image
                                        width={128}
                                        height={128}
                                            src={(`/assets/img/${boobs}.png`)}
                                            alt="boobs"
                                        />
                                    }
                                />
                            )
                        )}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.descrRow}>Фигура</div>
                    <select
                        onChange={(e) => setValue("body", e.target.value)}
                        name="body"
                        className={styles.select}
                    >
                        {[
                            "худая",
                            "обычная",
                            "спортивная",
                            "полная",
                            "толстая",
                        ].map((body) => (
                            <option key={body} value={body}>
                                {body}
                            </option>
                        ))}
                    </select>
                </div>

                <Button title={"Рассчитать"} />
            </form>
        </div>
    );
};

export default Women;
