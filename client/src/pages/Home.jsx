import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout.jsx";
import api from "../services/api.js";
import { AppContext } from "../context/AppContext.jsx";
import Card from "../components/Card.jsx";

export default function Home() {
  const navigate = useNavigate();
  const {
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
  } = useContext(AppContext);

  const handleSubmit = async () => {
    if (!code.trim()) {
      setError("Please paste some code first");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await api.post("/diagnose", {
        code,
        language,
      });

      setDiagnosis(response.data);
      navigate("/diagnosis");
    } catch (error) {
      setError("Something went wrong, please try again");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (e) => {
    const value = e.target.value;

    const lines = value.split("\n");

    if (lines.length <= 200) {
      setCode(value);
    }
  };

  return (
    <Layout>
      <Card>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-white">Curse</span>{" "}
          <span className="text-blue-400">Breaker</span>{" "}
          <span className="text-white">Lite</span>
        </h1>

        <p className="mb-10 mt-4 text-center text-gray-400">
          Paste broken code and let the Curse Breaker reveal any hidden bugs
        </p>

        <textarea
          name="code"
          id="code"
          value={code}
          onChange={handleCodeChange}
          rows={16}
          placeholder="Paste broken code snippet here (max 200 lines)..."
          className="mb-6 w-full rounded-xl border border-blue-500/30 bg-slate-900 p-5 font-mono text-sm text-white outline-none focus:border-blue-400"
        />

        <p className="mt-2 text-right text-sm text-gray-400">
          {code.split("\n").length} / 200 lines
        </p>

        <div className="mb-8 w-full">
          <label
            htmlFor="language"
            className="mb-3 block text-sm font-medium uppercase tracking-wider text-slate-400"
          >
            Programming Language
          </label>

          <div className="relative">
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-10 text-white shadow-lg shadow-blue-500/5 transition-all duration-200 outline-none hover:border-blue-500/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="html">HTML / CSS</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
              ▼
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-5 w-full rounded-lg bg-red-500/20 p-3 text-red-300">
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95"
        >
          {loading ? "Breaking the Curse..." : "BREAK THE CURSE"}
        </button>
      </Card>
    </Layout>
  );
}
