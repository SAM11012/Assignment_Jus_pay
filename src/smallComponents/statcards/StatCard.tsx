import  { useEffect } from "react";
import { DownArrowStat, UpArrow } from "../../icons";
import { DarkStatFallIcon, DarkStatRiseIcon } from "../../darkIcons";
import {
  motion,
  useTransform,
  animate,
  useMotionValue,
} from "framer-motion";
type StatcardProps = {
  heading: string;
  backGroundColor: string;
  subHeqading: number;
  subStat: string;
  isIncrease: boolean;
  textColor?: string;
  isDark: boolean;
  suffix?: string;
  preffix?: string;
};

export default function StatCard({
  backGroundColor,
  heading,
  subHeqading,
  subStat,
  isIncrease,
  textColor = "E3F5FF",
  isDark,
  suffix='',
  preffix=''
}: StatcardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const roundedNumber = Math.round(latest * 10) / 10; // Round to one decimal place
    return  `${preffix}${roundedNumber.toLocaleString()}${suffix}`; // Add commas
  });

  useEffect(() => {
    const animation = animate(count, subHeqading, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count]);

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
          style={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "20px",
            color: textColor,
          }}
        >
          {heading}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <motion.span
            style={{
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "36px",
              color: textColor,
            }}
          >
            {rounded}
          </motion.span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <span
              style={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                color: textColor,
              }}
            >
              {subStat}
            </span>
            {isIncrease ? (
              isDark ? (
                <DarkStatRiseIcon />
              ) : (
                <UpArrow />
              )
            ) : isDark ? (
              <DarkStatFallIcon />
            ) : (
              <DownArrowStat />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
