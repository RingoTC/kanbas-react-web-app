import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentsCard from "./assignmentcard";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId,
  );

  return (
    <div>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <AssignmentsCard
            key={assignment._id}
            courseAssignments={[
              {
                _id: "a1",
                title: "A1 SETUP",
                week: "Week O - SETUP",
                startDate: "Monday September 5th （9/5/2022）",
                dueDate: "Due Sep 18, 2022 at 11:59pm",
                points: "100 pts",
                description:
                  "Set up your development environment, get familiar with Git, and create your first repo.",
                resources: [
                  "Git documentation",
                  "Visual Studio Code setup guide",
                ],
              },
              {
                _id: "a2",
                title: "A2 HTML",
                week: "Week 1- HTML",
                startDate: "Monday September 12th （9/12/2022）",
                dueDate: "Due Sep 25, 2022 at 11:59pm",
                points: "100 pts",
                description:
                  "Learn the basics of HTML, create a simple webpage using tags, headers, paragraphs, and links.",
                resources: ["MDN HTML guide", "HTML interactive tutorial"],
              },
              {
                _id: "a3",
                title: "A3 CSS",
                week: "Week 2 - CSS",
                startDate: "Monday September 19th （9/19/2022）",
                dueDate: "Due Oct 2, 2022 at 11:59pm",
                points: "100 pts",
                description:
                  "Style your HTML page from the previous assignment with CSS. Understand classes, IDs, and the box model.",
                resources: ["MDN CSS guide", "CSS Tricks Almanac"],
              },
              {
                _id: "a4",
                title: "A4 BOOTSTRAP",
                week: "Week 3 - Bootstrap",
                startDate: "Monday September 26th （9/26/2022）",
                dueDate: "Due Oct 10, 2022 at 11:59pm",
                points: "100 pts",
                description:
                  "Integrate Bootstrap into your website. Make it responsive and experiment with Bootstrap components.",
                resources: [
                  "Bootstrap official documentation",
                  "Responsive design tutorial",
                ],
              },
              {
                _id: "a5",
                title: "A5 JavaScript",
                week: "Week 4 - Javascript",
                startDate: "Monday October 3rd （10/3/2022）",
                dueDate: "Due Oct 16, 2022 at 11:59pm",
                points: "100 pts",
                description:
                  "Add interactivity to your website using JavaScript. Understand events, DOM manipulation, and basic scripting.",
                resources: ["MDN JavaScript Guide", "JavaScript30 Challenge"],
              },
              {
                _id: "a6",
                title: "A6 REACT",
                week: "Week 5 - React",
                startDate: "Monday October 10th （10/10/2022）",
                dueDate: "Due Oct 23, 2022 at 11:59pm",
                points: "150 pts",
                description:
                  "Start your journey with React. Create a single-page application, understand JSX, props, and state.",
                resources: [
                  "React official documentation",
                  "React beginner tutorial",
                ],
              },
            ]}
            courseId={assignment._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Assignments;
