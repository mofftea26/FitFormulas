import styles from "./UserValues.module.scss";
import type { MacroInput } from "@/utils/coreFunctions/macros/types";

type UserValuesProps = {
  values: MacroInput;
};

const UserValues = ({ values }: UserValuesProps) => {
  const weightUnit = values.unit === "metric" ? "kg" : "lbs";

  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>
          <strong>Weight:</strong> {values.weight} {weightUnit}
        </span>
        <span>
          <strong>Total Calories:</strong> {values.totalCalories} kcal
        </span>
      </div>
      <div className={styles.row}>
        <span>
          <strong>Protein per kg:</strong> {values.proteinPerKg} g/kg
        </span>
        <span>
          <strong>Fat %:</strong>
          {values.fatPercent ? (values.fatPercent * 100).toFixed(0) : "0"}%
        </span>
      </div>
    </div>
  );
};

export default UserValues;
