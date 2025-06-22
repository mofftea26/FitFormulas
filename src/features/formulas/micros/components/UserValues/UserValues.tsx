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
