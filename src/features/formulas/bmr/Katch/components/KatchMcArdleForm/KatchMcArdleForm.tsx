import { calculateKatchMcArdle } from "@/utils/coreFunctions/bmr";
import { KatchMcArdleInput } from "@/utils/coreFunctions/bmr/types";
import { useForm } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./KatchMcArdleForm.module.scss";

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
          <input
            type="number"
            placeholder="Lean Body Mass"
            required
            value={field.state.value}
            onChange={(e) => field.handleChange(Number(e.target.value))}
            className={clsx(styles.input)}
          />
        )}
      </form.Field>

      <form.Field name="unit">
        {(field) => (
          <select
            required
            value={field.state.value}
            onChange={(e) =>
              field.handleChange(e.target.value as "metric" | "imperial")
            }
            className={clsx(styles.select)}
          >
            <option value="metric">Metric (kg)</option>
            <option value="imperial">Imperial (lbs)</option>
          </select>
        )}
      </form.Field>

      <button type="submit" className={clsx(styles.btnPrimary)}>
        Calculate BMR
      </button>
    </form>
  );
};

export default KatchMcArdleForm;
