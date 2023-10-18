import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./components/KanbasNavigation";
import Dashboard from "./Dashboard";
export default function index() {
  return (
    <div className="body container-fluid row">
      <div className="left col-1">
        <KanbasNavigation />
      </div>
      <div className="right col-11">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}
