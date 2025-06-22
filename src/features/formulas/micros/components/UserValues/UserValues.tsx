import styles from "./UserValues.module.scss";
import type { MicrosInput } from "@/utils/coreFunctions/micros/types";

type UserValuesProps = {
  values: MicrosInput;
};

const UserValues = ({ values }: UserValuesProps) => {
  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>
          <strong>Age:</strong> {values.age}
        </span>
        <span>
          <strong>Sex:</strong> {values.sex}
        </span>
      </div>
      {(values.weightKg || values.heightCm || values.activityLevel) && (
        <div className={styles.row}>
          {values.weightKg && (
            <span>
              <strong>Weight:</strong> {values.weightKg} kg
            </span>
          )}
          {values.heightCm && (
            <span>
              <strong>Height:</strong> {values.heightCm} cm
            </span>
          )}
          {values.activityLevel && (
            <span>
              <strong>Activity:</strong> {values.activityLevel}
            </span>
          )}
          {values.leanBodyMassKg && (
            <span>
              <strong>LBM:</strong> {values.leanBodyMassKg} kg
            </span>
          )}
        </div>
      )}
      <div className={styles.row}>
        {values.pregnant && <span>Pregnant</span>}
        {values.lactating && <span>Lactating</span>}
        {values.goals && values.goals.length > 0 && (
          <span>
            <strong>Goal:</strong> {values.goals.join(", ")}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserValues;
