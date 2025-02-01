import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000" },
  { name: "Affiliate", value: 135.18, color: "#B2F2BB" },
  { name: "Sponsored", value: 154.02, color: "#A5B4FC" },
  { name: "E-mail", value: 48.96, color: "#D0EBFF" },
];

const renderCustomizedShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  // Convert angles from degrees to radians
  const startRadian = (startAngle * Math.PI) / 180;
  const endRadian = (endAngle * Math.PI) / 180;

  // Calculate the angle span
  const angleSpan = endAngle - startAngle;

  // Curve control parameters
  const curveRadius = 8;
  const midRadius = (innerRadius + outerRadius) / 2;

  // Calculate points for the curved path
  const x1 = cx + innerRadius * Math.cos(startRadian);
  const y1 = cy + innerRadius * Math.sin(startRadian);
  const x2 = cx + outerRadius * Math.cos(startRadian);
  const y2 = cy + outerRadius * Math.sin(startRadian);
  const x3 = cx + outerRadius * Math.cos(endRadian);
  const y3 = cy + outerRadius * Math.sin(endRadian);
  const x4 = cx + innerRadius * Math.cos(endRadian);
  const y4 = cy + innerRadius * Math.sin(endRadian);

  // Calculate control points for the start curve (outward)
  const startControlAngle = startRadian + Math.PI / 2;
  const startCurveX = cx + (outerRadius + curveRadius) * Math.cos(startRadian);
  const startCurveY = cy + (outerRadius + curveRadius) * Math.sin(startRadian);

  // Calculate control points for the end curve (inward)
  const endControlAngle = endRadian - Math.PI / 2;
  const endCurveX = cx + (outerRadius - curveRadius) * Math.cos(endRadian);
  const endCurveY = cy + (outerRadius - curveRadius) * Math.sin(endRadian);

  // Create SVG path with curved edges
  const path = [
    `M ${x1},${y1}`, // Start at inner radius
    `Q ${startCurveX},${startCurveY} ${x2},${y2}`, // Outward curve at start
    `A ${outerRadius},${outerRadius} 0 ${
      angleSpan > 180 ? 1 : 0
    },1 ${x3},${y3}`, // Outer arc
    `Q ${endCurveX},${endCurveY} ${x4},${y4}`, // Inward curve at end
    `A ${innerRadius},${innerRadius} 0 ${
      angleSpan > 180 ? 1 : 0
    },0 ${x1},${y1}`, // Inner arc
    "Z", // Close path
  ].join(" ");

  return (
    <g>
      <path d={path} fill={fill} />
      <path
        d={path}
        fill="none"
        stroke="white"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </g>
  );
};

const CurvedPieChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const getPercentage = (value: number) => ((value / total) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[280px]">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Total Sales
        </h2>

        <div className="flex justify-center relative mb-6">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              stroke="none"
              
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${getPercentage(value)}%`}
              contentStyle={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
          </PieChart>
        </div>

        <div className="space-y-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-600">{item.name}</span>
              </div>
              <span className="font-medium text-gray-900">
                ${item.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurvedPieChart;
