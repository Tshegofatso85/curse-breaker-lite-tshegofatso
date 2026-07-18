import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeViewer({ code, language }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      showLineNumbers
      wrapLongLines={false}
      wrapLines={true}
      customStyle={{
        borderRadius: "12px",
        fontSize: "0.9rem",
        padding: "1.5rem",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
