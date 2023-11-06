import "./index.scss";

function NavButton({ navLink, navName }) {
  return (
    <a href={navLink} className="nav-button">
      {navName}
    </a>
  );
}

export default NavButton;
