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
          <strong>Calories:</strong> {values.totalCalories} kcal
        </span>
      </div>
      <div className={styles.row}>
        <span>
          <strong>Protein/kg:</strong> {values.proteinPerKg}
        </span>
        <span>
          <strong>Fat %:</strong> {values.fatPercent}
        </span>
      </div>
    </div>
  );
};

export default UserValues;
