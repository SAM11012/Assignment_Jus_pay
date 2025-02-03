import React, { useState } from "react";
import { RightArrow } from "../icons";
import { PagesDownArrow } from "../components/MainTable/TableIcons";
import { DarkDownArrow, DarkRightArrow } from "../darkIcons";

const optionsList = [
  "Overview",
  "Projects",
  "Campaigns",
  "Documents",
  "Followers",
];

const DropDownComponent = ({
  label,
  rightIcon,
  OptionsOpen = false,
  isDark
}: {
  icon?: React.ReactNode;
  label: string;
  rightIcon?: React.ReactNode | any;
  OptionsOpen?: boolean;
  isDark?: boolean;
}) => {
  const [open, setOpen] = useState<boolean>(OptionsOpen);
  return (
    <>
      <div
        style={{
          padding: "4px 8px",
          borderRadius: "8px",
          display: "flex",
          gap: "4px",
        }}
      >
        <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
          {open ? (
            isDark ? (
              <DarkDownArrow />
            ) : (
              <PagesDownArrow />
            )
          ) : isDark ? (
           <DarkRightArrow />
          ) : (
            <RightArrow />
          )}
           
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          {rightIcon}
          {/* {rightIcon} */}
          <span className="menu-label">{label}</span>
        </div>
      </div>
      {open && (
        <>
          {optionsList.map((item: string) => {
            return <OptionItem label={item} />;
          })}
        </>
      )}
    </>
  );
};
export default DropDownComponent;

const OptionItem = ({ label }: any) => {
  return (
    <div
      style={{
        padding: "4px 8px",
        borderRadius: "8px",
        display: "flex",
        gap: "4px",
      }}
    >
      <div>
        <div style={{ width: "24px", height: "20px" }}></div>
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        <div style={{ width: "20px", height: "20px" }}></div>
        {/* {rightIcon} */}
        <span className="menu-label">{label}</span>
      </div>
    </div>
  );
};
