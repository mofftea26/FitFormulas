import { useForm } from "@tanstack/react-form";
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

type BodyCompositionFormProps = {
  onEstimate: (bodyFat: number, leanMass: number, fatMass: number) => void;
};

const BodyCompositionForm = ({ onEstimate }: BodyCompositionFormProps) => {
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
      const bodyFat = estimateBodyFatPercentage(value);
      const leanMass = calculateLeanBodyMass({
        weight: value.weight,
        bodyFatPercent: bodyFat,
        unit: value.unit,
      });
      const fatMass = calculateFatMass({
        weight: value.weight,
        bodyFatPercent: bodyFat,
        unit: value.unit,
      });
      onEstimate(bodyFat, leanMass, fatMass);
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
      <form.Field name="sex">
        {(field) => (
          <SelectField
            label="Sex"
            value={field.state.value}
            onChange={(val) => field.handleChange(val)}
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
            onChange={(val) => field.handleChange(Number(val))}
          />
        )}
      </form.Field>

      <form.Field name="hip">
        {(field) => (
          <InputField
            type="number"
            label="Hip"
            placeholder="Enter hip"
            value={field.state.value}
            onChange={(val) => field.handleChange(Number(val))}
            disabled={form.getFieldValue("sex") === "male"}
          />
        )}
      </form.Field>

      <form.Field name="weight">
        {(field) => (
          <InputField
            type="number"
            label="Weight"
            placeholder="Enter weight"
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
    </form>
  );
};

export default BodyCompositionForm;
