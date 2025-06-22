import { BodyFatInput, MassBreakdownInput } from "./types";
import { truncateTo2Digits } from "@/utils/helpers/helperFunctions";

function toInches(value: number, unit: "metric" | "imperial"): number {
  return unit === "imperial" ? value : value / 2.54;
}

function toKilograms(value: number, unit: "metric" | "imperial"): number {
  return unit === "imperial" ? value * 0.453592 : value;
}

// 1. U.S. Navy Body Fat Estimate
export function estimateBodyFatPercentage({
  sex,
  waist,
  neck,
  height,
  hip,
  unit = "metric",
}: BodyFatInput): number {
  const w = toInches(waist, unit);
  const n = toInches(neck, unit);
  const h = toInches(height, unit);
  const hp = hip !== undefined ? toInches(hip, unit) : undefined;

  if (sex === "male") {
    if (w <= n || h <= 0)
      throw new Error("Invalid measurements for male body fat estimation.");
    const result = 86.01 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
    return truncateTo2Digits(result);
  } else {
    if (!hp) throw new Error("Hip measurement is required for females.");
    if (w + hp <= n || h <= 0)
      throw new Error("Invalid measurements for female body fat estimation.");
    const result =
      163.205 * Math.log10(w + hp - n) - 97.684 * Math.log10(h) - 78.387;
    return truncateTo2Digits(result);
  }
}

// 2. Lean Body Mass
export function calculateLeanBodyMass({
  weight,
  bodyFatPercent,
  unit = "metric",
}: MassBreakdownInput): number {
  const weightKg = toKilograms(weight, unit);
  if (bodyFatPercent < 0 || bodyFatPercent >= 100)
    throw new Error("Invalid body fat %.");
  return truncateTo2Digits(weightKg * (1 - bodyFatPercent / 100));
}

// 3. Fat Mass
export function calculateFatMass({
  weight,
  bodyFatPercent,
  unit = "metric",
}: MassBreakdownInput): number {
  const weightKg = toKilograms(weight, unit);
  if (bodyFatPercent < 0 || bodyFatPercent >= 100)
    throw new Error("Invalid body fat %.");
  return truncateTo2Digits(weightKg * (bodyFatPercent / 100));
}
