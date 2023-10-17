import Menu from "./utilities/Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./style.css";

function Kanbas() {
  return (
    <div className="d-flex flex-row container-fluid">
      <Menu />
      <div className="body">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
