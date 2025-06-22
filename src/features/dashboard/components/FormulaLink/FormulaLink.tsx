import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import styles from "./FormulaLink.module.scss";

type FormulaLinkProps = {
  to: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
};

function FormulaLink({ to, title, icon, className }: FormulaLinkProps) {
  return (
    <Link to={to} className={clsx(styles.formulaLink, className)}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <span className={styles.title}>{title}</span>
    </Link>
  );
}

export default FormulaLink;
