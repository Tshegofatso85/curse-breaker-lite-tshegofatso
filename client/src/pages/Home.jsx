import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout.jsx";
import api from "../services/api.js";
import { AppContext } from "../context/AppContext.jsx";

export default function Home() {
  const navigate = useNavigate();
  const { code, setCode, language, setLanguage, diagnosis, setDiagnosis } =
    useContext(AppContext);

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

  return (
    <Layout>
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-12">
        <h1 className="mb-3 text-5xl font-bold text-blue-400">
          Curse Breaker Lite
        </h1>

        <p className="mb-10 text-center text-gray-400">
          Paste broken code and let the Curse Breaker reveal any hidden bugs
        </p>

        <textarea
          name="code"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={16}
          placeholder="Paste broken code snippet here (max 200 lines)..."
          className="mb-6 w-full rounded-xl border border-blue-500/30 bg-slate-900 p-5 font-mono text-sm text-white outline-none focus:border-blue-400"
        />

        <div className="mb-8 w-full">
          <label className="mb-2 block text-gray-300">Select Language</label>

          <select
            name="language"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-xl border border-blue 500/30 bg-slate-900 p-3 text-white"
          >
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="html">HTML / CSS</option>
          </select>
        </div>

        {error && (
          <div className="mb-5 w-full rounded-lg bg-red-500/20 p-3 text-red-300">
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-10 py-4 font-semibold transition hover:bg-blue-500 disabled:opacity-50"
        >
          {loading ? "Breaking the Curse..." : "BREAK THE CURSE"}
        </button>
      </div>
    </Layout>
  );
}
