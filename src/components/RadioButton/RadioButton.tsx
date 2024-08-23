'use client';
import React, {
    ChangeEvent,
    FC,
    ReactElement,
} from "react";

import styles from "./RadioButton.module.scss";

type RadioButtonProps = {
    id: string;
    name: string;
    text: string | ReactElement;
    checked?: boolean;
    onChange?: (value: string) => void;
};

const RadioButton: FC<RadioButtonProps> = ({
    id,
    text,
    name,
    checked,
    onChange,
}) => {
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.id);
    };
    return (
        <div className={styles.label}>
            <input
                onChange={handleRadioChange}
                defaultChecked={checked}
                type="radio"
                id={id}
                name={name}
            />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default RadioButton;
