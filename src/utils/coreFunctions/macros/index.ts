import { MacroInput } from "./types";

export function calculateMacros({
  weight,
  totalCalories,
  proteinPerKg = 2.0,
  fatPercent = 0.25,
  unit = "metric",
}: MacroInput) {
  const weightKg = unit === "imperial" ? weight * 0.453592 : weight;

  const proteinGrams = weightKg * proteinPerKg;
  const fatGrams = (totalCalories * fatPercent) / 9;

  const remainingCalories = totalCalories - (proteinGrams * 4 + fatGrams * 9);
  const carbGrams = remainingCalories / 4;

  return {
    protein: Math.round(proteinGrams),
    fats: Math.round(fatGrams),
    carbs: Math.round(carbGrams),
  };
}
