import { calculateTDEE } from "@/utils/coreFunctions/tdee";
import { activityLevelMap } from "@/utils/coreFunctions/tdee/types";
import { useForm } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./TDEEForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import Card from "@/components/ui/Card/Card";

type TDEEFormProps = {
  onCalculate: (
    tdee: number,
    values: { bmr: number; activityLevel: keyof typeof activityLevelMap }
  ) => void;
  onClear: () => void;
};

const TDEEForm = ({ onCalculate, onClear }: TDEEFormProps) => {
  const form = useForm({
    defaultValues: {
      bmr: 1800,
      activityLevel: "moderate" as keyof typeof activityLevelMap,
    },
    onSubmit: async ({ value }) => {
      const tdee = calculateTDEE(value);
      onCalculate(tdee, value);
    },
  });

  const activityOptions = Object.entries(activityLevelMap).map(
    ([value, data]) => ({
      value,
      label: `${data.label} – ${data.description}`,
    })
  );
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
                field.handleChange(val as keyof typeof activityLevelMap)
              }
              options={activityOptions}
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
