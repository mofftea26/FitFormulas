import Navbar from "@/components/layout/Navbar/Navbar";
import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./Dashboard.module.scss";
export const Route = createFileRoute("/dashboard/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.links}>
          <Link to="/dashboard/bmr-mifflin" className={styles.link}>
            <div className={styles.btn}>Mifflin-St Jeor (BMR)</div>
          </Link>
          <Link to="/dashboard/bmr-katch" className={styles.link}>
            <div className={styles.btn}>Katch-McArdle (BMR)</div>
          </Link>
          <Link to="/dashboard/bmr-harris" className={styles.link}>
            <div className={styles.btn}>Harris-Benedict (BMR)</div>
          </Link>
          <Link to="/dashboard/tdee" className={styles.link}>
            <div className={styles.btn}>Total daily energy expenditure</div>
          </Link>
          <Link to="/dashboard/macros" className={styles.link}>
            <div className={styles.btn}>Macronutrients</div>
          </Link>
          <Link to="/dashboard/body-composition" className={styles.link}>
            <div className={styles.btn}>Body Composition</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
