import React from 'react';

const data = [
  { label: "Jan", value1: 15_000_000, value2: 3_000_000, value3: 5_000_000 },
  { label: "Feb", value1: 22_000_000, value2: 2_000_000, value3: 4_000_000 },
  { label: "Mar", value1: 15_000_000, value2: 2_000_000, value3: 3_000_000 },
  { label: "Apr", value1: 20_000_000, value2: 5_000_000, value3: 5_000_000 },
  { label: "May", value1: 14_000_000, value2: 3_000_000, value3: 2_000_000 },
  { label: "Jun", value1: 20_000_000, value2: 3_000_000, value3: 4_000_000 }
];

const StackedBar = () => {
  const maxValue = 30_000_000;

  return (
    <div className="p-6 bg-gray-50 w-full max-w-2xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Projections vs Actuals</h2>
      
      <div className="flex">
        {/* Y-axis */}
        <div className="flex flex-col justify-between pr-4 h-48 text-right">
          <span className="text-xs text-gray-400">30M</span>
          <span className="text-xs text-gray-400">20M</span>
          <span className="text-xs text-gray-400">10M</span>
          <span className="text-xs text-gray-400">0</span>
        </div>

        {/* Chart area */}
        <div className="flex-1">
          <div className="h-48 relative">
            {/* Background grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="border-t border-gray-100 w-full" />
              ))}
            </div>

            {/* Bars container */}
            <div className="absolute inset-0 flex items-end justify-between">
              {data.map((item, index) => {
                const height1 = (item.value1 / maxValue) * 100;
                const height2 = (item.value2 / maxValue) * 100;
                const height3 = (item.value3 / maxValue) * 100;
                
                return (
                  <div key={index} className="mx-2 w-8 relative h-full flex items-end">
                    <div className="w-full">
                      {/* Base segment */}
                      <div 
                        className="w-full bg-sky-300 absolute bottom-0"
                        style={{ height: `${height1}%` }}
                      />
                      {/* Middle segment */}
                      <div 
                        className="w-full bg-sky-200 absolute"
                        style={{ 
                          height: `${height2}%`,
                          bottom: `${height1}%`
                        }}
                      />
                      {/* Top segment */}
                      <div 
                        className="w-full bg-sky-100 absolute"
                        style={{ 
                          height: `${height3}%`,
                          bottom: `${height1 + height2}%`
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