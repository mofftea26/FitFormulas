import { calculateKatchMcArdle } from "@/utils/coreFunctions/bmr";
import { KatchMcArdleInput } from "@/utils/coreFunctions/bmr/types";
import { useForm, useStore } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./KatchMcArdleForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import Card from "@/components/ui/Card/Card";

type KatchMcArdleFormProps = {
  onCalculate: (bmr: number, values: KatchMcArdleInput) => void;
  onClear: () => void;
};

const KatchMcArdleForm = ({ onCalculate, onClear }: KatchMcArdleFormProps) => {
  const form = useForm({
    defaultValues: {
      weight: 70,
      bodyFatPercentage: 15,
      unit: "metric" as KatchMcArdleInput["unit"],
    } satisfies KatchMcArdleInput,
    onSubmit: async ({ value }) => {
      const bmr = calculateKatchMcArdle(value);
      onCalculate(bmr, value);
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
              unit={weightUnit}
              type="number"
              label="Weight"
              placeholder="Enter weight"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="bodyFatPercentage">
          {(field) => (
            <InputField
              unit="%"
              type="number"
              label="Body Fat %"
              placeholder="Enter body fat percentage"
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
              onChange={(val) =>
                field.handleChange(val as KatchMcArdleInput["unit"])
              }
              options={[
                { value: "metric", label: "Metric (kg)" },
                { value: "imperial", label: "Imperial (lbs)" },
              ]}
            />
          )}
        </form.Field>

        <button type="submit" className={clsx(styles.btnPrimary)}>
          Calculate BMR
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

export default KatchMcArdleForm;
