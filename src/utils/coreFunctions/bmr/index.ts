import { MifflinStJeorInput, KatchMcArdleInput } from "./types";

export function calculateMifflinStJeor({
  weight,
  height,
  age,
  sex,
  unit = "metric",
}: MifflinStJeorInput): number {
  const weightKg = unit === "imperial" ? weight * 0.453592 : weight;
  const heightCm = unit === "imperial" ? height * 2.54 : height;

  return sex === "male"
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

export function calculateKatchMcArdle({
  leanBodyMass,
  unit = "metric",
}: KatchMcArdleInput): number {
  const lbmKg = unit === "imperial" ? leanBodyMass * 0.453592 : leanBodyMass;
  return 370 + 21.6 * lbmKg;
}
