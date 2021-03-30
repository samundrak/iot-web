import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const ChartBox = (props) => {
  return (
    <ResponsiveContainer width={450} height={250}>
      <LineChart
        data={props.data || []}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip
        //@ts-ignore
        formatter={(
          value: number,
          name: string,
          options: {
            payload: {
              name: string;
            };
          }
        ) => {
          return ` ${convertToHumanReadableNumbers(value)} (${
            options.payload.name
          })`;
        }}
      /> */}
        <Legend wrapperStyle={{ color: "gray" }} />
        <Line
          type="monotone"
          dataKey={props.dataKey}
          stroke={props.lineColor}
          name={props.name}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default ChartBox;
