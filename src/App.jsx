import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import DashboardPage from "./pages/dashboard";
import TaskListPage from "./pages/bible";
import HistroyPage from "./pages/history";
import SettingsPage from "./pages/settings";
import HelpCenterPage from "./pages/helpCenter";
import Auth from "./layouts/auth";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgetPassword from "./pages/forgetPassword";

import QuestionPage from "./pages/question";

const App = () => {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="question" element={<QuestionPage />} />
        <Route path="bible" element={<TaskListPage />} />
        <Route path="histroy" element={<HistroyPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help-center" element={<HelpCenterPage />} />
      </Route>

      <Route path="/auth" element={<Auth />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
      </Route>
    </Routes>
  );
};

export default App;
