import "./ChartPanel.css";
import LineChart from "../line-chart/LineChart";
import { useConverter } from "../../hooks/useConverter";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [7, 6, 5, 4, 3, 2, 1],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function ChartPanel() {
  const converter: any = useConverter();

  return (
    <div className="panel">
      {converter && <p>{converter._fromCelsiusToFahrenheit(11)}</p>}
      <LineChart data={data}></LineChart>
    </div>
  );
}

export default ChartPanel;
