import CompetencyProgress from "./CompetencyProgress";
import SubmissionUploader from "./SubmissionUploader";
import { useAuth } from "../../hooks/useAuth";

export default function StudentDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">
        Welcome, {user?.name}
      </h1>

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Your Competency Progress</h2>
        <CompetencyProgress />
      </section>

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Submit Your Task</h2>
        <SubmissionUploader />
      </section>
    </div>
  );
}
