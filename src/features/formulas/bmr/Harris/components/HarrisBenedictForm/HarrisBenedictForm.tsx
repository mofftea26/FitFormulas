import { calculateHarrisBenedict } from "@/utils/coreFunctions/bmr";
import { HarrisBenedictInput } from "@/utils/coreFunctions/bmr/types";
import { useForm } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./HarrisBenedictForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import { useStore } from "@tanstack/react-form";
import Card from "@/components/ui/Card/Card";

type HarrisBenedictFormProps = {
  onCalculate: (bmr: number, values: HarrisBenedictInput) => void;
  onClear: () => void;
};

const HarrisBenedictForm = ({
  onCalculate,
  onClear,
}: HarrisBenedictFormProps) => {
  const form = useForm({
    defaultValues: {
      weight: 0,
      height: 0,
      age: 0,
      sex: "" as HarrisBenedictInput["sex"],
      unit: "" as HarrisBenedictInput["unit"],
    } satisfies HarrisBenedictInput,
    onSubmit: async ({ value }) => {
      const bmr = calculateHarrisBenedict(value);
      onCalculate(bmr, value);
    },
  });

  const unit = useStore(form.store, (state) => state.values.unit);
  const weightUnit = unit === "metric" ? "kg" : "lbs";
  const heightUnit = unit === "metric" ? "cm" : "in";

  const onClearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    form.reset();
    onClear();
  };

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
                field.handleChange(val as HarrisBenedictInput["sex"])
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
                field.handleChange(val as HarrisBenedictInput["unit"])
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
        <button onClick={onClearForm} className={clsx(styles.btnOutline)}>
          Clear
        </button>
      </form>
    </Card>
  );
};

export default HarrisBenedictForm;
