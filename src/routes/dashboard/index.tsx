import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "./Dashboard.module.scss";
import Navbar from "@/components/layout/Navbar/Navbar";
import NavigatingFormulaLink from "@/features/dashboard/components/NavigatingFormulaLink/NavigatingFormulaLink";
import {
  Flame,
  Dumbbell,
  Activity,
  Gauge,
  PieChart,
  Sandwich,
  PersonStanding,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [exitingLink, setExitingLink] = useState<string | null>(null);

  const handleClick = (to: string) => {
    if (!exitingLink) {
      setExitingLink(to);
      setTimeout(() => navigate({ to }), 600);
    }
  };

  const links = [
    {
      to: "/dashboard/bmr-mifflin",
      title: "Mifflin-St Jeor (BMR)",
      icon: <Flame />,
    },
    {
      to: "/dashboard/bmr-katch",
      title: "Katch-McArdle (BMR)",
      icon: <Dumbbell />,
    },
    {
      to: "/dashboard/bmr-harris",
      title: "Harris-Benedict (BMR)",
      icon: <Activity />,
    },
    { to: "/dashboard/tdee", title: "TDEE", icon: <Gauge /> },
    { to: "/dashboard/macros", title: "Macronutrients", icon: <PieChart /> },
    { to: "/dashboard/micros", title: "Micronutrients", icon: <Sandwich /> },
    {
      to: "/dashboard/body-composition",
      title: "Body Composition",
      icon: <PersonStanding />,
    },
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.links}>
          <AnimatePresence>
            {links.map(({ to, title, icon }) => (
              <NavigatingFormulaLink
                key={to}
                to={to}
                title={title}
                icon={icon}
                onClick={handleClick}
                isActive={exitingLink === to}
              />
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
