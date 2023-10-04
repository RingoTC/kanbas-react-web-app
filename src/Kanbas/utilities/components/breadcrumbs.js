function breadcrumbs(title, subtitle) {
  return (
    <nav aria-label="breadcrumb">
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

export default breadcrumbs;
