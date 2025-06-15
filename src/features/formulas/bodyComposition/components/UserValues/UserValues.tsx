import styles from "./UserValues.module.scss";
import type { BodyFatInput } from "@/utils/coreFunctions/body-composition/types";

type BodyCompositionInput = BodyFatInput & { weight: number };

type UserValuesProps = {
  values: BodyCompositionInput;
};

const UserValues = ({ values }: UserValuesProps) => {
  const unit = values.unit === "metric" ? { wt: "kg", len: "cm" } : { wt: "lbs", len: "in" };
  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>
          <strong>Weight:</strong> {values.weight} {unit.wt}
        </span>
        <span>
          <strong>Height:</strong> {values.height} {unit.len}
        </span>
      </div>
      <div className={styles.row}>
        <span>
          <strong>Waist:</strong> {values.waist} {unit.len}
        </span>
        <span>
          <strong>Neck:</strong> {values.neck} {unit.len}
        </span>
      </div>
      {values.sex === "female" && (
        <div className={styles.row}>
          <span>
            <strong>Hip:</strong> {values.hip} {unit.len}
          </span>
        </div>
      )}
      <div className={styles.row}>
        <span>
          <strong>Sex:</strong> {values.sex}
        </span>
      </div>
    </div>
  );
};

export default UserValues;
