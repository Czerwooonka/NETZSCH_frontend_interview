import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { useConverter } from "../../hooks/useConverter";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);

interface TemperatureData {
  id: number;
  monts: string;
  unit: string;
  temps: Array<number>;
}

interface TemperatureLineChartProps {
  data: TemperatureData;
}

const TemperatureLineChart = ({ data }: TemperatureLineChartProps) => {
  const converter: any = useConverter();
  const chartData = {
    labels: Array.from(Array(data.temps.length).keys(), (e, i) => i + 1),
    datasets: [
      {
        label: "Dataset 1",
        data: data.temps,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  console.log("chartData", chartData);
  return <Line data={chartData} />;
};

export default TemperatureLineChart;
