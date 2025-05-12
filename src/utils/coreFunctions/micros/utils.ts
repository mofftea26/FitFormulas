import { MicronutrientRecommendations } from "./types";

/**
 * Merges multiple recommendation sets and returns:
 * - shared (common across all)
 * - unique (specific to each plan)
 */
export function compareMicronutrientPlans(
  plans: MicronutrientRecommendations[]
): {
  shared: MicronutrientRecommendations;
  unique: MicronutrientRecommendations[];
} {
  const shared: MicronutrientRecommendations = {};
  const unique: MicronutrientRecommendations[] = [];

  const allKeys = plans.flatMap((plan) => Object.keys(plan));
  const freqMap: Record<string, number> = {};

  allKeys.forEach((key) => {
    freqMap[key] = (freqMap[key] || 0) + 1;
  });

  const total = plans.length;

  Object.keys(freqMap).forEach((key) => {
    if (freqMap[key] === total) {
      // Appears in every plan
      shared[key] = plans[0][key];
    }
  });

  for (const plan of plans) {
    const u: MicronutrientRecommendations = {};
    for (const [key, value] of Object.entries(plan)) {
      if (!shared[key]) {
        u[key] = value;
      }
    }
    unique.push(u);
  }

  return { shared, unique };
}
