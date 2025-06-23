import { motion } from "framer-motion";
import FormulaLink from "../FormulaLink/FormulaLink";

type Props = {
  to: string;
  title: string;
  icon?: React.ReactNode;
  onClick: (to: string) => void;
  isActive: boolean;
};

const NavigatingFormulaLink = ({
  to,
  title,
  icon,
  onClick,
  isActive,
}: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(to);
  };

  return (
    <motion.div
      key={to}
      layout
      onClick={handleClick}
      initial={{ scale: 0, x: 0, y: 0 }}
      animate={isActive ? { scale: 30 } : { scale: 1, x: 0, y: 0 }}
      transition={{
        duration: isActive ? 0.6 : 0.5,
        ease: "easeInOut",
        type: isActive ? "tween" : "spring",
        stiffness: 100,
        damping: 20,
      }}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <FormulaLink
        to="#"
        title={isActive ? "" : title}
        icon={isActive ? undefined : icon}
      />
    </motion.div>
  );
};

export default NavigatingFormulaLink;
