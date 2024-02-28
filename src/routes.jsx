import Dashboard from "./layouts/dashboard";
import Tables from "./layouts/tables";
import Notifications from "./layouts/notifications";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/presentation/pages/login_page";
import Icon from "@mui/material/Icon";
import { DashboardRounded, HomeMaxOutlined, TableChartRounded } from "@mui/icons-material";
import DDD from "./layouts/notifications/d";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardRounded />,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <HomeMaxOutlined />,
    route: "/home-manager",
    component: <DDD />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <TableChartRounded />,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
