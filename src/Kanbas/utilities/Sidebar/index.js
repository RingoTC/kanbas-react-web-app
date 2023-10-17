import { Link, useParams, useLocation } from "react-router-dom";
import "./sidebar.css";
function Sidebar({ description }) {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="sidebar" style={{ width: 150 }}>
      <p className="coursedescription">{description}</p>
      <ul className="nav flex-column">
        <li className="nav-item">
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}
              className={`list-group-item ${
                pathname.includes(link) && "active"
              }`}
            >
              {link}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
