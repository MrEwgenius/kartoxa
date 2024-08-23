import {
    calculateForAge,
    calculateForHeight,
    calculatePotate,
    createScoreMap,
} from "./calculatePotato";

const HairColor = createScoreMap(
    ["блондин", "брюнет", "рыжий", "цветной", "русый"],
    [5, 13, 5, 3, 12]
);
const EyesColor = createScoreMap(
    ["зелёный", "карий", "голубой", "серый", "гетерохромия"],
    [17, 5, 15, 13, 25]
);
const Body = createScoreMap(["body1", "body2", "body3"], [20, 10, 5]);
const Haircut = createScoreMap(
    ["длинные", "лысый", "короткие", "чёлка", "каре"],
    [5, 2, 15, 4, 13]
);
const Beard = createScoreMap(
    ["beard1", "beard2", "beard3", "beard4"],
    [15, 10, 20, 5]
);

export const calculateTotalPotatoesMen = (
    age: number,
    height: number,
    hairColor: string,
    eyesColor: string,
    haircut: string,
    beard: string,
    body: string
): number => {
    return (
        calculateForAge(age) +
        calculateForHeight(height) +
        calculatePotate(hairColor, HairColor) +
        calculatePotate(eyesColor, EyesColor) +
        calculatePotate(haircut, Haircut) +
        calculatePotate(beard, Beard) +
        calculatePotate(body, Body)
    );
};
