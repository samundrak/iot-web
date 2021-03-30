import { Tooltip } from "@chakra-ui/tooltip";
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

const ChartBox = () => {
  return (
    <ResponsiveContainer width={"99%"} height={250}>
      <LineChart data={[]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          dataKey={"temperature"}
          stroke={"red"}
          name={"Temperature"}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default ChartBox;
