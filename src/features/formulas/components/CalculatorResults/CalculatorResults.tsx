import clsx from "clsx";
import styles from "./CalculatorResults.module.scss";

type CalculatorResultsProps = {
  result: string;
  label: string;
  unit: string;
  className?: string;
};

const CalculatorResults = ({
  result,
  label,
  unit,
  className,
}: CalculatorResultsProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.result}>
        <span>{result}</span> {unit}
      </p>
    </div>
  );
};

export default CalculatorResults;
