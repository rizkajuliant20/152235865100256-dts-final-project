import { Link, useLocation } from "react-router-dom";

const NavItem = (nav) => {
  const { pathname } = useLocation();
  const clickTheme = "decoration-solid underline underline-offset-4 decoration-2";

  return (
    <div className={pathname === nav.link ? clickTheme : ""}>
      <Link to={nav.link}>{nav.name}</Link>
    </div>
  );
};

export default NavItem;
