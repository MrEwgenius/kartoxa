import { calculateForAge, calculateForHeight, calculatePotate, createScoreMap } from "./calculatePotato";


const HairColor = createScoreMap(
    ["блондинка", "брюнетка", "рыжий", "серые", "русый", "цветной"],
    [5, 10, 15, 11, 17, 12]
);
const EyesColor = createScoreMap(
    ["зелёный", "карий", "голубой", "серый", "гетерохромия"],
    [17, 5, 15, 13, 25]
);
const Body = createScoreMap(
    ["худая", "обычная", "спортивная", "полная", "толстая"],
    [10, 13, 20, 5, 2]
);
const Haircut = createScoreMap(
    ["длиные", "лысая", "короткие", "каре"],
    [15, 2, 5, 10]
);
const Boobs = createScoreMap(
    ["boobs1", "boobs2", "boobs3", "boobs4"],
    [8, 13, 10, 7]
);

export const calculateTotalPotatoesWomen = (
    age: number,
    height: number,
    hairColor: string,
    eyesColor: string,
    haircut: string,
    boobs: string,
    body: string
): number => {
    return (
        calculateForAge(age) +
        calculateForHeight(height) +
        calculatePotate(hairColor, HairColor) +
        calculatePotate(eyesColor, EyesColor) +
        calculatePotate(haircut, Haircut) +
        calculatePotate(boobs, Boobs) +
        calculatePotate(body, Body)
    );
};
