import { Layout, Avatar, Breadcrumb, Input } from "antd";
import image from "./avatarImage.png";
import {
  Blogs,
  BugIcon,
  Corporate,
  DefaultImgIcon,
  ECommerce,
  HeaderBell,
  HeaderBookmark,
  HeaderNotification,
  IdentificationCard,
  OnlineCourses,
  OverviewIcon,
  Projects,
  ReloadButton,
  RightArrow,
  RightBorder,
  RightUserIcon,
  SearchIconEnd,
  SearchIconStart,
  ShareIcon,
  Social,
  ThemeButton,
  UserProfile,
} from "../../icons";
import "./homePage.css";
import { Header } from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import StatCard from "../../smallComponents/statcards/StatCard";
import StackedBar from "../../smallComponents/BarGraph/Bargraph";
import WavyCurve from "../../smallComponents/BarGraph/WavyCurve";
import GraphCard from "../../smallComponents/GraphCard/GraphCard";
import { useState } from "react";
import TaskTable from "../MainTable/TaskTable";
import {
  AddColumnIcon,
  OrderIcon,
  PagesDownArrow,
  SortIcon,
} from "../MainTable/TableIcons";
import DropDownComponent from "../../smallComponents/DropDownComponent";
import ProductTable from "../../smallComponents/ProductTable/ProductTable";
import { useTheme } from "../../thmeContext";
import {
  DarkAddColumn,
  DarkBlogsIcons,
  DarkCorporateIcon,
  DarkDefaultImgIcon,
  DarkECommerce,
  DarkHeaderBellIcon,
  DarkHeaderBookmark,
  DarkHeaderNotification,
  DarkIdentification,
  DarkOnlineCourses,
  DarkOrderIcon,
  DarkOverviewIcon,
  DarkReloadButton,
  DarkRightArrow,
  DarkRightBorder,
  DarkSearchIcon,
  DarkSearchIconEnd,
  DarkSocialIcon,
  DarkSortIcon,
  DarkThemeButton,
  DarkUserProfile,
  DartProjects,
} from "../../darkIcons";
import { CircularPie } from "../../smallComponents/CircularPie.tsx/CircularPie";

const { Sider } = Layout;
function HomePage() {
  const { darkMode, toggleTheme } = useTheme();
  const MenuItem = ({
    icon,
    label,
    rightIcon,
    isBackground,
  }: {
    icon?: React.ReactNode;
    label: string;
    rightIcon?: React.ReactNode | any;
    isBackground?: boolean;
  }) => {
    return (
      <div
        className="menu-item"
        style={{
          background: isBackground ? "#f5f5f5" : "none",
        }}
      >
        {icon && <span className="menu-icon">{icon}</span>}
        {rightIcon && <span className="menu-right-icon">{rightIcon}</span>}
        <span className="menu-label">{label}</span>
      </div>
    );
  };
  const [openRight, SetOpenRight] = useState(true);
  return (
    <Layout style={{ minHeight: "100vh", display: "flex" }}>
      <Sider
        theme={darkMode ? "dark" : "light"} // Toggle theme dynamically
        width={212}
        style={{
          backgroundColor: "var(--sidebar-bg)",
          borderRight: "1px solid var(--sidebar-border)",
          padding: "20px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px",
          }}
        >
          <Avatar
            size={24}
            src={image}
            onClick={() => {
              // SetOpenRight(!openRight);
            }}
          />
          <span
            style={{
              fontWeight: "300",
              fontSize: "14px",
              lineHeight: "20px",
              color: "var(--avatar-text-color)",
            }}
          >
            ByeWind
          </span>
        </div>
        {/* second component */}
        <div style={{ padding: "0 0 12px 0", marginTop: "14px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <div className="sub-heading" style={{ padding: "4px 8px" }}>
              Favorites
            </div>
            <div className="sub-heading-n" style={{ padding: "4px 8px" }}>
              Recently
            </div>
          </div>

          <MenuItem
            icon={darkMode ? <DarkOverviewIcon /> : <OverviewIcon />}
            label="OverView"
          />
          <MenuItem
            icon={darkMode ? <DarkOverviewIcon /> : <OverviewIcon />}
            label="Projects"
          />
        </div>
        {/* third container */}
        <div style={{ padding: "0 0 12px 0", marginTop: "14px" }}>
          <div className="sub-heading" style={{ padding: "4px 12px" }}>
            Dashboards
          </div>
          <DashboardOptions
            label="Defaults"
            icon={darkMode ? <DarkRightBorder /> : <RightBorder />}
            isBackground={true}
            rightIcon={darkMode ? <DarkDefaultImgIcon /> : <DefaultImgIcon />}
          />
          <DashboardOptions
            icon={darkMode ? <DarkRightArrow /> : <RightArrow />}
            rightIcon={darkMode ? <DarkECommerce /> : <ECommerce />}
            label="eCommerce"
            isBackground={false}
          />
          <DashboardOptions
            icon={darkMode ? <DarkRightArrow /> : <RightArrow />}
            rightIcon={darkMode ? <DartProjects /> : <Projects />}
            label="Projects"
            isBackground={false}
          />
          <DashboardOptions
            icon={darkMode ? <DarkRightArrow /> : <RightArrow />}
            rightIcon={darkMode ? <DarkOnlineCourses /> : <OnlineCourses />}
            label="Online Courses"
            isBackground={false}
          />

          {/* <div className="menu-container">
            <MenuItem
              rightIcon={<DefaultImgIcon />}
              icon={<RightBorder />}
              label="Default"
              isBackground={true}
            />
            <MenuItem
              icon={<RightArrow />}
              rightIcon={<ECommerce />}
              label="eCommerce"
            />
            <MenuItem
              icon={<RightArrow />}
              rightIcon={<Projects />}
              label="Projects"
            />
            <MenuItem
              icon={<RightArrow />}
              rightIcon={<OnlineCourses />}
              label="Online Courses"
            />
          </div> */}
        </div>

        {/* fourth container */}
        <div style={{ padding: "0 0 12px", marginTop: "24px" }}>
          <div className="sub-heading" style={{ padding: "4px 12px" }}>
            Pages
          </div>
          <DropDownComponent
            label="User Profile"
            icon={darkMode ? <DarkRightArrow /> : <PagesDownArrow />}
            rightIcon={darkMode ? <DarkUserProfile /> : <UserProfile />}
            OptionsOpen={true}
            isDark={darkMode}
          />
          <DropDownComponent
            label="Account"
            icon={<PagesDownArrow />}
            rightIcon={
              darkMode ? <DarkIdentification /> : <IdentificationCard />
            }
            isDark={darkMode}
          />
          <DropDownComponent
            label="Corporate"
            icon={<PagesDownArrow />}
            rightIcon={darkMode ? <DarkCorporateIcon /> : <Corporate />}
            isDark={darkMode}
          />
          <DropDownComponent
            label="Blogs"
            icon={<PagesDownArrow />}
            rightIcon={darkMode ? <DarkBlogsIcons /> : <Blogs />}
            isDark={darkMode}
          />
          <DropDownComponent
            label="Social"
            icon={<PagesDownArrow />}
            rightIcon={darkMode ? <DarkSocialIcon /> : <Social />}
            isDark={darkMode}
          />
        </div>
      </Sider>

      {/* Middle Section with Navbar */}
      <Layout style={{ flex: 1 }}>
        <Header
          style={{
            backgroundColor: "var(--sidebar-bg)",
            padding: "0 28px",
            borderBottom: "1px solid var(--sidebar-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                SetOpenRight(!openRight);
              }}
            >
              {" "}
              {darkMode ? <DarkHeaderBookmark /> : <HeaderBookmark />}
            </span>
            {darkMode ? <DarkHeaderNotification /> : <HeaderNotification />}
            <Breadcrumb
              separator={
                <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                  /
                </span>
              }
              className={`p-2 ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              <Breadcrumb.Item>
                <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                  Dashboard
                </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span className={darkMode ? "text-white" : "text-black"}>
                  Default
                </span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "160px" }}>
              <Input
                placeholder="Search"
                prefix={darkMode ? <DarkSearchIcon /> : <SearchIconStart />}
                suffix={darkMode ? <DarkSearchIconEnd /> : <SearchIconEnd />}
                style={{
                  backgroundColor: darkMode ? "#FFFFFF1A" : "#1C1C1C0D",
                  color: !darkMode ? "#1c1c1c" : "#fff",
                  borderColor: darkMode ? "#FFFFFF1A" : "#1C1C1C0D",
                }}
                className="custom-input"
              />
            </div>

            <span style={{ cursor: "pointer" }} onClick={toggleTheme}>
              {" "}
              {darkMode ? <DarkThemeButton /> : <ThemeButton />}
            </span>
            {darkMode ? <DarkReloadButton /> : <ReloadButton />}
            {darkMode ? <DarkHeaderBellIcon /> : <HeaderBell />}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                SetOpenRight(!openRight);
              }}
            >
              {" "}
              {darkMode ? <DarkHeaderBookmark /> : <HeaderBookmark />}
            </span>
          </div>
        </Header>
        <Content
          style={{ padding: "28px", backgroundColor: "var(--sidebar-bg)" }}
        >
          {openRight ? (
            <>
              <div>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  eCommerce
                </span>
              </div>
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "20px",
                    width: "50%",
                  }}
                >
                  <StatCard
                    backGroundColor={darkMode ? "#E3F5FF" : "#E3F5FF"}
                    heading="Customers"
                    subHeqading={3781}
                    isIncrease={true}
                    subStat="+11.01%"
                    isDark={darkMode}
                  />
                  <StatCard
                    backGroundColor={darkMode ? "#FFFFFF0D" : "#F7F9FB"}
                    heading="Orders"
                    subHeqading={1219}
                    isIncrease={false}
                    subStat="-0.03%"
                    textColor={darkMode ? "#fff" : "#1c1c1c"}
                    isDark={darkMode}
                  />
                  <StatCard
                    backGroundColor={darkMode ? "#FFFFFF0D" : "#F7F9FB"}
                    heading="Revenue"
                    subHeqading={695}
                    isIncrease={true}
                    subStat="+15.03%"
                    textColor={darkMode ? "#fff" : "#1c1c1c"}
                    isDark={darkMode}
                    preffix="$"
                  />
                  <StatCard
                    backGroundColor="#E5ECF6"
                    heading="Growth"
                    subHeqading={30.1}
                    isIncrease={true}
                    subStat="+6.08%"
                    isDark={darkMode}
                    suffix="%"
                  />
                </div>
                {/* bar graph component */}
                <div style={{ width: "50%" }}>
                  {" "}
                  <StackedBar isDark={darkMode} />
                </div>
              </div>
              {/* wavy curve section */}
              <div style={{ marginTop: "16px", display: "flex", gap: "15px" }}>
                <div style={{ width: "662px" }}>
                  <WavyCurve isDark={darkMode} />
                </div>
                <GraphCard />
              </div>
              {/* table section */}
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  gap: "16px",
                  justifyContent: "space-between",
                }}
              >
                <ProductTable />

                <div style={{ width: "302px" }}>
                  {" "}
                  <CircularPie isDark={darkMode} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div style={{ paddingLeft: "0.5rem" }}>
                {" "}
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  Order List
                </span>
              </div>
              <div
                style={{
                  backgroundColor: darkMode ? "#FFFFFF1A" : "#F7F9FB",
                  borderRadius: "8px",
                  padding: "8px",
                  display: "flex",
                  gap: "16px",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  marginTop: "16px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  {darkMode ? <DarkAddColumn /> : <AddColumnIcon />}
                  {darkMode ? <DarkSortIcon /> : <SortIcon />}
                  {darkMode ? <DarkOrderIcon /> : <OrderIcon />}
                </div>
                <div style={{ width: "160px" }}>
                  <Input
                    placeholder="Search"
                    prefix={darkMode ? <DarkSearchIcon /> : <SearchIconStart />}
                    style={{
                      backgroundColor: darkMode ? "#1c1c1c" : "#fff",
                      color: !darkMode ? "#1c1c1c" : "#fff",
                      borderColor: darkMode ? "#FFFFFF1A" : "#1C1C1C1A",
                    }}
                    className="custom-input"
                  />
                </div>
              </div>
              <TaskTable isDark={darkMode} />
            </>
          )}

          {/* Table section */}
        </Content>
      </Layout>

      {/* Right Slider */}
      {openRight && (
        <Sider
          theme="light"
          width={280}
          style={{
            borderLeft: "1px solid var(--sidebar-border)",
            padding: "22px",
            backgroundColor: "var(--sidebar-bg)",
          }}
        >
          {/* Notification section */}
          <div style={{ paddingBottom: "1rem" }}>
            <p
              className=""
              style={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                paddingBottom: "1rem",
                color: "var(--conter-title-text)",
              }}
            >
              Notifications
            </p>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <BugIcon />
                </div>
                {/* {
              <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2" />
            } */}
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"You have a bug that needs.."}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"Just Now"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <RightUserIcon />
                </div>
                {/* {
              <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2" />
            } */}
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"New User Registered"}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"59 minutes ago"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <BugIcon />
                </div>
                {/* {
              <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2" />
            } */}
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"You have a bug that needs.."}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"12 Hours ago"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <ShareIcon />
                </div>
                {/* {
              <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2" />
            } */}
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Andi Lane subscribed to you"}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"Today,11:59 AM"}
                </p>
              </div>
            </div>
          </div>
          {/* Activities */}

          <div style={{ paddingBottom: "1rem" }}>
            <p
              className=""
              style={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                paddingBottom: "1rem",
                color: "var(--conter-title-text)",
              }}
            >
              Activities
            </p>

            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738445843/3D05_ebq12f.svg"
                  />
                </div>
                {
                  <div
                    className="absolute top-7 left-1/2 h-3 w-0.5  -translate-x-1/2"
                    style={{
                      backgroundColor: darkMode ? "#FFFFFF1A" : "#e5e7eb",
                    }}
                  />
                }
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"You have a bug that needs.."}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"Just Now"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738513472/User_1_zcphsh.png"
                  />
                </div>
                {
                  <div
                    className="absolute top-7 left-1/2 h-3 w-0.5  -translate-x-1/2"
                    style={{
                      backgroundColor: darkMode ? "#FFFFFF1A" : "#e5e7eb",
                    }}
                  />
                }
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Released a New Version"}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"59 Minutes ago"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738513473/User_3_xwxla2.png"
                  />
                </div>
                {
                  <div
                    className="absolute top-7 left-1/2 h-3 w-0.5  -translate-x-1/2"
                    style={{
                      backgroundColor: darkMode ? "#FFFFFF1A" : "#e5e7eb",
                    }}
                  />
                }
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Submitted a bug"}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"12 hours ago"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738513473/User_4_fl14e1.png"
                  />
                </div>
                {
                  <div
                    className="absolute top-7 left-1/2 h-3 w-0.5  -translate-x-1/2"
                    style={{
                      backgroundColor: darkMode ? "#FFFFFF1A" : "#e5e7eb",
                    }}
                  />
                }
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Modified A data in Page X"}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"Today, 11:59 AM"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738513473/User_5_ws5gn3.png"
                  />
                </div>
                {/* {
                  <div className="absolute top-7 left-1/2 h-3 w-0.5 bg-gray-200 -translate-x-1/2" />
                } */}
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Deleted a page in Project X"}
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--notification-sub-text)",
                  }}
                >
                  {"Feb 2, 2023"}
                </p>
              </div>
            </div>
          </div>
          {/* Contacts */}
          <div style={{ paddingBottom: "1rem" }}>
            <p
              className=""
              style={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
                paddingBottom: "1rem",
                color: "var(--conter-title-text)",
              }}
            >
              Contacts
            </p>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738446057/Image2_cwsl4u.png"
                  />
                </div>
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Natali Craig"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738514077/drew_canno_pcbpyh.svg"
                  />
                </div>
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Drew Cano"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738514078/orlando_diggs_a2ywri.svg"
                  />
                </div>
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Orlando Diggs"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738514044/Andi_lanes_ackxcq.svg"
                  />
                </div>
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Andi Lane"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738514078/Kate_morrisan_tochvq.svg"
                  />
                </div>
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Kate Morrison"}
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-1 relative">
              <div className="relative">
                <div className="flex items-center justify-center relative z-10">
                  <Avatar
                    size="small"
                    src="https://res.cloudinary.com/daudgeu0r/image/upload/v1738514077/Koray_okumus_nzbjn2.svg"
                  />
                </div>
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "var(--conter-title-text)",
                  }}
                >
                  {"Koray Okumus"}
                </p>
              </div>
            </div>
          </div>
        </Sider>
      )}
    </Layout>
  );
}

export default HomePage;

const DashboardOptions = ({
  icon,
  label,
  rightIcon,
  isBackground = false,
}: {
  icon?: React.ReactNode;
  label: string;
  rightIcon?: React.ReactNode | any;
  isBackground?: boolean;
}) => {
  return (
    <div
      style={{
        padding: "4px 8px",
        backgroundColor: isBackground ? "#1C1C1C0D" : "none",
        borderRadius: "8px",
        display: "flex",
        gap: "4px",
      }}
    >
      <div>
        {icon}
        {/* <RightBorder /> */}
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        {/* <DefaultImgIcon /> */}
        {rightIcon}
        <span className="menu-label">{label}</span>
      </div>
    </div>
  );
};
