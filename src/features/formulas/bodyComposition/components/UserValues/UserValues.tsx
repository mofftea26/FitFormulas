import styles from "./UserValues.module.scss";
import type { BodyFatInput } from "@/utils/coreFunctions/body-composition/types";

type BodyCompositionInput = BodyFatInput & { weight: number };

type UserValuesProps = {
  values: BodyCompositionInput;
};

const UserValues = ({ values }: UserValuesProps) => {
  const isMetric = values.unit === "metric";
  const unit = {
    weight: isMetric ? "kg" : "lbs",
    length: isMetric ? "cm" : "in",
  };

  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>
          <strong>Sex:</strong> {values.sex}
        </span>
      </div>
      <div className={styles.row}>
        <span>
          <strong>Weight:</strong> {values.weight} {unit.weight}
        </span>
        <span>
          <strong>Height:</strong> {values.height} {unit.length}
        </span>
      </div>
      <div className={styles.row}>
        <span>
          <strong>Waist:</strong> {values.waist} {unit.length}
        </span>
        <span>
          <strong>Neck:</strong> {values.neck} {unit.length}
        </span>
      </div>
      {values.sex === "female" && values.hip !== undefined && (
        <div className={styles.row}>
          <span>
            <strong>Hip:</strong> {values.hip} {unit.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserValues;
