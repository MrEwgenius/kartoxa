"use client";
import React, { useRef, useState } from "react";
import styles from "./Men.module.scss";
import Ranges from "../../components/Range/Ranges";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
// import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { calculateTotalPotatoesMen } from "../../utils/potatoCalculationsMen";
import arrow from "../../../public/assets/icons/arrow-back.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface IFormInput {
    valuesAge: number;
    valuesHeight: number;
    hairColor: string;
    haircut: string;
    eyesColor: string;
    beard: string;
    body: string;
}
const Men = () => {
    // const dispatch = useDispatch();
    const router = useRouter();

    const { handleSubmit, watch, setValue } = useForm<IFormInput>({
        defaultValues: {
            hairColor: "блондин",
            haircut: "короткие",
            eyesColor: "зелёный",
            beard: "beard1",
            body: "body1",
            valuesAge: 18,
            valuesHeight: 172,
        },
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const potatoSacks = calculateTotalPotatoesMen(
            data.valuesAge,
            data.valuesHeight,
            data.hairColor,
            data.eyesColor,
            data.haircut,
            data.beard,
            data.body
        );
        console.log(data);

        // dispatch(updatePotatoSacks(potatoSacks));
        router.push(`/results?potatoSacks=${potatoSacks}`);
    };

    return (
        <div className={styles.containerMen}>
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
                        onChange={(newValue) =>
                            setValue("hairColor", newValue.target.value)
                        }
                        name="selectHairColor"
                        className={styles.select}
                    >
                        {["блондин", "брюнет", "рыжий", "цветной", "русый"].map(
                            (color) => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div className={styles.row}>
                    <div className={styles.descrRow}>Стрижка</div>

                    <div className={styles.radioButtons}>
                        {["длинные", "лысый", "короткие", "чёлка", "каре"].map(
                            (haircut) => (
                                <RadioButton
                                    key={haircut}
                                    onChange={(id) => setValue("haircut", id)}
                                    name="haircut"
                                    id={haircut}
                                    text={haircut}
                                />
                            )
                        )}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.descrRow}>Борода</div>

                    <div className={styles.radioButtonsBoroda}>
                        {[
                            "beard",
                            "beard-none",
                            "beard-small",
                            "beard-middle",
                        ].map((beard) => (
                            <RadioButton
                                key={beard}
                                onChange={(id) => setValue("beard", id)}
                                name="beard"
                                id={beard}
                                text={
                                    <Image
                                        width={128}
                                        height={128}
                                        src={`/assets/img/${beard}.png`}
                                        alt="image"
                                    />
                                }
                            />
                        ))}
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
                    <div className={styles.descrRow}>Телосложение</div>
                    <div className={styles.radioButtonsBoroda}>
                        {["body-1", "body-2", "body-3"].map((body) => (
                            <RadioButton
                                key={body}
                                onChange={(id) => setValue("body", id)}
                                name="body"
                                id={body}
                                text={
                                    <Image
                                        width={128}
                                        height={128}
                                        src={`/assets/img/${body}.png`}
                                        alt="image"
                                    />
                                }
                            />
                        ))}
                    </div>
                </div>
                <Button title={"Рассчитать"} />
            </form>
        </div>
    );
};

export default Men;
