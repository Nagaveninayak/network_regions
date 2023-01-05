import data from "./data.json";
import React, { useEffect } from "react";
import Chart from "react-google-charts";

function App() {
  let dataList = [["Region", "$ Usage"]];

  useEffect(() => {
    data.map((item) => {
      dataList.push([item.region, item.data]);
    });
  }, []);

  console.log(dataList);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Network available in regions</h3>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="650px"
        data={dataList}
        options={{
          colorAxis: { colors: ["#99cdde", "#1c54a3", "#1b2580", "#4511b8"] },
          backgroundColor: "#f7f2fc",
          datalessRegionColor: "#f3ebfc",
          defaultColor: "#f5f5f5",
        }}
      />
    </>
  );
}

export default App;
