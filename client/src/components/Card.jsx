// export default function Card({ children }) {
//   return (
//     <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-blue-500/20 p-8 md:p-12">
//       {children}
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function Card({ children }) {
  return (
    <motion.div
      className="mx-auto max-w-6xl rounded-3xl border bg-slate-900/80 backdrop-blur-xl p-8 md:p-12"
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: [
          "0 0 25px rgba(59,130,246,0.18)",
          "0 0 60px rgba(168,85,247,0.35)",
          "0 0 25px rgba(59,130,246,0.18)",
        ],
        borderColor: [
          "rgba(59,130,246,0.25)",
          "rgba(168,85,247,0.45)",
          "rgba(59,130,246,0.25)",
        ],
      }}
      transition={{
        opacity: {
          duration: 0.5,
        },
        y: {
          duration: 0.5,
        },
        scale: {
          duration: 0.5,
        },
        boxShadow: {
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        borderColor: {
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
    >
      {children}
    </motion.div>
  );
}
