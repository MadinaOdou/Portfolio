import { Icon } from "@iconify/react";
import "./index.scss";
import Banner from "../Banner";
import NavButton from "../NavButton";

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
      <div className="header-nav flex-row">
        <NavButton navLink={"#aboutme"} navName={"About Me"} />
        <NavButton navLink={"#projects"} navName={"Projects"} />
        <NavButton navLink={"#skills"} navName={"Skills"} />
        <NavButton navLink={"#formations"} navName={"Formations"} />
        <NavButton navLink={"#contact"} navName={"Contact"} />
      </div>
    </header>
  );
}

export default Header;
