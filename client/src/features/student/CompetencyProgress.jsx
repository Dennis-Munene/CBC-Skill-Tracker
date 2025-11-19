import { useProgress } from "../context/ProgressContext";

export default function CompetencyProgress() {
  const { progress, updateProgress } = useProgress();

  // Example usage
  return (
    <div>
      <h2>Progress</h2>
      <pre>{JSON.stringify(progress, null, 2)}</pre>
    </div>
  );
}
