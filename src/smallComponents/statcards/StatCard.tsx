import React from "react";
import { DownArrowStat, UpArrow } from "../../icons";

type StatcardProps = {
    heading:string,
    backGroundColor:string,
    subHeqading:string,
    subStat:string,
    isIncrease:boolean
};

export default function StatCard({backGroundColor,heading,subHeqading,subStat,isIncrease}: StatcardProps) {
  return (
    <div
      style={{
        backgroundColor: `${backGroundColor}`,
        width: "202px",
        height: "112px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",

        borderRadius: "16px",
        minWidth: "200px",
        padding: "24px",
      }}
    >
      <div>
        <span
          style={{ fontWeight: "600", fontSize: "14px", lineHeight: "20px" }}
        >
          {heading}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span
            style={{ fontWeight: "600", fontSize: "24px", lineHeight: "36px" }}
          >
            {subHeqading}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{display:'flex'}}>
            <span
              style={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
              }}
            >
             {subStat}
            </span>
            {isIncrease?<UpArrow />:<DownArrowStat/>}
          </div>
        </div>
      </div>
    </div>
  );
}
