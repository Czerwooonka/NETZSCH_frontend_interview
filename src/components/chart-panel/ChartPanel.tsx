import "./ChartPanel.css";
import TemperatureLineChart from "../temperature-line-chart/TemperatureLineChart";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { MONTHS } from "../../utils/constants";
import Spiner from "../spiner/Spiner";
import Error from "../chart-panel-error/Error";

function ChartPanel() {
  const [selectedMonth, setSelectedMonth] = useState(MONTHS.JANUARY);
  const [data, fetching, error] = useFetch(
    `https://my-json-server.typicode.com/Czerwooonka/netzsch_database/temp/${selectedMonth}`
  );

  return (
    <div className="panel big medium small">
      <p>Temperatures in Kraków in 2023</p>
      {error && <Error />}
      {fetching && <Spiner />}
      {data && (
        <TemperatureLineChart
          data={data}
          setSelectedMonth={setSelectedMonth}
        ></TemperatureLineChart>
      )}
    </div>
  );
}

export default ChartPanel;
