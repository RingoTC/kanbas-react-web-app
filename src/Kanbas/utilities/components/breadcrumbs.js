import "./breadcrumbs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Breadcrumbs({ title, subtitle }) {
  return (
    <nav aria-label="breadcrumb" id="breadcrumb">
      <div className="breadcrumb-icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">{title}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {subtitle}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
