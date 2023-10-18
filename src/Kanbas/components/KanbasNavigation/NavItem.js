function NavItem({ link, iconSVG, label }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        <div className="nav-icon-container" aria-hidden="true">
          {iconSVG}
        </div>
        <div className="menu-text">{label}</div>
      </a>
    </li>
  );
}
export default NavItem;
