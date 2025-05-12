import { BodyFatInput, MassBreakdownInput } from "./types";

export function estimateBodyFatPercentage({
  sex,
  waist,
  neck,
  height,
  hip,
  unit = "metric",
}: BodyFatInput): number {
  const w = unit === "imperial" ? waist : waist / 2.54;
  const n = unit === "imperial" ? neck : neck / 2.54;
  const h = unit === "imperial" ? height : height / 2.54;
  const hp = unit === "imperial" ? hip : hip ? hip / 2.54 : undefined;

  if (sex === "male") {
    return 86.01 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
  } else {
    if (!hp) throw new Error("Hip measurement is required for females.");
    return 163.205 * Math.log10(w + hp - n) - 97.684 * Math.log10(h) - 78.387;
  }
}

export function calculateLeanBodyMass({
  weight,
  bodyFatPercent,
  unit = "metric",
}: MassBreakdownInput): number {
  const weightKg = unit === "imperial" ? weight * 0.453592 : weight;
  return weightKg * (1 - bodyFatPercent / 100);
}

export function calculateFatMass({
  weight,
  bodyFatPercent,
  unit = "metric",
}: MassBreakdownInput): number {
  const weightKg = unit === "imperial" ? weight * 0.453592 : weight;
  return weightKg * (bodyFatPercent / 100);
}
