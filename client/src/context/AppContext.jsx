import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <AppContext.Provider
      value={{
        code,
        setCode,
        language,
        setLanguage,
        diagnosis,
        setDiagnosis,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
