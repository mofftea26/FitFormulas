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
          <strong>Lean Body Mass:</strong> {values.leanBodyMass} {values.unit === "metric" ? "kg" : "lbs"}
        </span>
      </div>
    </div>
  );
};

export default UserValues;
