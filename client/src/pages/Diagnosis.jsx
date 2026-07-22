import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import IssueCard from "../components/IssueCard";
import { AppContext } from "../context/AppContext";
import CodeViewer from "../components/CodeViewer";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card>
          <BackButton to="/" />
          <motion.h1
            className="mb-3 text-4xl font-bold text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            Diagnosis Complete
          </motion.h1>

          <motion.div
            className="mb-10 rounded-2xl border border-blue-500/20 bg-slate-900 p-6 shadow-lg shadow-blue-500/10"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
          >
            <h2 className="mb-4 text-lg font-semibold text-blue-400">
              Broken Code
            </h2>

            <CodeViewer code={originalCode} language={language} />
          </motion.div>

          <motion.h2
            className="mb-8 text-gray-400"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}
          >
            The Curse Breaker Found{" "}
            <span className="text-blue-400">{issues.length}</span> Issues
          </motion.h2>

          <div className="space-y-4">
            {issues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.9 + index * 0.25,
                  duration: 0.4,
                }}
              >
                <IssueCard issue={issue} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 rounded-xl border border-blue-500/20 bg-slate-900 p-6"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.8,
            }}
          >
            <h2 className="mb-3 text-xl font-semibold text-blue-400">
              Explanation
            </h2>

            <p className="leading-7 text-gray-300">{explanations}</p>
          </motion.div>

          <motion.div
            className="mt-10 flex justify-end"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 2.1,
            }}
          >
            <button
              onClick={() => navigate("/solution")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95"
            >
              View Fixed Code
            </button>
          </motion.div>
        </Card>
      </motion.div>
    </Layout>
  );
}
