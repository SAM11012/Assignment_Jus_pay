import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BlackDot, BlueDot, DarkVertivalLine, PurpleDot, VerticalLine } from "../../darkIcons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const WavyCurve = ({ isDark }: { isDark?: boolean }) => {
  const options: any = {
    // Specify type explicitly
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          color: "#000",
          font: {
            family: "system-ui",
            size: 12,
          },
          generateLabels: (chart: any) => {
            return chart.data.datasets.map((dataset: any, i: any) => ({
              text: `${dataset.label} ${dataset.currentValue}`,
              fillStyle: dataset.borderColor as string, // Ensure type compatibility
              strokeStyle: dataset.borderColor as string,
              lineWidth: 0,
              hidden: dataset.hidden || false, // Ensure proper typing
              index: i,
            }));
          },
        },
      },
      title: {
        display: false,
        text: "Revenue",
        align: "start",
        color: "var(--conter-title-text)",
        font: {
          size: 14,
          weight: "600",
          family: "system-ui",
        },
        padding: {
          bottom: 30,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "white",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function (context: any) {
            return `$${((context.raw as number) / 1000).toFixed(0)}K`; // Explicit type cast
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
            family: "system-ui",
          },
        },
      },
      y: {
        min: 0,
        max: 30_000_000, // Reduced from 30M
        border: {
          display: false,
        },
        grid: {
          color: !isDark ? "#f0f0f0" : "#FFFFFF1A",
        },
        ticks: {
          stepSize: 10_000_000, // Smaller step size
          callback: function (value: any) {
            return `${(value as number) / 1_000_000}M`;
          },
          color: "#666",
          font: {
            size: 12,
            family: "system-ui",
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hoverRadius: 6,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "",
        currentValue: "",
        data: [
          16_000_000, 10_000_000, 10_950_000, 16_000_000, 21_000_000,
          20_700_000,
        ],
        borderColor: "#A8C5DA", // Fixed missing closing parenthesis
        backgroundColor: "#A8C5DA",
        borderWidth: 2,
        pointBackgroundColor: "#A8C5DA",
        segment: {
          borderDash: (ctx: any) => (ctx.p1.parsed.x >= 4 ? [5, 5] : undefined),
        },
      },
      {
        label: "Previous Week",
        currentValue: "$68,768",
        data: [
          10_000_000, 17_000_000, 15_900_000, 12_000_000, 14_000_000,
          24_000_000,
        ],
        borderColor: isDark ? "#C6C7F8" : "#000",
        backgroundColor: isDark ? "#C6C7F8" : "#000",
        borderWidth: 2,
        pointBackgroundColor: isDark ? "#C6C7F8" : "#000",
      },
    ],
  };
  return (
    <div className="">
      <div
        className=" max-w-4xl  p-6 rounded-xl flex flex-col gap-3.5 "
        style={{ width: "662px", backgroundColor: "var(--content-bg-color)" }}
      >
        <div style={{display:'flex',gap:'20px'}}>
          <span
            style={{
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "20px",
               // Ensures text aligns properly
              color: "var(--conter-title-text)",
            }}
          >
            Revenue
          </span>
          {isDark?<DarkVertivalLine />:<VerticalLine/>}
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            {isDark?<PurpleDot />:<BlackDot />}
            <span
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                // Ensures text aligns properly
                color: "var(--conter-title-text)",
              }}
            >
              Current Week <b>$58,211</b>
            </span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <BlueDot />
            <span
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                // Ensures text aligns properly
                color: "var(--conter-title-text)",
              }}
            >
              Previous Week <b>$68,768</b>
            </span>
          </div>
        </div>

        <div className="h-[257px]">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default WavyCurve;
