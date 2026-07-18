import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import IssueCard from "../components/IssueCard";
import { AppContext } from "../context/AppContext";
import CodeViewer from "../components/CodeViewer";
import BackButton from "../components/BackButton";

export default function Diagnosis() {
  const { diagnosis, language } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!diagnosis) navigate("/");
  }, [diagnosis, navigate]);

  if (!diagnosis) return null;

  const { issues, explanations } = diagnosis.data;

  const originalCode = diagnosis.originalCode;

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <BackButton />
        <h1 className="mb-3 text-4xl font-bold text-blue-400">
          Diagnosis Complete
        </h1>

        <div className="mb-10 rounded-2xl border border-blue-500/20 bg-slate-900 p-6 shadow-lg shadow-blue-500/10">
          <h2 className="mb-4 text-lg font-semibold text-blue-400">
            Broken Code
          </h2>

          <CodeViewer code={originalCode} language={language} />
        </div>

        <h2 className="mb-8 text-gray-400">
          The Curse Breaker Found{" "}
          <span className="text-blue-400">{issues.length}</span> Issues
        </h2>

        <div className="space-y-4">
          {issues.map((issue, index) => (
            <IssueCard key={index} issue={issue} />
          ))}
        </div>

        <div className="mt-10 rounded-xl border-blue-500/20 bg-slate-900 p-6">
          <h2 className="mb-3 text-xl font-semibold text-blue-400">
            Explanation
          </h2>

          <p className="leading-7 text-gray-300">{explanations}</p>
        </div>

        <div className="mt-10 flex justify-end">
          <button
            onClick={() => navigate("/solution")}
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-500"
          >
            View Fixed Code
          </button>
        </div>
      </div>
    </Layout>
  );
}
