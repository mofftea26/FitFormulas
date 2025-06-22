export interface MacroInput {
  weight: number; // in kg or lbs
  totalCalories: number; // daily target
  proteinPerKg?: number; // default: 2.0g/kg
  fatPercent?: number; // default: 25% of total cals
  unit?: "metric" | "imperial";
}
