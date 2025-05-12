import { describe, it, expect } from "vitest";
import {
  calculateMifflinStJeor,
  calculateKatchMcArdle,
  calculateTDEE,
  calculateMacros,
  estimateBodyFatPercentage,
  calculateLeanBodyMass,
  calculateFatMass,
} from "../index";
import { getMicronutrientRecommendations } from "../micros";

describe("BMR Calculations", () => {
  it("calculates Mifflin-St Jeor (metric)", () => {
    const bmr = calculateMifflinStJeor({
      weight: 80,
      height: 180,
      age: 30,
      sex: "male",
      unit: "metric",
    });
    expect(Math.round(bmr)).toBe(1780);
  });

  it("calculates Mifflin-St Jeor (imperial)", () => {
    const bmr = calculateMifflinStJeor({
      weight: 176, // lb
      height: 70.8, // inches
      age: 30,
      sex: "male",
      unit: "imperial",
    });
    expect(Math.round(bmr)).toBeGreaterThan(1700);
  });

  it("calculates Katch-McArdle", () => {
    const bmr = calculateKatchMcArdle({
      leanBodyMass: 65,
      unit: "metric",
    });
    expect(Math.round(bmr)).toBeCloseTo(1774, -1);
  });
});

describe("TDEE Calculation", () => {
  it("calculates TDEE with moderate activity", () => {
    const tdee = calculateTDEE({
      bmr: 1800,
      activityLevel: "moderate",
    });
    expect(Math.round(tdee)).toBe(2790);
  });
});

describe("Macro Calculation", () => {
  it("returns macros (metric)", () => {
    const macros = calculateMacros({
      weight: 80,
      totalCalories: 2500,
      unit: "metric",
    });
    expect(macros.protein).toBeGreaterThan(100);
    expect(macros.carbs).toBeGreaterThan(200);
  });
});

describe("Body Composition", () => {
  it("estimates male body fat %", () => {
    const bf = estimateBodyFatPercentage({
      sex: "male",
      waist: 85,
      neck: 38,
      height: 180,
      unit: "metric",
    });
    expect(bf).toBeGreaterThan(10);
    expect(bf).toBeLessThan(25);
  });

  it("calculates lean body mass", () => {
    const lbm = calculateLeanBodyMass({
      weight: 80,
      bodyFatPercent: 20,
      unit: "metric",
    });
    expect(Math.round(lbm)).toBe(64);
  });

  it("calculates fat mass", () => {
    const fat = calculateFatMass({
      weight: 80,
      bodyFatPercent: 20,
      unit: "metric",
    });
    expect(Math.round(fat)).toBe(16);
  });
  it("returns macros (imperial + custom ratios)", () => {
    const macros = calculateMacros({
      weight: 176, // lb
      totalCalories: 2600,
      proteinPerKg: 2.2,
      fatPercent: 0.3,
      unit: "imperial",
    });
    expect(macros.protein).toBeGreaterThan(150);
    expect(macros.fats).toBeGreaterThan(70);
    expect(macros.carbs).toBeGreaterThan(200);
  });

  it("estimates female body fat %", () => {
    const bf = estimateBodyFatPercentage({
      sex: "female",
      waist: 75,
      neck: 34,
      hip: 95,
      height: 165,
      unit: "metric",
    });
    expect(bf).toBeGreaterThan(15);
    expect(bf).toBeLessThan(35);
  });

  it("estimates male body fat % (imperial)", () => {
    const bf = estimateBodyFatPercentage({
      sex: "male",
      waist: 34,
      neck: 15,
      height: 70,
      unit: "imperial",
    });
    expect(bf).toBeGreaterThan(10);
    expect(bf).toBeLessThan(25);
  });

  it("calculates lean body mass (imperial)", () => {
    const lbm = calculateLeanBodyMass({
      weight: 176,
      bodyFatPercent: 20,
      unit: "imperial",
    });
    expect(Math.round(lbm)).toBeGreaterThan(60);
  });

  it("calculates fat mass (imperial)", () => {
    const fat = calculateFatMass({
      weight: 176,
      bodyFatPercent: 20,
      unit: "imperial",
    });
    expect(Math.round(fat)).toBeGreaterThan(15);
  });
});
describe("Micronutrients", () => {
  it("returns RDA values for adult male", () => {
    const micros = getMicronutrientRecommendations({ age: 30, sex: "male" });
    expect(micros["Vitamin A"]).toBe("900 µg");
    expect(micros["Iron"]).toBe("8 mg");
  });

  it("returns increased Iron for pregnant female", () => {
    const micros = getMicronutrientRecommendations({
      age: 28,
      sex: "female",
      pregnant: true,
    });
    expect(micros["Iron"]).toBe("27 mg");
  });
});
