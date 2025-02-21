import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Sales",
                data: [10, 30, 50, 20, 80, 40],
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                borderWidth: 2,
                pointRadius: 5,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: "500px", height: "300px" }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
