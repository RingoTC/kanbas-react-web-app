import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

function CourseCard(props) {
  return (
    <div className="card course" key={props.id}>
      <a href={`/kanbas/course/course-edit#${props.id}`}>
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
      </a>
      <div className="card-body">
        <a href="/kanbas/course/course-edit">
          <h5 className="card-title">
            {props.name}
            <i
              className="fa-duotone fa-person-to-portal"
              aria-hidden="true"
            ></i>
          </h5>
          <p className="card-text">{props.description}</p>
        </a>
        <a href="#" className="btn float-start">
          <FontAwesomeIcon icon={faRightToBracket} />
        </a>
      </div>
    </div>
  );
}

export default CourseCard;
