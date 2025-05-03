import clsx from "clsx";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "medium",
      isLoading = false,
      disabled = false,
      fullWidth = false,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          styles[variant],
          styles[size],
          {
            [styles.loading]: isLoading,
            [styles.disabled]: disabled || isLoading,
            [styles.fullWidth]: fullWidth,
          },
          className
        )}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading && <Loader2 className={styles.loader} />}
        <span className={clsx({ [styles.hidden]: isLoading })}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
