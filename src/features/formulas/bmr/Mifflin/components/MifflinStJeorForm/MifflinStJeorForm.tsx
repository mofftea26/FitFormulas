import { calculateMifflinStJeor } from "@/utils/coreFunctions/bmr";
import { MifflinStJeorInput } from "@/utils/coreFunctions/bmr/types";
import { useForm } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./MifflinStJeorForm.module.scss";

type MifflinStJeorFormProps = {
  setBmr: (bmr: number) => void;
};

const MifflinStJeorForm = ({ setBmr }: MifflinStJeorFormProps) => {
  const form = useForm({
    defaultValues: {
      weight: 80,
      height: 180,
      age: 30,
      sex: "male" as MifflinStJeorInput["sex"],
      unit: "metric" as MifflinStJeorInput["unit"],
    } satisfies MifflinStJeorInput,
    onSubmit: async ({ value }) => {
      const bmr = calculateMifflinStJeor(value);
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
      <form.Field name="weight">
        {(field) => (
          <input
            type="number"
            placeholder="Weight"
            required
            value={field.state.value}
            onChange={(e) => field.handleChange(Number(e.target.value))}
            className={clsx(styles.input)}
          />
        )}
      </form.Field>

      <form.Field name="height">
        {(field) => (
          <input
            type="number"
            placeholder="Height"
            required
            value={field.state.value}
            onChange={(e) => field.handleChange(Number(e.target.value))}
            className={clsx(styles.input)}
          />
        )}
      </form.Field>

      <form.Field name="age">
        {(field) => (
          <input
            type="number"
            placeholder="Age"
            required
            value={field.state.value}
            onChange={(e) => field.handleChange(Number(e.target.value))}
            className={clsx(styles.input)}
          />
        )}
      </form.Field>

      <form.Field name="sex">
        {(field) => (
          <select
            required
            value={field.state.value}
            onChange={(e) =>
              field.handleChange(e.target.value as MifflinStJeorInput["sex"])
            }
            className={clsx(styles.select)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, inches)</option>
          </select>
        )}
      </form.Field>

      <button type="submit" className={clsx(styles.btnPrimary)}>
        Calculate BMR
      </button>
    </form>
  );
};

export default MifflinStJeorForm;
