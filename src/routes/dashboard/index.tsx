import Navbar from "@/components/layout/Navbar/Navbar";
import { createFileRoute } from "@tanstack/react-router";
import styles from "./Dashboard.module.scss";
import FormulaLink from "@/features/dashboard/components/FormulaLink/FormulaLink";

import {
  Flame, // for Mifflin-St Jeor
  Dumbbell, // for Katch-McArdle
  Activity, // for Harris-Benedict
  Gauge, // for TDEE
  PieChart, // for Macros
  Sandwich, // for Micros
  PersonStanding, // for Body Composition
} from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.links}>
          <FormulaLink
            to="/dashboard/bmr-mifflin"
            title="Mifflin-St Jeor (BMR)"
            icon={<Flame />}
          />
          <FormulaLink
            to="/dashboard/bmr-katch"
            title="Katch-McArdle (BMR)"
            icon={<Dumbbell />}
          />
          <FormulaLink
            to="/dashboard/bmr-harris"
            title="Harris-Benedict (BMR)"
            icon={<Activity />}
          />
          <FormulaLink to="/dashboard/tdee" title="TDEE" icon={<Gauge />} />
          <FormulaLink
            to="/dashboard/macros"
            title="Macronutrients"
            icon={<PieChart />}
          />
          <FormulaLink
            to="/dashboard/micros"
            title="Micronutrients"
            icon={<Sandwich />}
          />
          <FormulaLink
            to="/dashboard/body-composition"
            title="Body Composition"
            icon={<PersonStanding />}
          />
        </div>
      </main>
    </div>
  );
}
