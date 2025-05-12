import Navbar from "@/components/layout/Navbar/Navbar";
import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./Dashboard.module.scss";
export const Route = createFileRoute("/dashboard/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 bg-primary-100">
        <div className="flex flex-col gap-4 max-w-md mx-auto items-center">
          <Link to="/dashboard/bmr-mifflin">
            <button className={styles.btn}>Mifflin-St Jeor (BMR)</button>
          </Link>
          {/* <Link to="/dashboard/bmr-katch">
            <Button variant="default">Katch-McArdle (BMR)</Button>
          </Link>
          <Link to="/dashboard/tdee">
            <Button variant="default">TDEE</Button>
          </Link>
          <Link to="/dashboard/macros">
            <Button variant="default">Macros</Button>
          </Link>
          <Link to="/dashboard/body-composition">
            <Button variant="default">Body Composition</Button>
          </Link> */}
        </div>
      </main>
    </div>
  );
}
