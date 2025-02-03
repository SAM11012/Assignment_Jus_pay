import CustomTable from "./CustomTable";
import { ConfigProvider } from "antd";
import './MainTable.css'
const TaskTable = ({isDark}:{isDark:boolean}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: isDark?'var(--sidebar-bg)':"transparent",
            headerColor: isDark?"#FFFFFF66":"#6b7280",
            borderColor:isDark?'var(--sidebar-bg)':"transparent",
            // rowHoverBg: "#f3f4f6",
            
          },
          Checkbox: {
            colorPrimary: isDark?"#C6C7F8":"#000000",
            colorPrimaryHover: isDark?"#C6C7F8":"#000000",
            colorPrimaryBorder: isDark?"#FFFFFF1A":"#000000",
            controlInteractiveSize: 16,
            colorBgContainer:isDark?"#1C1C1C":"transparent"
          },
        },
      }}
    >
      <div className="" style={{backgroundColor:'var(--sidebar-bg)'}}>
       
        <CustomTable  isDark={isDark} />
      </div>
    </ConfigProvider>
  );
};

export default TaskTable;
