import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CustomizedBarChart({
  margin = {},
  maxWidth,
  height,
  data = [],
  config,
}) {
  const bars = config?.bars.map(({ key, color = "#fff" }) => {
    return (
      <Bar
        key={key}
        dataKey={key}
        radius={[10, 10, 0, 0]}
        fill={color}
        label={{
          fontSize: "8px",
          fill: "#53C8A4",
        }}
      />
    );
  });

  return (
    <div id="graph"
      style={{
        width: "100%",
        maxWidth,
        height,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={margin}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={{fontSize: '11px', fill: '#003838'}} dataKey={config?.Xkey} />
          <YAxis tick={{fontSize: '11px'}} domain={[0, 'deathNumbers']} />
          <Tooltip />
          {bars}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
