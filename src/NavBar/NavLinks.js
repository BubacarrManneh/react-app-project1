import Classes from "./NavBar.module.css";
import Header from "../Header/Header";

const NavLinks = () => {
  return (
    <div className={Classes.NavLinks}>
      <Header header={"Bubacarr"} />
      <nav>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>

          <li>
            <a href="/#Skill">Skills</a>
          </li>
          <li>
            <a href="/#About">About</a>
          </li>
          <li>
            <a href="/#Footer">Contact</a>
          </li>
          <li>
            <a href="/#Projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
