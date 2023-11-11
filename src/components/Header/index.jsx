import { Icon } from "@iconify/react";
import "./index.scss";
import Banner from "../Banner";

function Header() {
  return (
    <header className="header">
      <a
        title="Voir le code source sur GitHub"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/MadinaOdou/Portfolio"
      >
        <Icon className="header-logo" icon="line-md:github-loop" rotate={2} />
      </a>
      <Banner title={"Madina Odou"} description={"Hello, je suis ..."} />
    </header>
  );
}

export default Header;
