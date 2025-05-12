export interface MifflinStJeorInput {
  weight: number; // kg or lb
  height: number; // cm or inches
  age: number;
  sex: "male" | "female";
  unit?: "metric" | "imperial";
}

export interface KatchMcArdleInput {
  leanBodyMass: number; // kg or lb
  unit?: "metric" | "imperial";
}
