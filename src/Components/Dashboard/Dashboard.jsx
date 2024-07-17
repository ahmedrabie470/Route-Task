import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import revenueData from "../../../src/data/revenueData.json";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { customerId } = useParams(); // Get customerId from URL params
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    // Filter revenue data by customer_id
    const filteredData = revenueData.filter(
      (data) => data.customer_id === parseInt(customerId)
    );
    setCustomerData(filteredData);
  }, [customerId]);

  // Prepare data for the Line chart
  const chartData = {
    labels: customerData.map((data) => data.date),
    datasets: [
      {
        label: "Revenue",
        data: customerData.map((data) => data.amount),
        borderColor: "rgba(0, 123, 255, 1)",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      title: {
        display: true,
        text: `Total Amount Per Day for Customer ${customerId}`,
      },
    },
  };

  return (
    <div className="w-75 m-auto mt-5 py-3">
      <div className="dataCard d-flex justify-content-center revenueCard container bg-white w-75 mt-5 me-auto p-3 shadow-sm rounded-3 bg-gradient-custom">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
