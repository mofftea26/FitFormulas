import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./SelectField.module.scss";

interface Option<T extends string> {
  label: string;
  value: T;
}

interface SelectFieldProps<T extends string> {
  value: T;
  options: Option<T>[];
  onChange: (val: T) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export default function SelectField<T extends string>({
  value,
  options,
  onChange,
  placeholder = "Select...",
  label,
  className,
}: SelectFieldProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={clsx(styles.wrapper, className)} ref={wrapperRef}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectWrapper}>
        <button
          type="button"
          className={styles.trigger}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selected?.label || placeholder}
        </button>
        <div className={styles.icon}>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {isOpen && (
          <ul className={styles.dropdown}>
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={clsx(styles.option, {
                  [styles.selected]: opt.value === value,
                })}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
