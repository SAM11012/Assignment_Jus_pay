import React, { useEffect, useState } from "react";
import { Progress } from "antd";
type Props = { progress: number };

export default function ProgressComponent({ progress }: Props) {
    const [initialPro,setProgress] = useState<number>(0)
    useEffect(()=>{
        
    },[])

  return <Progress size={"small"} strokeLinecap="butt" percent={initialPro} style={{ width: "100%" }} />;
}
