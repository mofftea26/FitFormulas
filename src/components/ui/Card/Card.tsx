import clsx from "clsx";
import styles from "./Card.module.scss";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

const Card = ({ children, className, title }: CardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
