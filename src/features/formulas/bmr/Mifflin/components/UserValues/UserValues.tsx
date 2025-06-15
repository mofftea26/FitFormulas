import styles from "./UserValues.module.scss";

import type { MifflinStJeorInput } from "@/utils/coreFunctions/bmr/types";

type UserValuesProps = {
  values: MifflinStJeorInput;
};

const UserValues = ({ values }: UserValuesProps) => {
  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>
          <strong>Weight:</strong> {values.weight}{" "}
          {values.unit === "metric" ? "kg" : "lbs"}
        </span>
        <span>
          <strong>Height:</strong> {values.height}{" "}
          {values.unit === "metric" ? "cm" : "in"}
        </span>
      </div>
      <div className={styles.row}>
        <span>
          <strong>Age:</strong> {values.age}
        </span>
        <span>
          <strong>Sex:</strong> {values.sex}
        </span>
      </div>
    </div>
  );
};

export default UserValues;
