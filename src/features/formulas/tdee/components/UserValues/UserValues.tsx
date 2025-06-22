import styles from "./UserValues.module.scss";
import { activityLevelMap } from "@/utils/coreFunctions/tdee/types";

type UserValuesProps = {
  values: { bmr: number; activityLevel: keyof typeof activityLevelMap };
};

const UserValues = ({ values }: UserValuesProps) => {
  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>
          <strong>BMR:</strong> {values.bmr} kcal
        </span>
        <span>
          <strong>Activity:</strong> {values.activityLevel}
        </span>
      </div>
    </div>
  );
};

export default UserValues;
