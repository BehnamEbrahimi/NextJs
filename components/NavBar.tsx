import { useContext } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { HeaderTranslationContext } from "../contexts/TranslationsContexts";
import styles from "./NavBar.module.scss";
import MenuItem from "./MenuItem";

interface Props {}

const NavBar: NextPage<Props> = () => {
  const router = useRouter();
  const headerTranslationContext = useContext(HeaderTranslationContext);

  return (
    <div className={`container ${styles.wrapper}`}>
      <div>
        <h1>
          <span className="highlight">Title</span> and Logo
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <MenuItem
              text={headerTranslationContext["back-to-home"]}
              to="/"
              active={router.pathname === "/"}
            />
          </li>
          <li>
            <MenuItem
              text={headerTranslationContext["go-to-about"]}
              to="/about"
              active={router.pathname === "/about"}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
