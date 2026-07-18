import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import CodeViewer from "../components/CodeViewer";
import { AppContext } from "../context/AppContext";
import BackButton from "../components/BackButton";
import Card from "../components/Card";

import {
  FiCopy,
  FiDownload,
  FiCheckCircle,
  FiInfo,
  FiRefreshCw,
} from "react-icons/fi";

export default function Solution() {
  const navigate = useNavigate();
  const { diagnosis, language, setCode, setDiagnosis } = useContext(AppContext);

  const [showFixes, setShowFixes] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!diagnosis) navigate("/");
  }, [diagnosis, navigate]);

  if (!diagnosis) return null;

  const { fixedCode, fixes } = diagnosis.data;

  const handleNewCode = () => {
    setCode("");
    setDiagnosis(null);

    navigate("/");
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(fixedCode);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadCode = async () => {
    const extensions = {
      javascript: "js",
      python: "py",
      html: "html",
    };

    const blob = new Blob([fixedCode], { type: "text/plain" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `fixed-code.${extensions[language]}`;

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <Card>
        <BackButton />
        <h1 className="text-4xl font-bold text-blue-400">
          Curse Successfully Broken
        </h1>

        <p className="mt-2 mb-10 text-gray-400">Your code has been repaired.</p>

        <CodeViewer code={fixedCode} language={language} />

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={copyCode}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-500"
          >
            <FiCopy />
            {copied ? "Copied!" : "Copy Code"}
          </button>

          <button
            onClick={downloadCode}
            className="flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 hover:bg-purple-500"
          >
            <FiDownload />
            Download Code
          </button>

          <button
            onClick={() => setShowFixes(!showFixes)}
            className="flex items-center gap-2 rounded-lg bg-slate-700 px-5 py-3 hover:bg-slate-600"
          >
            <FiInfo />
            {showFixes ? "Hide Fixes" : "Show Fixes"}
          </button>
        </div>

        {showFixes && (
          <div className="mt-8 rounded-xl border border-blue-500/20 bg-slate-900 p-6">
            <h2 className="mb5 text-xl font-semibold text-blue-400">
              What Changed?
            </h2>

            <ul className="space-y-4">
              {fixes.map((fix, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-400" />
                  <span className="text-gray-400">{fix}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
      <div className="mt-12 flex justify-center">
        <button
          onClick={handleNewCode}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
        >
          <FiRefreshCw />
          Fix New Code
        </button>
      </div>
    </Layout>
  );
}
