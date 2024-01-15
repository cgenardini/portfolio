import "./Header.css";
import HeaderNav from "../HeaderNav/HeaderNav";

function Header({ logoSrc }) {
  return (
    <header className="header">
      <HeaderNav logo={logoSrc} />
    </header>
  );
}

export default Header;
