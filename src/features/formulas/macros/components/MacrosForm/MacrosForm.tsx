import { calculateMacros } from "@/utils/coreFunctions/macros";
import { MacroInput } from "@/utils/coreFunctions/macros/types";
import { useForm, useStore } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./MacrosForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import type { MacroResults } from "../../MacrosPage";
import Card from "@/components/ui/Card/Card";

type MacrosFormProps = {
  onCalculate: (macros: MacroResults, values: MacroInput) => void;
  onClear: () => void;
};

const MacrosForm = ({ onCalculate, onClear }: MacrosFormProps) => {
  const form = useForm({
    defaultValues: {
      weight: 80,
      totalCalories: 2500,
      proteinPerKg: 2.0,
      fatPercent: 0.25,
      unit: "metric" as MacroInput["unit"],
    } satisfies MacroInput,
    onSubmit: async ({ value }) => {
      const macros = calculateMacros(value);
      onCalculate(macros, value);
    },
  });

  const unit = useStore(form.store, (state) => state.values.unit);
  const weightUnit = unit === "metric" ? "kg" : "lbs";

  return (
    <Card className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className={clsx(styles.form)}
      >
        <form.Field name="weight">
          {(field) => (
            <InputField
              type="number"
              label="Weight"
              placeholder="Enter weight"
              value={field.state.value}
              unit={weightUnit}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="totalCalories">
          {(field) => (
            <InputField
              type="number"
              label="Total Calories"
              placeholder="Enter calories"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="proteinPerKg">
          {(field) => (
            <InputField
              type="number"
              label="Protein per kg"
              placeholder="g/kg"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="fatPercent">
          {(field) => (
            <InputField
              type="number"
              label="Fat % of calories"
              placeholder="0-1"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="unit">
          {(field) => (
            <SelectField
              label="Unit"
              value={field.state.value || "metric"}
              onChange={(val) => field.handleChange(val as MacroInput["unit"])}
              options={[
                { value: "metric", label: "Metric (kg)" },
                { value: "imperial", label: "Imperial (lbs)" },
              ]}
            />
          )}
        </form.Field>

        <button type="submit" className={clsx(styles.btnPrimary)}>
          Calculate Macros
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

export default MacrosForm;
