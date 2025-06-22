import { activityLevelMap } from "./types";

export function calculateTDEE({
  bmr,
  activityLevel,
}: {
  bmr: number;
  activityLevel: keyof typeof activityLevelMap;
}): number {
  const multiplier = activityLevelMap[activityLevel].multiplier;
  return bmr * multiplier;
}
