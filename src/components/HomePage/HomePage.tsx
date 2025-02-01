import { Layout, Menu, Avatar, Button, Breadcrumb, Input } from "antd";
import {
  DashboardOutlined,
  ProjectOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  BookOutlined,
  TeamOutlined,
  FileTextOutlined,
  UsergroupAddOutlined,
  BankOutlined,
  BellOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import image from "./avatarImage.png";
import {
  DefaultImgIcon,
  ECommerce,
  HeaderBell,
  HeaderBookmark,
  HeaderNotification,
  OnlineCourses,
  OverviewIcon,
  Projects,
  ReloadButton,
  RightArrow,
  RightBorder,
  SearchIconEnd,
  SearchIconStart,
  ThemeButton,
} from "../../icons";
import "./homePage.css";
import { Header } from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { ButtonBase, IconButton } from "@mui/material";
import StatCard from "../../smallComponents/statcards/StatCard";
import StackedBar from "../../smallComponents/BarGraph/Bargraph";
import WavyCurve from "../../smallComponents/BarGraph/WavyCurve";
import GraphCard from "../../smallComponents/GraphCard/GraphCard";

const { Sider } = Layout;
function HomePage() {
  // Sample data for the area chart
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
        style={{ background: isBackground ? "#f5f5f5" : "none" }}
      >
        {icon && <span className="menu-icon">{icon}</span>}
        {rightIcon && <span className="menu-right-icon">{rightIcon}</span>}
        <span className="menu-label">{label}</span>
      </div>
    );
  };

  return (
    <Layout style={{ minHeight: "100vh", display: "flex" }}>
      <Sider
        theme="light"
        width={212}
        style={{ borderRight: "1px solid #f0f0f0" }}
      >
        <div
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar size={24} src={image} />
          <span
            style={{ fontWeight: "300", fontSize: "14px", lineHeight: "20px" }}
          >
            ByeWind
          </span>
        </div>
        {/* second component */}
        <div style={{ padding: "0 16px", marginTop: "14px" }}>
          <div className="sub-heading">Favorites</div>
          <div className="menu-container">
            <MenuItem icon={<OverviewIcon />} label="Overview" />
            <MenuItem icon={<OverviewIcon />} label="Projects" />
          </div>
        </div>
        {/* third container */}
        <div style={{ padding: "0 16px", marginTop: "14px" }}>
          <div className="sub-heading">Dashboards</div>
          <div className="menu-container">
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
          </div>
        </div>
        <div style={{ padding: "0 16px", marginTop: "24px" }}>
          <div className="sub-heading">Pages</div>
          <Menu mode="inline" style={{ border: "none" }} />
        </div>
      </Sider>

      {/* Middle Section with Navbar */}
      <Layout style={{ flex: 1 }}>
        <Header
          style={{
            background: "#fff",
            padding: "0 24px",
            borderBottom: "1px solid #f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {" "}
            <HeaderBookmark />
            <HeaderNotification />
            <Breadcrumb
              items={[
                {
                  title: "Dashboard",
                },
                {
                  title: "Default",
                },
              ]}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div>
              <Input
                placeholder="Search"
                prefix={<SearchIconStart />}
                suffix={<SearchIconEnd />}
                width={180}
                style={{ backgroundColor: "#1C1C1C0D" }}
              />
            </div>

            <ThemeButton />
            <ReloadButton />
            <HeaderBell />
            <HeaderNotification />
          </div>
        </Header>
        <Content style={{ padding: "24px", background: "#fff" }}>
          <div>
            <span
              style={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
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
                gap: "16px",
                width: "50%",
              }}
            >
              <StatCard
                backGroundColor="#E3F5FF"
                heading="Customers"
                subHeqading="3781"
                isIncrease={true}
                subStat="+11.01%"
              />
              <StatCard
                backGroundColor="#E3F5FF"
                heading="Customers"
                subHeqading="3781"
                isIncrease={true}
                subStat="+11.01%"
              />
              <StatCard
                backGroundColor="#E3F5FF"
                heading="Customers"
                subHeqading="3781"
                isIncrease={true}
                subStat="+11.01%"
              />
              <StatCard
                backGroundColor="#E3F5FF"
                heading="Customers"
                subHeqading="3781"
                isIncrease={true}
                subStat="+11.01%"
              />
            </div>
            {/* bar graph component */}
            <div style={{ width: "50%" }}>
              {" "}
              <StackedBar />
            </div>
          </div>

          {/* wavy curve section */}
          <div style={{ marginTop: "16px",display:'flex',gap:'15px' }}>
            <div>
              <WavyCurve/>
            </div>
            <GraphCard/>
          </div>
        </Content>
      </Layout>

      {/* Right Slider */}
      <Sider
        theme="light"
        width={280}
        style={{ borderLeft: "1px solid #f0f0f0", padding: "16px" }}
      >
        <div className="sub-heading">Notifications</div>
        <div className="menu-container">
          <MenuItem icon={<BellOutlined />} label="New Updates" />
          <MenuItem icon={<MessageOutlined />} label="Messages" />
        </div>
      </Sider>
    </Layout>
  );
}

export default HomePage;
