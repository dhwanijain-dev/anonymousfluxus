import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend } from "chart.js";

// Register required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

function combineData(prescriptionRows, diagnosisRows, consultationRows) {
    // Collect all dates
    const allDates = new Set([
        ...prescriptionRows.map((row) => row.date),
        ...diagnosisRows.map((row) => row.date),
        ...consultationRows.map((row) => row.date),
    ]);
    // Sort the dates
    const sortedDates = [...allDates].sort();

    // Helper to count entries per date
    function countByDate(rows, date) {
        return rows.filter((row) => row.date === date).length;
    }

    // Build datasets
    const prescriptionData = sortedDates.map((date) => countByDate(prescriptionRows, date));
    const diagnosisData = sortedDates.map((date) => countByDate(diagnosisRows, date));
    const consultationData = sortedDates.map((date) => countByDate(consultationRows, date));

    return {
        labels: sortedDates,
        datasets: [
            {
                label: "Prescription",
                data: prescriptionData,
                borderColor: "blue",
                backgroundColor: "rgba(0,0,255,0.2)",
                fill: true,
                pointStyle: "rect", // Ensures legend color box appears as a square
            },
            {
                label: "Diagnosis",
                data: diagnosisData,
                borderColor: "green",
                backgroundColor: "rgba(0,255,0,0.2)",
                fill: true,
                pointStyle: "rect",
            },
            {
                label: "Consultation",
                data: consultationData,
                borderColor: "red",
                backgroundColor: "rgba(255,0,0,0.2)",
                fill: true,
                pointStyle: "rect",
            },
        ],
    };
}

// Chart options (moved outside)
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            labels: {
                usePointStyle: true, // Ensures small color boxes instead of lines
                boxWidth: 20, // Adjust box size
                padding: 20, // Adds spacing between legend items
            },
        },
    },
    scales: {
        y: { beginAtZero: true },
    },
};

export default function CombinedLineChart({ prescriptionRows, diagnosisRows, consultationRows }) {
    const chartData = combineData(prescriptionRows, diagnosisRows, consultationRows);

    return (
        <div style={{ width: "500px", height: "300px" }}>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
}
