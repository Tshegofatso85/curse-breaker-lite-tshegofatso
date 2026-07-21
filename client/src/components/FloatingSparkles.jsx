import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FloatingSparkles({ count = 20 }) {
  const sparkles = Array.from({ length: count });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      {sparkles.map((_, index) => {
        const left =
          index < count / 2 ? Math.random() * 30 : 70 + Math.random() * 30;

        const duration =
          count > 20 ? 3 + Math.random() * 2 : 8 + Math.random() * 8;

        const delay = Math.random() * 2;

        const size = count > 20 ? 18 : 12;

        const isBlue = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${left}%`,
              bottom: "-40px",
            }}
            animate={{
              y: [0, -700],
              x: [0, Math.random() * 60 - 30],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles
              size={size}
              className={
                isBlue
                  ? "text-blue-400 drop-shadow-[0_0_16px_rgba(96,165,250,1)]"
                  : "text-purple-400 drop-shadow-[0_0_16px_rgba(192,132,252,1)]"
              }
            />
          </motion.div>
        );
      })}
    </div>
  );
}
