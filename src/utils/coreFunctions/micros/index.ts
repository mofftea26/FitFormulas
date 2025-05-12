import { MicrosInput, MicronutrientRecommendations } from "./types";

export function getMicronutrientRecommendations({
  age,
  sex,
  pregnant = false,
  lactating = false,
  goals = ["maintenance"],
}: MicrosInput): MicronutrientRecommendations {
  const recs: MicronutrientRecommendations = {};
  const isMale = sex === "male";

  // 🔹 Base RDAs
  recs["Vitamin A"] = isMale ? "900 µg" : "700 µg";
  recs["Vitamin C"] = isMale ? "90 mg" : "75 mg";
  recs["Vitamin D"] = age >= 70 ? "800 IU" : "600 IU";
  recs["Calcium"] = age >= 50 ? "1200 mg" : "1000 mg";
  recs["Iron"] = pregnant
    ? "27 mg"
    : lactating
      ? "9 mg"
      : isMale
        ? "8 mg"
        : "18 mg";
  recs["Magnesium"] = isMale ? "400–420 mg" : "310–320 mg";
  recs["Zinc"] = isMale ? "11 mg" : "8 mg";
  recs["Vitamin E"] = "15 mg";
  recs["Vitamin K"] = "90–120 µg";

  // 🔹 Additions based on goals
  goals.forEach((goal) => {
    switch (goal) {
      case "cutting":
        recs["Chromium"] = "35 µg";
        recs["Carnitine"] = "Recommended (supports fat oxidation)";
        break;
      case "bulking":
        recs["Vitamin B6"] = "2 mg";
        recs["Vitamin B12"] = "2.4 µg";
        recs["Zinc"] = isMale ? "12 mg" : "9 mg";
        break;
      case "strength":
        recs["Creatine"] = "3–5 g";
        recs["Magnesium"] = isMale ? "420 mg" : "320 mg";
        break;
      case "endurance":
        recs["Iron"] = isMale ? "10 mg" : "20 mg";
        recs["B-complex"] = "Recommended";
        break;
      case "anti_inflammatory":
        recs["Omega-3"] = "1000–2000 mg EPA/DHA";
        recs["Curcumin"] = "500 mg with black pepper";
        break;
      case "energy":
        recs["Vitamin B12"] = "2.4 µg";
        recs["CoQ10"] = "100 mg";
        break;
      case "immunity":
        recs["Vitamin C"] = "200 mg";
        recs["Zinc"] = "12 mg";
        recs["Vitamin D"] = "1000 IU";
        break;
      case "focus":
        recs["Magnesium L-threonate"] = "Recommended";
        recs["Omega-3"] = "1000 mg DHA";
        recs["L-Tyrosine"] = "500 mg";
        break;
      case "hormone_balance":
        recs["Zinc"] = isMale ? "15 mg" : "12 mg";
        recs["Vitamin B6"] = "2–3 mg";
        break;
      case "bone_health":
        recs["Calcium"] = "1200 mg";
        recs["Vitamin K2"] = "90–120 µg";
        break;
      case "heart_health":
        recs["CoQ10"] = "100–200 mg";
        recs["Magnesium"] = "400 mg";
        break;
      case "skin_hair_nails":
        recs["Biotin"] = "30 µg";
        recs["Silica"] = "10 mg";
        recs["Collagen"] = "5–10 g";
        break;
      case "detox":
        recs["Milk Thistle"] = "150–300 mg";
        recs["NAC"] = "600 mg";
        break;
      case "longevity":
        recs["Resveratrol"] = "100–250 mg";
        recs["Vitamin D"] = "1000 IU";
        recs["NMN"] = "250–500 mg";
        break;
      case "high_performance":
        recs["Creatine"] = "5 g";
        recs["Beta-Alanine"] = "3–6 g";
        break;
      case "sleep_optimization":
        recs["Magnesium Glycinate"] = "200–400 mg";
        recs["Melatonin"] = "1–3 mg";
        break;
      case "mental_health":
        recs["Vitamin D"] = "1000 IU";
        recs["Omega-3"] = "1500 mg EPA/DHA";
        recs["Magnesium"] = "400 mg";
        break;
      case "stress_resilience":
        recs["Ashwagandha"] = "300–600 mg";
        recs["Rhodiola"] = "200–400 mg";
        break;
      case "thyroid_support":
        recs["Iodine"] = "150 µg";
        recs["Selenium"] = "55 µg";
        break;
      case "eye_health":
        recs["Lutein"] = "10 mg";
        recs["Zeaxanthin"] = "2 mg";
        break;
      case "fertility":
        recs["Folate"] = "400–600 µg";
        recs["Zinc"] = "15 mg";
        break;
      case "liver_support":
        recs["NAC"] = "600 mg";
        recs["Milk Thistle"] = "250 mg";
        break;
      case "gut_health":
        recs["Probiotics"] = "5–10 billion CFU";
        recs["L-Glutamine"] = "2–5 g";
        break;
      case "hydration":
        recs["Electrolytes"] = "Sodium, Potassium, Magnesium, Chloride";
        break;
      case "mood":
        recs["Vitamin D"] = "1000 IU";
        recs["5-HTP"] = "50–100 mg";
        break;
      case "circulation":
        recs["Beetroot Extract"] = "500 mg";
        recs["Garlic Extract"] = "600 mg";
        break;
      case "blood_sugar_control":
        recs["Chromium"] = "35 µg";
        recs["Berberine"] = "500 mg";
        break;
      case "joint_health":
        recs["Glucosamine"] = "1500 mg";
        recs["Chondroitin"] = "1200 mg";
        recs["Collagen"] = "5 g";
        break;
      case "recovery":
        recs["Magnesium"] = "400 mg";
        recs["Electrolytes"] = "Replenish post-workout";
        break;
      case "anti_aging":
        recs["Resveratrol"] = "250 mg";
        recs["NMN"] = "500 mg";
        recs["Vitamin E"] = "15 mg";
        break;
    }
  });

  return recs;
}
