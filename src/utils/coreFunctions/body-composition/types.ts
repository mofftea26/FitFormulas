export interface BodyFatInput {
  sex: "male" | "female";
  waist: number;
  neck: number;
  height: number;
  hip?: number;
  unit?: "metric" | "imperial";
}

export interface MassBreakdownInput {
  weight: number;
  bodyFatPercent: number;
  unit?: "metric" | "imperial";
}
