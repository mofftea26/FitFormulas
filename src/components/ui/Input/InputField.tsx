import React from "react";
import clsx from "clsx";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: number | string;
  onChange: (val: number | string) => void;
  unit?: string;
  className?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  unit,
  className,
  disabled,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = type === "number" ? Number(e.target.value) : e.target.value;
    onChange(val);
  };

  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={clsx(styles.input, unit && styles.hasUnit)}
        />
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
    </div>
  );
};

export default InputField;
