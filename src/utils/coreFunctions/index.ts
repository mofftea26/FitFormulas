// BMR formulas
export { calculateMifflinStJeor, calculateKatchMcArdle } from "./bmr/index";
export type { MifflinStJeorInput, KatchMcArdleInput } from "./bmr/types";

// TDEE formulas
export { calculateTDEE } from "./tdee/index";
export type { TDEEInput } from "./tdee/types";

// Macronutrient calculations
export { calculateMacros } from "./macros/index";
export type { MacroInput } from "./macros/types";

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
