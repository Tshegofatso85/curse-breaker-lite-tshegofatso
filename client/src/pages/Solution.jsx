import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import CodeViewer from "../components/CodeViewer";
import { AppContext } from "../context/AppContext";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        <Card>
          <BackButton />
          <motion.h1
            className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            ✨ The Curse Has Been Lifted
          </motion.h1>

          <motion.p
            className="mt-2 mb-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
          >
            Your code has been repaired.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <CodeViewer code={fixedCode} language={language} />
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={copyCode}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-500"
            >
              <FiCopy />
              {copied ? "Copied!" : "Copy Code"}
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={downloadCode}
              className="flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 hover:bg-purple-500"
            >
              <FiDownload />
              Download Code
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => setShowFixes(!showFixes)}
              className="flex items-center gap-2 rounded-lg bg-slate-700 px-5 py-3 hover:bg-slate-600"
            >
              <FiInfo />
              {showFixes ? "Hide Fixes" : "Show Fixes"}
            </motion.button>
          </motion.div>

          <AnimatePresence>
            {showFixes && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="mt-8 overflow-hidden rounded-xl border border-blue-500/20 bg-slate-900 p-6"
              >
                <h2 className="mb5 text-xl font-semibold text-blue-400">
                  What Changed?
                </h2>

                <ul className="space-y-4">
                  {fixes.map((fix, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.2,
                      }}
                    >
                      <FiCheckCircle className="text-green-400" />
                      <span className="text-gray-400">{fix}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
      <motion.div
        className="mt-12 flex justify-center"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.3,
        }}
      >
        <button
          onClick={handleNewCode}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
        >
          <FiRefreshCw />
          Fix New Code
        </button>
      </motion.div>
    </Layout>
  );
}
