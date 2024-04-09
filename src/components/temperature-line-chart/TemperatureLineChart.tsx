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
import { MONTHS } from "../../utils/constants";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);

interface TemperatureData {
  id: number;
  monts: string;
  unit: string;
  temps: Array<number>;
}

interface TemperatureLineChartProps {
  data: TemperatureData;
  setSelectedMonth: Dispatch<SetStateAction<string>>;
}

const TemperatureLineChart = ({
  data,
  setSelectedMonth,
}: TemperatureLineChartProps) => {
  const converter: any = useConverter();
  const chartRef = useRef<ChartJS<"line">>();
  const chartData: ChartData<"line"> = {
    labels: Array.from(Array(data.temps.length).keys(), (e, i) => i + 1),
    datasets: [
      {
        label: "Weather",
        data: data.temps,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const newData = chart.data.datasets[0].data.map((val) =>
        val && e.target.value === "°C"
          ? converter._fromFahrenheitToCelsius(val)
          : converter._fromCelsiusToFahrenheit(val)
      );

      chart.data.datasets[0].data = newData;

      chart.update();
    }
  };

  console.log("chartData", chartData);
  return (
    <>
      <div className="options">
        <select
          name="months"
          id="months"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSelectedMonth(e.target.value)
          }
        >
          {Object.keys(MONTHS).map((key) => (
            <option key={key} value={MONTHS[key]}>
              {key}
            </option>
          ))}
        </select>
        {converter && (
          <>
            <select
              className="m-5"
              name="unit"
              id="unit"
              onChange={handleUnitChange}
            >
              <option key="celsius" value="°C">
                °C
              </option>
              <option key="fahrenheit" value="°F">
                °F
              </option>
            </select>
          </>
        )}
      </div>
      <Line ref={chartRef} data={chartData} />
    </>
  );
};

export default TemperatureLineChart;
