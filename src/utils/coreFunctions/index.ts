// BMR formulas
export {
  calculateMifflinStJeor,
  calculateKatchMcArdle,
  calculateHarrisBenedict,
} from "./bmr/index";
export type {
  MifflinStJeorInput,
  KatchMcArdleInput,
  HarrisBenedictInput,
} from "./bmr/types";

// TDEE formulas
export { calculateTDEE } from "./tdee/index";
export type { TDEEInput } from "./tdee/types";

// Macronutrient calculations
export { calculateMacros } from "./macros/index";
export type { MacroInput } from "./macros/types";

// Micronutrient recommendations
export { getMicronutrientRecommendations } from "./micros";
export type {
  MicrosInput,
  MicronutrientRecommendations,
  HealthGoal,
} from "./micros/types";

// Body composition estimates
export {
  estimateBodyFatPercentage,
  calculateLeanBodyMass,
  calculateFatMass,
} from "./body-composition/index";
export type {
  BodyFatInput,
  MassBreakdownInput,
} from "./body-composition/types";
