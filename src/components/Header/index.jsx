import { Icon } from "@iconify/react";
import "./index.scss";
import Banner from "../Banner";

function Header() {
  return (
    <header className="header">
      <a
        title="View code source on Github"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/MadinaOdou/Portfolio"
      >
        <Icon className="header-logo" icon="line-md:github-loop" rotate={2} />
      </a>
      <Banner title={"Madina Odou"} description={"Integrateur web"} />
    </header>
  );
}

export default Header;
