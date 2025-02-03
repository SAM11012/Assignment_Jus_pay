import React, { useState, useRef, useEffect } from "react";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

const UserProfileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {/* Button Section */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
      >
        {/* Toggle between Right (→) and Down (↓) Icons */}
        {open ? <DownOutlined /> : <RightOutlined />}

        {/* User Profile Section */}
        <span className="menu-label">User Profile</span>
      </div>

      {/* Dropdown Menu (Appears below "User Profile") */}
      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2 border border-gray-200">
          <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">Account Settings</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">Notifications</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">Logout</div>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
