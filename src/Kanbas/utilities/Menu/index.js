import { Link, useLocation } from "react-router-dom";
// menu for whole site
function Links2Icon(linkname) {
  switch (linkname) {
    case "Account":
      return (
        <svg
          t="1696045780899"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4323"
          width="40"
          height="40"
        >
          <path
            d="M956.696 512.758c0 245.27-199.054 444.138-444.615 444.138-245.538 0-444.522-198.869-444.522-444.138 0-188.265 117.182-349.108 282.675-413.747C400.237 78.84 454.864 67.7 512.092 67.7c57.298 0 111.88 11.128 161.93 31.311 165.482 64.64 282.674 225.483 282.674 413.747m-615.482-93.666c0 74.847 38.35 139.649 94.097 171.368 23.12 13.156 49.152 20.742 76.77 20.742 26.649 0 51.773-7.096 74.287-19.355 57.064-31.114 96.65-96.708 96.65-172.743 0-105.867-76.664-192.04-170.936-192.04-94.215-0.01-170.868 86.163-170.868 192.028m172.673 509.022c129.883 0 245.747-59.732 321.689-153.211-8.972-73.74-80.825-136.513-182.518-167.826-38.408 34.551-87.479 55.34-140.99 55.34-54.698 0-104.77-21.907-143.55-57.961-98.923 28.234-171.38 85.823-188.369 154.831 75.358 102.37 196.817 168.827 333.738 168.827m0 0z"
            p-id="4324"
            fill="#cdcdcd"
          ></path>
        </svg>
      );
    case "Dashboard":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ic-icon-svg ic-icon-svg--dashboard"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 280 200"
          enableBackground="new 0 0 280 200"
        >
          <path d="M273.09,180.75H197.47V164.47h62.62A122.16,122.16,0,1,0,17.85,142a124,124,0,0,0,2,22.51H90.18v16.29H6.89l-1.5-6.22A138.51,138.51,0,0,1,1.57,142C1.57,65.64,63.67,3.53,140,3.53S278.43,65.64,278.43,142a137.67,137.67,0,0,1-3.84,32.57ZM66.49,87.63,50.24,71.38,61.75,59.86,78,76.12Zm147,0L202,76.12l16.25-16.25,11.51,11.51ZM131.85,53.82v-23h16.29v23Zm15.63,142.3a31.71,31.71,0,0,1-28-16.81c-6.4-12.08-15.73-72.29-17.54-84.25a8.15,8.15,0,0,1,13.58-7.2c8.88,8.21,53.48,49.72,59.88,61.81a31.61,31.61,0,0,1-27.9,46.45ZM121.81,116.2c4.17,24.56,9.23,50.21,12,55.49A15.35,15.35,0,1,0,161,157.3C158.18,152,139.79,133.44,121.81,116.2Z"></path>
        </svg>
      );
    case "Courses":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ic-icon-svg ic-icon-svg--courses"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 280 259"
          enableBackground="new 0 0 280 259"
        >
          <path d="M73.31,198c-11.93,0-22.22,8-24,18.73a26.67,26.67,0,0,0-.3,3.63v.3a22,22,0,0,0,5.44,14.65,22.47,22.47,0,0,0,17.22,8H200V228.19h-134V213.08H200V198Zm21-105.74h90.64V62H94.3ZM79.19,107.34V46.92H200v60.42Zm7.55,30.21V122.45H192.49v15.11ZM71.65,16.71A22.72,22.72,0,0,0,49,39.36V190.88a41.12,41.12,0,0,1,24.32-8h157V16.71ZM33.88,39.36A37.78,37.78,0,0,1,71.65,1.6H245.36V198H215.15v45.32h22.66V258.4H71.65a37.85,37.85,0,0,1-37.76-37.76Z"></path>
        </svg>
      );
    case "Calendar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ic-icon-svg ic-icon-svg--calendar"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 280 280"
          enableBackground="new 0 0 280 280"
        >
          <path d="M197.07,213.38h16.31V197.07H197.07Zm-16.31,16.31V180.76h48.92v48.92Zm-48.92-16.31h16.31V197.07H131.85Zm-16.31,16.31V180.76h48.92v48.92ZM66.62,213.38H82.93V197.07H66.62ZM50.32,229.68V180.76H99.24v48.92Zm146.75-81.53h16.31V131.85H197.07Zm-16.31,16.31V115.54h48.92v48.92Zm-48.92-16.31h16.31V131.85H131.85Zm-16.31,16.31V115.54h48.92v48.92ZM66.62,148.15H82.93V131.85H66.62ZM50.32,164.46V115.54H99.24v48.92ZM34,262.29H246V82.93H34ZM246,66.62V42.16A8.17,8.17,0,0,0,237.84,34H213.38v8.15a8.15,8.15,0,1,1-16.31,0V34H82.93v8.15a8.15,8.15,0,0,1-16.31,0V34H42.16A8.17,8.17,0,0,0,34,42.16V66.62Zm-8.15-48.92a24.49,24.49,0,0,1,24.46,24.46V278.6H17.71V42.16A24.49,24.49,0,0,1,42.16,17.71H66.62V9.55a8.15,8.15,0,0,1,16.31,0v8.15H197.07V9.55a8.15,8.15,0,1,1,16.31,0v8.15Z"></path>
        </svg>
      );
    case "Inbox":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ic-icon-svg"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 280 259"
          enableBackground="new 0 0 280 259"
        >
          <path d="M73.31,198c-11.93,0-22.22,8-24,18.73a26.67,26.67,0,0,0-.3,3.63v.3a22,22,0,0,0,5.44,14.65,22.47,22.47,0,0,0,17.22,8H200V228.19h-134V213.08H200V198Zm21-105.74h90.64V62H94.3ZM79.19,107.34V46.92H200v60.42Zm7.55,30.21V122.45H192.49v15.11ZM71.65,16.71A22.72,22.72,0,0,0,49,39.36V190.88a41.12,41.12,0,0,1,24.32-8h157V16.71ZM33.88,39.36A37.78,37.78,0,0,1,71.65,1.6H245.36V198H215.15v45.32h22.66V258.4H71.65a37.85,37.85,0,0,1-37.76-37.76Z"></path>
        </svg>
      );
    case "Help":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ic-icon-svg menu-item__icon svg-icon-help"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 200 200"
          enableBackground="new 0 0 200 200"
          fill="currentColor"
        >
          <path
            d="M100,127.88A11.15,11.15,0,1,0,111.16,139,11.16,11.16,0,0,0,100,127.88Zm8.82-88.08a33.19,33.19,0,0,1,23.5,23.5,33.54,33.54,0,0,1-24,41.23,3.4,3.4,0,0,0-2.74,3.15v9.06H94.42v-9.06a14.57,14.57,0,0,1,11.13-14,22.43,22.43,0,0,0,13.66-10.27,22.73,22.73,0,0,0,2.31-17.37A21.92,21.92,0,0,0,106,50.59a22.67,22.67,0,0,0-19.68,3.88,22.18,22.18,0,0,0-8.65,17.64H66.54a33.25,33.25,0,0,1,13-26.47A33.72,33.72,0,0,1,108.82,39.8ZM100,5.2A94.8,94.8,0,1,0,194.8,100,94.91,94.91,0,0,0,100,5.2m0,178.45A83.65,83.65,0,1,1,183.65,100,83.73,83.73,0,0,1,100,183.65"
            transform="translate(-5.2 -5.2)"
          ></path>
        </svg>
      );
    default:
      return null;
  }
}
function Menu() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "Help",
  ];
  const { pathname } = useLocation();
  return (
    <div id="navbar" className="list-group">
      <li className="nav-item logo-container">
        <a
          className="nav-link logo"
          href="https://northeastern.instructure.com/"
        ></a>
      </li>
      {links.map((link, index) => (
        <li className="nav-item" key={index}>
          <a
            className={`nav-link ${pathname.includes(link) && "active"}`}
            href="/kanbas/profile"
          >
            <div className="nav-icon-container" aria-hidden="true">
              {Links2Icon(link)}
            </div>
            <div className="menu-text">{link}</div>
          </a>
        </li>
      ))}
    </div>
  );
}

export default Menu;
