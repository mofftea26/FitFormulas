import { calculateTDEE } from "@/utils/coreFunctions/tdee";
import { TDEEInput } from "@/utils/coreFunctions/tdee/types";
import { useForm } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./TDEEForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import Card from "@/components/ui/Card/Card";

type TDEEFormProps = {
  onCalculate: (tdee: number, values: TDEEInput) => void;
  onClear: () => void;
};

const TDEEForm = ({ onCalculate, onClear }: TDEEFormProps) => {
  const form = useForm({
    defaultValues: {
      bmr: 1800,
      activityLevel: "moderate" as TDEEInput["activityLevel"],
    } satisfies TDEEInput,
    onSubmit: async ({ value }) => {
      const tdee = calculateTDEE(value);
      onCalculate(tdee, value);
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
        <form.Field name="bmr">
          {(field) => (
            <InputField
              type="number"
              label="BMR"
              placeholder="Enter BMR"
              value={field.state.value}
              onChange={(val) => field.handleChange(Number(val))}
              unit="kcal"
            />
          )}
        </form.Field>

        <form.Field name="activityLevel">
          {(field) => (
            <SelectField
              label="Activity Level"
              value={field.state.value}
              onChange={(val) =>
                field.handleChange(val as TDEEInput["activityLevel"])
              }
              options={[
                { value: "sedentary", label: "Sedentary" },
                { value: "light", label: "Light" },
                { value: "moderate", label: "Moderate" },
                { value: "active", label: "Active" },
                { value: "very_active", label: "Very Active" },
              ]}
            />
          )}
        </form.Field>

        <button type="submit" className={clsx(styles.btnPrimary)}>
          Calculate TDEE
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

export default TDEEForm;
