import { TDEEInput } from "./types";

export function calculateTDEE({ bmr, activityLevel }: TDEEInput): number {
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };

  return bmr * multipliers[activityLevel];
}
