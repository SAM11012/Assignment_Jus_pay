import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface ProgressProps {
  targetProgress: number; // Target progress value
}

export default function LinearDeterminate({ targetProgress }: ProgressProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= targetProgress) {
          clearInterval(timer);
          return targetProgress;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, targetProgress);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [targetProgress]);

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          backgroundColor: "#E0E0E0", // Background color
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#A8C5DA", // Progress bar color
          },
        }}
      />
    </Box>
  );
}
