// src/App.jsx
import AppRouter from "./router/AppRouter.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProgressProvider } from "./context/ProgressContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppRouter />
      </ProgressProvider>
    </AuthProvider>
  );
}
