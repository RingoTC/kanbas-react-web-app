import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./courseCard.css";
function CourseCard(props) {
  return (
    <div key={props.id}>
      <Link
        key={props.id}
        to={`/Kanbas/Courses/${props.id}`}
        className="list-group-item"
      >
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Image cap"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#00a381"></rect>
        </svg>
        <div className="card-body">
          <h5 className="card-title">
            {props.name}
            <i
              className="fa-duotone fa-person-to-portal"
              aria-hidden="true"
            ></i>
          </h5>
          <p className="card-text">{props.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default CourseCard;
