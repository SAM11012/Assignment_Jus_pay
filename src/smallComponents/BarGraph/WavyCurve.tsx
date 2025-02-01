import React from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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

const options: any = {  // Specify type explicitly
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: '#000',
          font: {
            family: 'system-ui',
            size: 12,
          },
          generateLabels: (chart:any) => {
            return chart.data.datasets.map((dataset:any, i:any) => ({
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
        display: true,
        text: 'Revenue',
        align: 'start',
        color: '#000',
        font: {
          size: 16,
          weight: '500',
          family: 'system-ui',
        },
        padding: {
          bottom: 30,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'white',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context:any) {
            return `$${(context.raw as number / 1000).toFixed(0)}K`; // Explicit type cast
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
          color: '#666',
          font: {
            size: 12,
            family: 'system-ui',
          },
        },
      },
      y: {
        min: 0,
        max: 25_000_000, // Reduced from 30M
        border: {
          display: false,
        },
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          stepSize: 5_000_000, // Smaller step size
          callback: function(value:any) {
            return `${value as number / 1_000_000}M`;
          },
          color: '#666',
          font: {
            size: 12,
            family: 'system-ui',
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
      mode: 'index',
    },
  };
  

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const data = {
  labels,
  datasets: [
    {
      label: '',
      currentValue: '',
      data: [10_000_000, 9_000_000, 9_000_000, 12_000_000, 16_000_000, 18_000_000],
      borderColor: '#000',
      backgroundColor: '#000',
      borderWidth: 2,
      pointBackgroundColor: '#000',
      segment: {
        borderDash: (ctx: any) => ctx.p1.parsed.x >= 4 ? [5, 5] : undefined,
      },
    },
    {
      label: 'Previous Week',
      currentValue: '$68,768',
      data: [10_000_000, 12_000_000, 14_000_000, 11_000_000, 13_000_000, 20_000_000],
      borderColor: '#90cdf4',
      backgroundColor: '#90cdf4',
      borderWidth: 2,
      pointBackgroundColor: '#90cdf4',
    },
  ],
};

function WavyCurve() {
  return (
    <div className="">
      <div className=" max-w-4xl bg-white p-6 rounded-xl " style={{width:'662px',backgroundColor:'#F7F9FB'}}>
        <div className="h-[320px]">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default WavyCurve;