import React from "react";
import { Avatar } from "antd";
import { BugIcon } from "../../icons";

interface Notification {
  message: string;
  time: string;
}

interface Activity extends Notification {
  avatar: string;
}

interface Contact {
  avatar: string;
  name: string;
}

interface SectionProps<T> {
  title: string;
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
}

const Section = <T,>({ title, data, renderItem }: SectionProps<T>) => (
  <div style={{ paddingBottom: "1rem" }}>
    <p style={{ fontWeight: "600", fontSize: "14px", lineHeight: "20px", paddingBottom: "1rem" }}>
      {title}
    </p>
    {data.map(renderItem)}
  </div>
);

const NotificationItem: React.FC<{ icon: JSX.Element } & Notification> = ({ icon, message, time }) => (
  <div className="flex gap-4 py-1 relative">
    <div className="relative">
      <div className="flex items-center justify-center relative z-10">{icon}</div>
    </div>
    <div>
      <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px" }}>{message}</p>
      <p style={{ fontWeight: "400", fontSize: "12px", lineHeight: "18px", color: "#1C1C1C66" }}>{time}</p>
    </div>
  </div>
);

const ContactItem: React.FC<Contact> = ({ avatar, name }) => (
  <div className="flex gap-4 py-1 relative">
    <div className="relative">
      <div className="flex items-center justify-center relative z-10">
        <Avatar src={avatar} size='small'/>
      </div>
    </div>
    <div>
      <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px" }}>{name}</p>
    </div>
  </div>
);

interface DashboardSidebarProps {
  notifications: Notification[];
  activities: Activity[];
  contacts: Contact[];
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ notifications, activities, contacts }) => {
  return (
    <div>
      <Section
        title="Notifications"
        data={notifications}
        renderItem={(item, index) => (
          <NotificationItem key={index} icon={<BugIcon />} {...item} />
        )}
      />

      <Section
        title="Activities"
        data={activities}
        renderItem={(item, index) => (
          <NotificationItem key={index} icon={<Avatar src={item.avatar} />} {...item} />
        )}
      />

      <Section
        title="Contacts"
        data={contacts}
        renderItem={(item, index) => <ContactItem key={index} {...item} />}
      />
    </div>
  );
};