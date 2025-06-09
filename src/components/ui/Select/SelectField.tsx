import clsx from "clsx";
import styles from "./SelectField.module.scss";

interface Option<T extends string> {
  label: string;
  value: T;
}

interface SelectFieldProps<T extends string> {
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (val: T) => void;
  className?: string;
}

function SelectField<T extends string>({
  label,
  value,
  options,
  onChange,
  className,
}: SelectFieldProps<T>) {
  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
