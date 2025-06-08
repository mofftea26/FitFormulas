import styles from "./CalculatorResults.module.scss";

type CalculatorResultsProps = {
  result: string;
  label: string;
  unit: string;
};

const CalculatorResults = ({ result, label, unit }: CalculatorResultsProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.result}>
        <span>{result}</span> {unit}
      </p>
    </div>
  );
};

export default CalculatorResults;
