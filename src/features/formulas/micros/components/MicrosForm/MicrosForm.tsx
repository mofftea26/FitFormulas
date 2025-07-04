import { useForm } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./MicrosForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import Card from "@/components/ui/Card/Card";
import type { MicrosInput, HealthGoal, MicronutrientRecommendations } from "@/utils/coreFunctions/micros/types";
import { getMicronutrientRecommendations } from "@/utils/coreFunctions/micros";

type MicrosFormValues = MicrosInput & { goal: HealthGoal };

type MicrosFormProps = {
  onCalculate: (
    recs: MicronutrientRecommendations,
    values: MicrosInput
  ) => void;
  onClear: () => void;
};

const goalOptions: { value: HealthGoal; label: string }[] = [
  { value: "maintenance", label: "Maintenance" },
  { value: "cutting", label: "Cutting" },
  { value: "bulking", label: "Bulking" },
  { value: "strength", label: "Strength" },
  { value: "endurance", label: "Endurance" },
  { value: "bodybuilding", label: "Bodybuilding" },
  { value: "powerlifting", label: "Powerlifting" },
  { value: "crossfit", label: "CrossFit" },
  { value: "general_fitness", label: "General Fitness" },
];

const MicrosForm = ({ onCalculate, onClear }: MicrosFormProps) => {
  const form = useForm({
    defaultValues: {
      age: 30,
      sex: "male" as MicrosInput["sex"],
      weightKg: 70,
      heightCm: 170,
      leanBodyMassKg: 56,
      activityLevel: "sedentary" as NonNullable<MicrosInput["activityLevel"]>,
      pregnant: false,
      lactating: false,
      goal: "maintenance" as HealthGoal,
    } satisfies MicrosFormValues,
    onSubmit: async ({ value }) => {
      const { goal, ...rest } = value;
      const input: MicrosInput = { ...rest, goals: [goal] };
      const recs = getMicronutrientRecommendations(input);
      onCalculate(recs, input);
    },
  });

  return (
    <Card className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className={clsx(styles.form)}
      >
        <form.Field name="age">
          {(field) => (
            <InputField
              type="number"
              label="Age"
              placeholder="Enter age"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="weightKg">
          {(field) => (
            <InputField
              type="number"
              label="Weight (kg)"
              placeholder="Enter weight"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="heightCm">
          {(field) => (
            <InputField
              type="number"
              label="Height (cm)"
              placeholder="Enter height"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="leanBodyMassKg">
          {(field) => (
            <InputField
              type="number"
              label="Lean Body Mass (kg)"
              placeholder="Enter LBM"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="activityLevel">
          {(field) => (
            <SelectField
              label="Activity Level"
              value={field.state.value}
              onChange={(val) =>
                field.handleChange(val as NonNullable<MicrosInput["activityLevel"]>)
              }
              options={[
                { value: "sedentary", label: "Sedentary" },
                { value: "active", label: "Active" },
              ]}
            />
          )}
        </form.Field>

        <form.Field name="sex">
          {(field) => (
            <SelectField
              label="Sex"
              value={field.state.value}
              onChange={(val) => field.handleChange(val as MicrosInput["sex"])}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
          )}
        </form.Field>

        <form.Field name="goal">
          {(field) => (
            <SelectField
              label="Goal"
              value={field.state.value}
              onChange={(val) => field.handleChange(val as HealthGoal)}
              options={goalOptions}
            />
          )}
        </form.Field>

        <form.Field name="pregnant">
          {(field) => (
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={field.state.value}
                onChange={(e) => field.handleChange(e.target.checked)}
              />
              Pregnant
            </label>
          )}
        </form.Field>

        <form.Field name="lactating">
          {(field) => (
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={field.state.value}
                onChange={(e) => field.handleChange(e.target.checked)}
              />
              Lactating
            </label>
          )}
        </form.Field>

        <button type="submit" className={clsx(styles.btnPrimary)}>
          Get Recommendations
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            form.reset();
            onClear();
          }}
          className={clsx(styles.btnOutline)}
        >
          Clear
        </button>
      </form>
    </Card>
  );
};

export default MicrosForm;
