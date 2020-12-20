import { useContext, useState } from "react";
import { NextPage } from "next";
import { HeaderTranslationContext } from "../contexts/TranslationsContexts";
import styles from "./NavBar.module.scss";
import MenuItem from "./MenuItem";

interface Props {}

const NavBar: NextPage<Props> = () => {
  const headerTranslationContext = useContext(HeaderTranslationContext);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className={`container ${styles.wrapper}`}>
      <div>
        <h1 className={styles.logo}>
          <span className="highlight">Title</span> and Logo
        </h1>
      </div>
      <nav>
        <ul className={styles.list}>
          <li
            className={styles["list-item"]}
            onClick={() => {
              setActiveTab("home");
            }}
          >
            <MenuItem
              text={headerTranslationContext["back-to-home"]}
              to="/"
              active={activeTab === "home"}
            />
          </li>
          <li
            className={styles["list-item"]}
            onClick={() => {
              setActiveTab("about");
            }}
          >
            <MenuItem
              text={headerTranslationContext["go-to-about"]}
              to="/about"
              active={activeTab === "about"}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
