import {
  MifflinStJeorInput,
  KatchMcArdleInput,
  HarrisBenedictInput,
} from "./types";
import { truncateTo2Digits } from "@/utils/helpers/helperFunctions";

export function calculateMifflinStJeor({
  weight,
  height,
  age,
  sex,
  unit = "metric",
}: MifflinStJeorInput): number {
  if (weight <= 0 || height <= 0 || age <= 0) {
    throw new Error(
      "Invalid input: weight, height, and age must be greater than zero."
    );
  }

  const weightKg = unit === "imperial" ? weight * 0.453592 : weight;
  const heightCm = unit === "imperial" ? height * 2.54 : height;

  const bmr =
    sex === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  return truncateTo2Digits(bmr);
}

export function calculateKatchMcArdle({
  weight,
  bodyFatPercentage,
  unit = "metric",
}: KatchMcArdleInput): number {
  if (weight <= 0 || bodyFatPercentage < 0 || bodyFatPercentage >= 100) {
    throw new Error("Invalid input: check weight and body fat percentage.");
  }

  const weightKg = unit === "imperial" ? weight * 0.453592 : weight;
  const lbm = weightKg * (1 - bodyFatPercentage / 100);
  const bmr = 370 + 21.6 * lbm;

  return truncateTo2Digits(bmr);
}

export function calculateHarrisBenedict({
  weight,
  height,
  age,
  sex,
  unit = "metric",
}: HarrisBenedictInput): number {
  if (weight <= 0 || height <= 0 || age <= 0) {
    throw new Error(
      "Invalid input: weight, height, and age must be greater than zero."
    );
  }

  const weightKg = unit === "imperial" ? weight * 0.453592 : weight;
  const heightCm = unit === "imperial" ? height * 2.54 : height;

  const bmr =
    sex === "male"
      ? 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age
      : 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * age;

  return truncateTo2Digits(bmr);
}
