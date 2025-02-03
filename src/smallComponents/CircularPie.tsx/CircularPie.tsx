import { motion } from "framer-motion";

import {
  BlackCurve,
  BlackDot,
  BlueDot,
  DarkPurpleDot,
  FirstCurve,
  FourthCurve,
  GreenDot,
  SecondCurve,
  ThirdCurve,
} from "../../darkIcons";
import { Tooltip } from "@mui/material";

type Props = { isDark: boolean };

export const CircularPie = ({ isDark }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "var(--content-bg-color)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        width: "100%",
        height: "100%", // Ensures full height usage
        gap: "16px",
      }}
    >
      <span
        style={{
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "20px",
          width: "100%", // Ensures text aligns properly
          color: "var(--conter-title-text)",
        }}
      >
        Total Sales
      </span>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          marginLeft: "26px",
        }}
      >
        <Tooltip title="16.4%">
          <motion.div
            style={{
              position: "absolute",
              top: "17px",
              left: "15px",
              transform: "rotate(-8deg)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <FirstCurve />
          </motion.div>
        </Tooltip>
        <Tooltip title="40%">
          <motion.div
            style={{
              position: "absolute",
              top: "28px",
              left: "80px",
              transform: "rotate(-9deg)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {!isDark ? <BlackCurve /> : <SecondCurve />}
          </motion.div>
        </Tooltip>
        <Tooltip title="38.6%">
          <motion.div
            style={{
              position: "absolute",
              top: "70px",
              left: "4px",
              transform: "rotate(-10deg)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <ThirdCurve />
          </motion.div>
        </Tooltip>
        <Tooltip title="5%">
          <motion.div
            style={{
              position: "absolute",
              top: "43px",
              left: "0px",
              transform: "rotate(-10deg)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FourthCurve />
          </motion.div>
        </Tooltip>
      </div>
      {/* Content Wrapper for Equal Alignment */}
      <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {!isDark ? <BlackDot /> : <DarkPurpleDot />}
            <span
              style={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",

                color: "var(--conter-title-text)",
              }}
            >
              Total Sales
            </span>
          </div>
          <span
            style={{
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",

              color: "var(--conter-title-text)",
            }}
          >
            $300.56
          </span>
        </div>
        {/* second */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <GreenDot />
            <span
              style={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",

                color: "var(--conter-title-text)",
              }}
            >
              Affilliate
            </span>
          </div>
          <span
            style={{
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",

              color: "var(--conter-title-text)",
            }}
          >
            $135.18
          </span>
        </div>
        {/* third */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DarkPurpleDot />
            <span
              style={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",

                color: "var(--conter-title-text)",
              }}
            >
              Sponsored
            </span>
          </div>
          <span
            style={{
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",

              color: "var(--conter-title-text)",
            }}
          >
            $154.02
          </span>
        </div>
        {/* fourth */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BlueDot />
            <span
              style={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",

                color: "var(--conter-title-text)",
              }}
            >
              E-Mail
            </span>
          </div>
          <span
            style={{
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",

              color: "var(--conter-title-text)",
            }}
          >
            $48.96
          </span>
        </div>
      </div>
    </div>
  );
};
