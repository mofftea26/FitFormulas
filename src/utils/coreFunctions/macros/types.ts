export interface MacroInput {
  weight: number; // kg or lb
  totalCalories: number;
  proteinPerKg?: number; // default: 2.0 g/kg
  fatPercent?: number; // default: 0.25
  unit?: "metric" | "imperial";
}
