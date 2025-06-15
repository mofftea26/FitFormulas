import { calculateKatchMcArdle } from "@/utils/coreFunctions/bmr";
import { KatchMcArdleInput } from "@/utils/coreFunctions/bmr/types";
import { useForm, useStore } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./KatchMcArdleForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";

type KatchMcArdleFormProps = {
  setBmr: (bmr: number) => void;
};

const KatchMcArdleForm = ({ setBmr }: KatchMcArdleFormProps) => {
  const form = useForm({
    defaultValues: {
      leanBodyMass: 65,
      unit: "metric" as KatchMcArdleInput["unit"],
    } satisfies KatchMcArdleInput,
    onSubmit: async ({ value }) => {
      const bmr = calculateKatchMcArdle(value);
      setBmr(bmr);
    },
  });
  const unit = useStore(form.store, (state) => state.values.unit);
  const weightUnit = unit === "metric" ? "kg" : "lbs";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
      className={clsx(styles.form)}
    >
      <form.Field name="leanBodyMass">
        {(field) => (
          <InputField
            unit={weightUnit}
            type="number"
            label="Lean Body Mass"
            placeholder="Enter lean body mass"
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
          setBmr(0);
        }}
        className={clsx(styles.btnOutline)}
      >
        Clear
      </button>
    </form>
  );
};

export default KatchMcArdleForm;
