import { MacroInput } from "./types";
import { truncateTo2Digits } from "@/utils/helpers/helperFunctions";

export function calculateMacros({
  weight,
  totalCalories,
  proteinPerKg = 2.0,
  fatPercent = 0.25,
  unit = "metric",
}: MacroInput) {
  const weightKg = unit === "imperial" ? weight * 0.453592 : weight;

  const proteinGrams = weightKg * proteinPerKg;
  const proteinCalories = proteinGrams * 4;

  const fatCalories = totalCalories * fatPercent;
  const fatGrams = fatCalories / 9;

  const remainingCalories = totalCalories - (proteinCalories + fatCalories);

  if (remainingCalories < 0) {
    throw new Error(
      "Total calories are too low for the given protein and fat configuration."
    );
  }

  const carbGrams = remainingCalories / 4;

  return {
    protein: { grams: truncateTo2Digits(proteinGrams), kcal: proteinCalories },
    fats: { grams: truncateTo2Digits(fatGrams), kcal: fatCalories },
    carbs: { grams: truncateTo2Digits(carbGrams), kcal: remainingCalories },
  };
}
