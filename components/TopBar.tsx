import { useContext } from "react";
import { NextPage } from "next";
import { i18n } from "../i18n";
import { HeaderTranslationContext } from "../contexts/TranslationsContexts";

interface Props {}

const TopBar: NextPage<Props> = () => {
  const headerTranslationContext = useContext(HeaderTranslationContext);

  return (
    <div className="container">
      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "fa" : "en")
        }
      >
        {headerTranslationContext.lang}
      </button>
    </div>
  );
};

export default TopBar;
