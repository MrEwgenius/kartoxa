'use client';
import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = {
    title: string | ReactElement;
    disabled?: boolean;
    className?: string;
};

const Button: FC<ButtonProps> = ({ title, className }) => {
    return (
        <button type="submit" className={classNames(className, styles.button)}>
            {title}
        </button>
    );
};

export default Button;
