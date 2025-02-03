
import { WorldMap } from "../../icons";
import ProgressComponent from "./ProgressComponent";

type Props = {};
const GraphData: { name: string; progress: number }[] = [
  { name: "New York", progress: 72 },
  { name: "San Francisco", progress: 29 },
  { name: "Sydney", progress: 25 },
  { name: "Singapore", progress: 61 },
];
export default function GraphCard({}: Props) {
  return (
    <div
      style={{
        backgroundColor:'var(--content-bg-color)',
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        width: "100%",
         // Ensures full height usage
        gap: "16px",
      }}
    >
      <span
        style={{
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "20px",
          width: "100%", // Ensures text aligns properly
          color: "var(--conter-title-text)"
        }}
      >
        Revenue by Location
      </span>

      {/* Content Wrapper for Equal Alignment */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>
          <WorldMap />
        </div>
        {GraphData.map((item: { name: string; progress: number }) => {
          return (
            <div style={{ flex: 1 }}>
              <StateBox label={item.name} progress={item.progress} />
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

const StateBox = ({ label, progress }: { label: string; progress: number }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "18px",
            padding: 0,
            margin: 0,
            color: "var(--conter-title-text)"
          }}
        >
          {label}
        </p>
        <span
          style={{
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "18px",
            color: "var(--conter-title-text)"
          }}
        >
          {progress}K
        </span>
      </div>
      <ProgressComponent targetProgress={progress} />
    </div>
  );
};
