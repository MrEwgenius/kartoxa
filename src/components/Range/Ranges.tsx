import React, { useState, FC } from "react";
import { Range, getTrackBackground } from "react-range";
import styles from "./Ranges.module.scss";

type RangesProps = {
    value: number;
    onChange: (newValues: number) => void;
    min?: number;
    max?: number;
};

const Ranges: FC<RangesProps> = ({ value, onChange, min, max }) => {
    return (
        <div>
            <Range
                step={1}
                min={min}
                max={max}
                values={[value]}
                onChange={(newValues) => onChange(newValues[0])}
                renderTrack={({ props, children }) => (
                    <div
                        className={styles.track}
                        {...props}
                        style={{
                            ...props.style,
                            height: "6px",
                            width: "100%",
                            background: getTrackBackground({
                                values: [value],
                                min: min || 0,
                                max: max || 100,
                                colors: ["rgb(255, 139, 30)", "#ccc"],
                            }),
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div {...props} className={styles.thumb} />
                )}
            />
        </div>
    );
};

export default Ranges;
