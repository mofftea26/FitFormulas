export const activityLevelMap = {
  sedentary: {
    label: "Sedentary",
    multiplier: 1.2,
    description:
      "Little to no exercise, desk job, minimal movement during the day.",
  },
  light: {
    label: "Lightly Active",
    multiplier: 1.375,
    description:
      "Light exercise 1–3 days/week (e.g., walking, short workouts).",
  },
  moderate: {
    label: "Moderately Active",
    multiplier: 1.55,
    description:
      "Moderate exercise 3–5 days/week (e.g., gym workouts, sports).",
  },
  active: {
    label: "Very Active",
    multiplier: 1.725,
    description: "Hard exercise 6–7 days/week or physically demanding job.",
  },
  very_active: {
    label: "Extremely Active",
    multiplier: 1.9,
    description: "Athletes, manual laborers, or two-a-day training sessions.",
  },
} as const;
