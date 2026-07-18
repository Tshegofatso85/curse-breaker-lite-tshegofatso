import { FiAlertCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";

export default function IssueCard({ issue }) {
  const styles = {
    ERROR: {
      icon: <FiAlertCircle size={22} />,
      border: "border-red-500",
      bg: "bg-red-500/10",
      text: "text-red-400",
    },

    WARNING: {
      icon: <FiAlertTriangle size={22} />,
      border: "border-yellow-500",
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
    },

    INFO: {
      icon: <FiInfo size={22} />,
      border: "border-blue-500",
      bg: "bg-blue-500/10",
      text: "text-blue-400",
    },
  };

  const style = styles[issue.type];

  return (
    <div
      className={`flex items-start gap-4 rounded-x1 border ${style.border} ${style.bg} p-4`}
    >
      <div className={style.text}>{style.icon}</div>

      <div>
        <h3 className={`font-semibold ${style.text}`}>{issue.type}</h3>

        <p className="text-sm text-gray-300">
          Line {issue.line}: {issue.message}
        </p>
      </div>
    </div>
  );
}
