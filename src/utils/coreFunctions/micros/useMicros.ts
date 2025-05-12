import { useMemo } from "react";
import { getMicronutrientRecommendations } from "./index";
import { MicrosInput } from "./types";
import { compareMicronutrientPlans } from "./utils";

/**
 * Hook to compute merged and separated micronutrient plans
 */
export function useMicronutrients(users: MicrosInput[]) {
  const plans = useMemo(() => {
    return users.map(getMicronutrientRecommendations);
  }, [users]);

  const { shared, unique } = useMemo(() => {
    return compareMicronutrientPlans(plans);
  }, [plans]);

  return {
    plans, // full list of individual plans
    shared, // common nutrients across all
    unique, // per-user unique nutrients
  };
}
