import styles from "./UserValues.module.scss";
import type { KatchMcArdleInput } from "@/utils/coreFunctions/bmr/types";

type UserValuesProps = {
  values: KatchMcArdleInput;
};

const UserValues = ({ values }: UserValuesProps) => {
  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>
          <strong>Weight:</strong> {values.weight}{" "}
          {values.unit === "metric" ? "kg" : "lbs"}
        </span>
      </div>
      <div className={styles.row}>
        <span>
          <strong>Body Fat %:</strong> {values.bodyFatPercentage}%
        </span>
      </div>
    </div>
  );
};

export default UserValues;
