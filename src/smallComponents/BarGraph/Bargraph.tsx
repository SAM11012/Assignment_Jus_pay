import { motion } from "framer-motion";

const data = [
  { label: "Jan", value1: 15_000_000, value2: 3_000_000, value3: 5_000_000 },
  { label: "Feb", value1: 22_000_000, value2: 2_000_000, value3: 4_000_000 },
  { label: "Mar", value1: 15_000_000, value2: 2_000_000, value3: 3_000_000 },
  { label: "Apr", value1: 20_000_000, value2: 5_000_000, value3: 5_000_000 },
  { label: "May", value1: 14_000_000, value2: 3_000_000, value3: 2_000_000 },
  { label: "Jun", value1: 20_000_000, value2: 3_000_000, value3: 4_000_000 },
];

const StackedBar = ({ isDark }: { isDark?: boolean }) => {
  const maxValue = 30_000_000;

  return (
    <div
      style={{
        width: "452px",
        height: "252px",
        borderRadius: "16px",
        backgroundColor: "var(--content-bg-color)",
      }}
      className="p-6 w-full max-w-2xl "
    >
      <h2
        style={{
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "20px",
          color: "var(--conter-title-text)",
        }}
        className=" mb-4"
      >
        Projections vs Actuals
      </h2>

      <div className="flex">
        {/* Y-axis */}
        <div className="flex flex-col justify-between pr-4 h-38 text-right">
          <span className="text-xs text-gray-400">30M</span>
          <span className="text-xs text-gray-400">20M</span>
          <span className="text-xs text-gray-400">10M</span>
          <span className="text-xs text-gray-400">0</span>
        </div>

        {/* Chart area */}
        <div className="flex-1">
          <div className="h-38 relative">
            {/* Background grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border-t  w-full"
                  style={{ borderColor: isDark ? "#FFFFFF1A" : "#1C1C1C0D" }}
                />
              ))}
            </div>

            {/* Bars container */}
            <div className="absolute inset-0 flex items-end justify-between">
              {data.map((item, index) => {
                const height1 = (item.value1 / maxValue) * 100;
                const height2 = (item.value2 / maxValue) * 100;
                const height3 = (item.value3 / maxValue) * 100;

                return (
                  <div
                    key={index}
                    className="mx-2 w-8 relative h-full flex items-end"
                  >
                    <div className="w-full">
                      {/* Base segment */}
                      <motion.div
                        className="w-[25px]  absolute bottom-0"
                        style={{
                          height: `${height1}%`,
                          backgroundColor: "#A8C5DA",
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height1}%` }}
                        transition={{ duration: 2 }}
                      />
                      {/* Middle segment */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${height2}%` }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="w-[25px]  absolute"
                        style={{
                          height: `${height2}%`,
                          bottom: `${height1}%`,
                          backgroundColor: "#A8C5DA",
                        }}
                      />
                      {/* Top segment */}
                      <motion.div
                        className="w-[25px] bg-sky-100 absolute"
                        initial={{ height: 0 }}
                        animate={{ height: `${height3}%` }}
                        transition={{ duration: 2, delay: 1 }}
                        style={{
                          height: `${height3}%`,
                          bottom: `${height1 + height2}%`,
                          borderTopLeftRadius: "4px",
                          borderTopRightRadius: "4px",
                          backgroundColor: "#E5ECF6",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between mt-2 px-2">
            {data.map((item, index) => (
              <span key={index} className="text-xs text-gray-400">
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedBar;
