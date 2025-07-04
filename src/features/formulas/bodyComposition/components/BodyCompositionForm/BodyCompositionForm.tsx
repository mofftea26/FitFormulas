import { useForm, useStore } from "@tanstack/react-form";
import clsx from "clsx";
import styles from "./BodyCompositionForm.module.scss";
import {
  BodyFatInput,
  estimateBodyFatPercentage,
  calculateLeanBodyMass,
  calculateFatMass,
} from "@/utils/coreFunctions";
import InputField from "@/components/ui/Input/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import Card from "@/components/ui/Card/Card";

type BodyCompositionFormProps = {
  onCalculate: (
    bodyFat: number,
    leanMass: number,
    fatMass: number,
    values: BodyFatInput & { weight: number }
  ) => void;
  onClear: () => void;
};

const BodyCompositionForm = ({
  onCalculate,
  onClear,
}: BodyCompositionFormProps) => {
  const form = useForm({
    defaultValues: {
      sex: "male" as BodyFatInput["sex"],
      waist: 80,
      neck: 40,
      height: 180,
      hip: 90,
      unit: "metric" as BodyFatInput["unit"],
      weight: 80,
    },
    onSubmit: async ({ value }) => {
      const { sex, ...rest } = value;
      const adjustedValues = {
        ...rest,
        sex,
        hip: sex === "male" ? undefined : value.hip,
      };

      const bodyFat = estimateBodyFatPercentage(adjustedValues);
      const leanMass = calculateLeanBodyMass({
        weight: adjustedValues.weight,
        bodyFatPercent: bodyFat,
        unit: adjustedValues.unit,
      });
      const fatMass = calculateFatMass({
        weight: adjustedValues.weight,
        bodyFatPercent: bodyFat,
        unit: adjustedValues.unit,
      });
      onCalculate(bodyFat, leanMass, fatMass, adjustedValues);
    },
  });
  const unit = useStore(form.store, (state) => state.values.unit);
  const sex = useStore(form.store, (state) => state.values.sex);
  const weightUnit = unit === "metric" ? "kg" : "lbs";
  const heightUnit = unit === "metric" ? "cm" : "in";
  const waistUnit = unit === "metric" ? "cm" : "in";
  const neckUnit = unit === "metric" ? "cm" : "in";
  const hipUnit = unit === "metric" ? "cm" : "in";

  return (
    <Card className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className={clsx(styles.form)}
      >
        <form.Field name="sex">
          {(field) => (
            <SelectField
              className={styles.inputField}
              label="Sex"
              value={field.state.value}
              onChange={(val) => {
                field.handleChange(val);
                if (val === "male") {
                  form.setFieldValue("hip", 0);
                }
              }}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
          )}
        </form.Field>

        <form.Field name="waist">
          {(field) => (
            <InputField
              type="number"
              label="Waist"
              placeholder="Enter waist"
              value={field.state.value}
              unit={waistUnit}
              className={styles.inputField}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="neck">
          {(field) => (
            <InputField
              type="number"
              label="Neck"
              placeholder="Enter neck"
              value={field.state.value}
              unit={neckUnit}
              className={styles.inputField}
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
              className={styles.inputField}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>
        {sex === "female" && (
          <form.Field name="hip">
            {(field) => (
              <InputField
                type="number"
                label="Hip"
                placeholder="Enter hip"
                value={field.state.value}
                unit={hipUnit}
                className={styles.inputField}
                onChange={(val) => field.handleChange(Number(val))}
              />
            )}
          </form.Field>
        )}

        <form.Field name="weight">
          {(field) => (
            <InputField
              type="number"
              label="Weight"
              placeholder="Enter weight"
              value={field.state.value}
              unit={weightUnit}
              className={styles.inputField}
              onChange={(val) => field.handleChange(Number(val))}
            />
          )}
        </form.Field>

        <form.Field name="unit">
          {(field) => (
            <SelectField
              label="Unit"
              value={field.state.value || "metric"}
              onChange={(val) => field.handleChange(val)}
              options={[
                { value: "metric", label: "Metric" },
                { value: "imperial", label: "Imperial" },
              ]}
            />
          )}
        </form.Field>

        <button type="submit" className={clsx(styles.btnPrimary)}>
          Calculate Composition
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

export default BodyCompositionForm;
