import { calculateMifflinStJeor } from "@/utils/coreFunctions/bmr";
import { MifflinStJeorInput } from "@/utils/coreFunctions/bmr/types";
import { useForm } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./MifflinStJeorForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import { useStore } from "@tanstack/react-form";
import Card from "@/components/ui/Card/Card";

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

  const unit = useStore(form.store, (state) => state.values.unit);
  const weightUnit = unit === "metric" ? "kg" : "lbs";
  const heightUnit = unit === "metric" ? "cm" : "in";

  return (
    <Card className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className={styles.form}
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

        <form.Field name="height">
          {(field) => (
            <InputField
              type="number"
              label="Height"
              placeholder="Enter height"
              value={field.state.value}
              unit={heightUnit}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

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

        <form.Field name="sex">
          {(field) => (
            <SelectField
              label="Sex"
              value={field.state.value}
              onChange={(val) =>
                field.handleChange(val as MifflinStJeorInput["sex"])
              }
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
          )}
        </form.Field>

        <form.Field name="unit">
          {(field) => (
            <SelectField
              label="Unit"
              value={field.state.value || "metric"}
              onChange={(val) =>
                field.handleChange(val as MifflinStJeorInput["unit"])
              }
              options={[
                { value: "metric", label: "Metric (kg, cm)" },
                { value: "imperial", label: "Imperial (lbs, inches)" },
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
    </Card>
  );
};

export default MifflinStJeorForm;
