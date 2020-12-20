import { useContext } from "react";
import { NextPage } from "next";
import { Link } from "../i18n";
import { HeaderTranslationContext } from "../contexts/TranslationsContexts";

interface Props {}

const NavBar: NextPage<Props> = () => {
  const headerTranslationContext = useContext(HeaderTranslationContext);

  return (
    <div className="container">
      <div id="branding">
        <h1>Tile and Logo</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>{headerTranslationContext["back-to-home"]}</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>{headerTranslationContext["go-to-about"]}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
