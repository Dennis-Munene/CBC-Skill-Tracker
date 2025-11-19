import { useState } from "react";
import { useUpload } from "../../hooks/useUpload";

export default function SubmissionUploader() {
  const { uploadFile } = useUpload();
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    await uploadFile(file);
    alert("Upload successful!");
  };

  return (
    <div className="flex flex-col gap-4 items-start">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="p-2 border rounded-lg"
      />

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
}
