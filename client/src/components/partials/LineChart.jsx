import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

const LineChart = ({ data, name }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      const chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((item) => new Date(item.time)),
          datasets: [
            {
              label: `${name}`,
              data: data.map((item) => Math.round(parseFloat(item.priceUsd))),
              borderColor: "rgba(2, 132, 199, 1)",
              backgroundColor: "rgba(2, 132, 199, 0.2)",
              pointStyle: "circle",
              pointBackgroundColor: "rgba(2, 132, 199)",
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "hour",
                displayFormats: {
                  hour: "HH:mm",
                },
              },
              title: {
                display: true,
                text: "Time",
              },
              grid: {
                display: false,
              },
            },
            y: {
              title: {
                display: true,
                text: "Price (USD)",
              },
              ticks: {
                callback: function (value) {
                  return value.toFixed(0);
                },
              },
              grid: {
                display: false,
              },
            },
          },
        },
      });

      // Cleanup function to destroy the chart instance when the component unmounts
      return () => {
        chartInstance.destroy();
      };
    }
  }, [data]);

  return (
    <canvas className="w-full h-full" ref={chartRef} id="history"></canvas>
  );
};

export default LineChart;
