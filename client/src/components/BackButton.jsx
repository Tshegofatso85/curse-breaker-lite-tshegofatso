import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function BackButton({ to }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="mb-8 flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
    >
      <FiArrowLeft size={20} />
      <span className="text-sm">Back</span>
    </button>
  );
}
