export interface MifflinStJeorInput {
  weight: number;
  height: number;
  age: number;
  sex: "male" | "female";
  unit?: "metric" | "imperial";
}

export interface KatchMcArdleInput {
  weight: number;
  bodyFatPercentage: number;
  unit?: "metric" | "imperial";
}

export interface HarrisBenedictInput {
  weight: number;
  height: number;
  age: number;
  sex: "male" | "female";
  unit?: "metric" | "imperial";
}
