import ModuleList from "./ModuleList";
import Sidebar from "../../utilities/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
function Modules() {
  return (
    <div>
      <div className="flex flex-row d-flex flex-wrap">
        <ModuleList></ModuleList>
      </div>
    </div>
  );
}

export default Modules;
