
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000" },
  { name: "Affiliate", value: 135.18, color: "#B2F2BB" },
  { name: "Sponsored", value: 154.02, color: "#A5B4FC" },
  { name: "E-mail", value: 48.96, color: "#D0EBFF" },
];

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
