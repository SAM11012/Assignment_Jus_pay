import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { WorldMap } from "../../icons";
import ProgressComponent from "./ProgressComponent";
type Props = {};

export default function GraphCard({}: Props) {
  return (
    <div
      style={{
        backgroundColor: "#F7F9FB",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        gap: "20px",
        width: "100%",
      }}
    >
      <span
        style={{
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "20px",
          textAlign: "center",
          width: "100%", // Ensures text aligns properly
        }}
      >
        Revenue by Location
      </span>
      <div>
        <WorldMap />
      </div>

      <div>
        {" "}
        <StateBox />
      </div>
    </div>
  );
}

const StateBox = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p
          style={{
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "18px",
            padding: 0,
            margin: 0,
          }}
        >
          New York
        </p>
        <span
          style={{
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          72K
        </span>
      </div>
      <ProgressComponent progress={73} />
    </div>
  );
};
