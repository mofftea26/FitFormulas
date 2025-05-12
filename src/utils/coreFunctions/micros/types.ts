export type HealthGoal =
  | "maintenance"
  | "cutting"
  | "bulking"
  | "strength"
  | "endurance"
  | "energy"
  | "immunity"
  | "focus"
  | "hormone_balance"
  | "bone_health"
  | "heart_health"
  | "skin_hair_nails"
  | "detox"
  | "longevity"
  | "anti_inflammatory"
  | "high_performance"
  | "sleep_optimization"
  | "mental_health"
  | "stress_resilience"
  | "thyroid_support"
  | "eye_health"
  | "fertility"
  | "liver_support"
  | "gut_health"
  | "hydration"
  | "mood"
  | "circulation"
  | "blood_sugar_control"
  | "joint_health"
  | "recovery"
  | "anti_aging";

export interface MicrosInput {
  age: number;
  sex: "male" | "female";
  pregnant?: boolean;
  lactating?: boolean;
  goals?: HealthGoal[];
}

export interface MicronutrientRecommendations {
  [nutrient: string]: string;
}
