import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import { useEffect, useState } from "react";

const messages = [
  "🔮 Breaking the Curse...",
  "📜 Reading Ancient Code...",
  "✨ Removing Dark Magic...",
  "⚡ Restoring Clean Code...",
  "🧠 Finding Hidden Bugs...",
];

export default function LoadingOverlay() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="absolute h-40 w-40 rounded-full border border-blue-500/40"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute h-28 w-28 rounded-full border-2 border-purple-500/50"
          animate={{ rotate: -360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute h-24 w-24 rounded-full bg-blue-500/20 blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative z-10 rounded-full bg-slate-900 p-6"
        >
          <FiCode size={42} className="text-blue-400" />
        </motion.div>

        <motion.p
          key={messageIndex}
          className="mt-12 text-lg font-semibold text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {messages[messageIndex]}
        </motion.p>

        <p className="mt-2 text-sm text-gray-500">
          The Curse Breaker is analyzing your code...
        </p>
      </div>
    </motion.div>
  );
}
