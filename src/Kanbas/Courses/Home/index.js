import "./style.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModuleList from "../Modules/ModuleList";
import Sidebar from "../../utilities/Sidebar";
function home() {
  return (
    <div className="d-flex flex-column flex-wrap">
      <div className="row">
        <div className="home-buttons">
          <button className="btn btn-default">Collpase All</button>
          <button className="btn btn-default">View Progress</button>
          <div
            className="dropdown"
            style={{
              display: "inline",
              color: "#ffffff",
              margin: "0px 10px 0px 0px",
            }}
          >
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Publish All
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-danger">
            <i
              className="fa-solid fa-plus"
              style={{ color: "#ffffff", margin: "0px 10px 0px 0px" }}
            ></i>
            Module
          </button>
          <button type="button" className="btn btn-default">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <ModuleList></ModuleList>
        </div>
        <div className="col-3">
          <div className="container-fluid course-info">
            <div id="control-course" className="panel">
              <div className="panel-title">
                <p>Course Status</p>
              </div>
              <div className="panel-body">
                <ul className="nav">
                  <li>
                    <div className="parallel-buttons">
                      <button className="btn btn-default">
                        <i className="fa-solid fa-ban"></i>
                        Unpublish
                      </button>
                      <button className="btn btn-success">
                        <i className="fa-solid fa-circle-check"></i>
                        Published
                      </button>
                    </div>
                  </li>
                  <li>
                    <button className="btn btn-default">
                      Import Existing Content
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-default">
                      Import from Commons
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-default">
                      Choose Home Page
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-default">
                      View Course Stream
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-default">
                      New Announcement
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-default">New Analytics</button>
                  </li>
                  <li>
                    <button className="btn btn-default">
                      View Course Notifications
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel" id="feedbacks">
              <div className="panel-title">
                <p>Related Feedbacks</p>
              </div>
              <div className="panel-body">
                <ul className="right-side-list events">
                  <li className="event">
                    <a
                      data-track-category="dashboard"
                      data-track-label="recent feedback"
                      className="recent_feedback_icon"
                    >
                      <i className="icon-check"></i>
                      <div className="event-details">
                        <b className="event-details__title recent_feedback_title">
                          A1 - ENV + HTML
                        </b>
                        <p>
                          <strong>97.78%</strong>
                        </p>
                        <p>
                          "Good Work ! 1. Assignments tab need to changes 2.
                          Unable to navigate to the settings tab 3. Default
                          values for dates..."
                        </p>
                      </div>
                      <div className="clear"></div>
                    </a>
                    <div className="clear"></div>
                  </li>

                  <li className="event">
                    <a
                      data-track-category="dashboard"
                      data-track-label="recent feedback"
                      className="recent_feedback_icon"
                    >
                      <i className="icon-check"></i>
                      <div className="event-details">
                        <b className="event-details__title recent_feedback_title">
                          Q1 - HTML
                        </b>
                        <p>
                          <strong>36 out of 38</strong>
                        </p>
                      </div>
                      <div className="clear"></div>
                    </a>
                    <div className="clear"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
