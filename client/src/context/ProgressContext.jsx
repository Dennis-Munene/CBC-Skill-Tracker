import { createContext, useState, useContext } from "react";
import * as progressApi from "../api/progressApi";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState([]);

  const loadProgress = async (studentId) => {
    const data = await progressApi.getProgress(studentId);
    setProgress(data);
  };

  return (
    <ProgressContext.Provider value={{ progress, loadProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
