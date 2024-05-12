import {
  MdOutlineAddHomeWork,
  MdOutlinePostAdd,
  MdSpaceDashboard,
  MdEvent,
  MdNotifications,
} from "react-icons/md";
import { BsFillPostcardHeartFill, BsRecord } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { RiProfileFill, RiProgress1Fill, RiTeamFill } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdPostAdd } from "react-icons/md";
import { GiMedicalDrip, GiProgression } from "react-icons/gi";
import {
  Baby,
  BarChart2,
  BookOpen,
  Cog,
  CupSoda,
  HelpCircle,
  LayoutDashboard,
  Mails,
  MessageSquareDashed,
  Store,
  User,
  Users,
} from "lucide-react";
import { TbReportAnalytics } from "react-icons/tb";
export const pSideBar = [
  {
    title: "Dashboard",
    url: "/dashboard/patient-dashboard",
    icon: <MdSpaceDashboard size={25} />,
  },
  {
    title: "Appointments",
    url: "/dashboard/patient-dashboard/appointment",
    icon: <BsFillPostcardHeartFill size={25} />,
  },
  {
    title: "Medical Records",
    url: "/dashboard/patient-dashboard/med-records",
    icon: <GiMedicalDrip size={25} />,
  },
  {
    title: "Symptom Tracker",
    url: "/dashboard/patient-dashboard/sym-track",
    icon: <GiProgression size={25} />,
  },
  {
    title: "Notifications",
    url: "/dashboard/patient-dashboard/notification",
    icon: <MdNotifications size={25} />,
  },
  {
    title: "Profile Settings",
    url: "/dashboard/patient-dashboard/profile",
    icon: <RiProfileFill size={25} />,
  },
];

export const dSideBar = [
  {
    title: "Dashboard",
    url: "/dashboard/doctor-dashboard",
    icon: <MdSpaceDashboard size={25} />,
  },
  {
    title: "Appointments",
    url: "/dashboard/doctor-dashboard/appointment",
    icon: <BsFillPostcardHeartFill size={25} />,
  },
  {
    title: "Patient Records",
    url: "/dashboard/doctor-dashboard/p-records",
    icon: <GiMedicalDrip size={25} />,
  },
  {
    title: "Lab Orders",
    url: "/dashboard/doctor-dashboard/lab-order",
    icon: <TbReportAnalytics size={25} />,
  },
  {
    title: "Notifications",
    url: "/dashboard/doctor-dashboard/notification",
    icon: <MdNotifications size={25} />,
  },
  {
    title: "Profile Settings",
    url: "/dashboard/doctor-dashboard/profile",
    icon: <RiProfileFill size={25} />,
  },
];

export const adminSideBar = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        url: "/admin-dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Users",
        url: "/admin-dashboard/users",
        icon: <User />,
      },
      {
        title: "Post",
        url: "/admin-dashboard/posts",
        icon: <MessageSquareDashed />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        url: "/dashboard/revenue",
        icon: <BarChart2 />,
      },
      {
        title: "Reports",
        url: "/dashboard/reports",
        icon: <BookOpen />,
      },
      {
        title: "Teams",
        url: "/dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Cog />,
      },
      {
        title: "Help",
        url: "/dashboard/help",
        icon: <HelpCircle />,
      },
    ],
  },
];

export const chatSidebar = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        url: "/",
        icon: <LayoutDashboard />,
      },
      {
        title: "Chats",
        url: "/chats",
        icon: <Mails size={25} />,
      },
    ],
  },
];
