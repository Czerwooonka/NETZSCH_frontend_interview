import "./ChartPanel.css";
import LineChart from "../temperature-line-chart/TemperatureLineChart";
import { useConverter } from "../../hooks/useConverter";
import { useFetch } from "../../hooks/useFetch";
import { ChangeEvent, useState } from "react";
import { MONTHS } from "../../utils/constants";

function ChartPanel() {
  const [selectedMonth, setSelectedMonth] = useState(MONTHS.JANUARY);
  let selectedUnit = "°C";
  const converter: any = useConverter();
  const [data, fetching, error] = useFetch(
    `https://my-json-server.typicode.com/Czerwooonka/netzsch_database/temp/${selectedMonth}`
  );

  return (
    <div className="panel">
      <p>Temperatures in Kraków in 2023</p>
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
            {/* <label htmlFor="cars">
            Choose a car:{selectedMonth}
            {converter._fromCelsiusToFahrenheit(11)}
          </label> */}

            <select
              className="m-5"
              name="unit"
              id="unit"
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                (selectedUnit = e.target.value)
              }
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
      {data && <LineChart data={data}></LineChart>}
    </div>
  );
}

export default ChartPanel;
