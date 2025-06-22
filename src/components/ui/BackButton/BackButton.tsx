import { ChevronLeft } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import styles from "./BackButton.module.scss";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate({ to: ".." })}
      className={clsx(styles.backButton)}
    >
      <ChevronLeft size={40} />
    </button>
  );
};

export default BackButton;
