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

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);

interface LineChartProps {
  data: ChartData<"line">;
}

const LineChart = ({ data }: LineChartProps) => {
  return <Line data={data} />;
};

export default LineChart;
